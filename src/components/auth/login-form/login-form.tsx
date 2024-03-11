import {useController, useForm} from 'react-hook-form'
import {TextField} from '@/components/ui/textField'

import {Button} from '../../ui/button'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod';
import {ControlledCheckbox} from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox';
import {DevTool} from '@hookform/devtools';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().optional()
})

export type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
    const {control, handleSubmit, register, formState: {errors}} = useForm<FormValues>({resolver: zodResolver(loginSchema)})

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    const {
        field: {},
    } = useController({
        name: 'rememberMe',
        control,
        defaultValue: false,
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DevTool control={control}/>
            <TextField  {...register('email')} label={'email'} errorMessage={errors?.email?.message}/>
            <TextField   {...register('password')} label={'password'} errorMessage={errors?.password?.message}/>
            <ControlledCheckbox name={'rememberMe'} control={control} label={'remember me'}/>
            <Button type={'submit'}>Submit</Button>
        </form>
    )
}

