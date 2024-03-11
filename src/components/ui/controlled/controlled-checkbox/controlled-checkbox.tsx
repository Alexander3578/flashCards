import {FieldValues, useController, UseControllerProps} from 'react-hook-form';
import {Checkbox} from '@/components/ui/checkBox';
import {CheckboxProps} from '@radix-ui/react-checkbox';

type Props<T extends FieldValues> = UseControllerProps<T> & Omit<CheckboxProps, 'checked' | 'onCheckedChange'> & {
    label?: string}

export const ControlledCheckbox = <T extends FieldValues>({
                                                              control,
                                                              name,
                                                              shouldUnregister,
                                                              disabled,
                                                              ...rest
                                                          }: Props<T>) => {
    const {
        field: {value, onChange, ref, onBlur},
    } = useController({
        name,
        control,
        shouldUnregister,
        disabled
    })

    // @ts-ignore
    return <Checkbox
        checked={value}
        onCheckedChange={onChange}
        ref={ref}
        disabled={disabled}
        onBlur={onBlur}
        {...rest}
    />
};

