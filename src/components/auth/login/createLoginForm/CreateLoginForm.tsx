import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/common/hooks/hooks'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/features/auth/api/auth-api'
import { handleServerNetworkError } from '@/utils/handleServerNetworkError'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../login.module.scss'

const createLoginSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof createLoginSchema>

export const CreateLoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(createLoginSchema),
  })

  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const [signUp, {}] = useSignUpMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
      }).unwrap()

      navigate('/login')
    } catch (e) {
      handleServerNetworkError(dispatch, e)
    }
  }

  return (
    <Card className={s.container}>
      <Typography variant={'h1'}>Sign Up</Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextField
          className={s.textField}
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField
          className={s.textField}
          control={control}
          errorMessage={errors.password?.message}
          inputType={'password'}
          label={'Password'}
          name={'password'}
        />
        <ControlledTextField
          className={s.textField}
          control={control}
          errorMessage={errors.password?.message}
          inputType={'password'}
          label={'Confirm Password'}
          name={'confirmPassword'}
        />
        <Button className={s.signUpBtn} isFullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography variant={'body2'}>Already have an account?</Typography>
      <Typography as={Link} className={s.link} to={'/login'} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
