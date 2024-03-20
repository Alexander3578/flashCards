import { useState } from 'react'
import { useForm } from 'react-hook-form'

import avatar from '@/assets/Ellipse 45.png'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './editable-form.module.scss'

const loginSchema = z.object({
  nickname: z.string().min(1),
})

export type FormValues = z.infer<typeof loginSchema>

export const EditableForm = () => {
  const [isEditable, setIsEditable] = useState(true)
  const [currentName, setCurrentName] = useState('')

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    setCurrentName(data.nickname)
    setIsEditable(false)
  }

  const containerStyle = clsx(isEditable ? s.isEditableContainer : '', s.container)

  return (
    <Card className={containerStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h1'} className={s.formTitle} variant={'h1'}>
          Personal Information
        </Typography>

        {isEditable ? (
          <>
            <img alt={'avatar'} className={s.avatar} src={avatar} />
            <div className={s.formInputWrapper}>
              <ControlledTextField
                className={s.isEditableFormInput}
                control={control}
                defaultValue={currentName}
                errorMessage={errors.nickname?.message}
                label={'Nickname'}
                name={'nickname'}
                type={'text'}
              />
            </div>
            <Button isFullWidth>
              <Typography variant={'subtitle2'}>Save Changes</Typography>
            </Button>
          </>
        ) : (
          <div>
            <img alt={'avatar'} className={s.avatar} src={avatar} />
            <Button className={s.formButton} isImg variant={'secondary'}>
              <Typography variant={'subtitle2'}>Logout</Typography>
            </Button>
          </div>
        )}
      </form>
    </Card>
  )
}
