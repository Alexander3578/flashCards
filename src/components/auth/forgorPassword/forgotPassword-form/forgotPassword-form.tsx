import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/common/hooks/hooks'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField/controlled-textField'
import { PreLoader } from '@/components/ui/preLoader'
import { Typography } from '@/components/ui/typography'
import { useSendRecoveryEmailMutation } from '@/features/auth/api/auth-api'
import { handleError } from '@/utils/handleError'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgotPassword-form.module.scss'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type FormValues = z.infer<typeof loginSchema>

export const ForgotPasswordForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const [sendRecoveryEmail, { isLoading }] = useSendRecoveryEmailMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      await sendRecoveryEmail(data).unwrap()
      navigate('/login/back-to-email')
    } catch (error: unknown) {
      handleError(dispatch, error)
    }
  }

  if (isLoading) {
    return <PreLoader />
  }

  return (
    <Card className={s.container}>
      <Typography variant={'h1'}>Forgot your password?</Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextField
          className={s.textField}
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />

        <div className={s.containerTypography}>
          <Typography colorBalance={900} variant={'body2'}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>
        </div>
        <Button className={s.button} isFullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography colorBalance={900} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={Link} className={s.link} to={'/login'} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
