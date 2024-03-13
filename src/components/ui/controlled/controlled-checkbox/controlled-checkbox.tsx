import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkBox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onCheckedChange'> & {
    label?: string
  }

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      {...rest}
    />
  )
}
