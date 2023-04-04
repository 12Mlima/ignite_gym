import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'
import { Control, Controller, FieldValues } from 'react-hook-form'

interface InputProps extends IInputProps {
  control: Control<FieldValues, any>
  name: string
}

export const Input: React.FC<InputProps> = ({ control, name, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl mb={4} {...(fieldState?.error && { isInvalid: true })}>
          <NativeBaseInput
            bg="gray.700"
            h={14}
            px={4}
            borderWidth={0}
            fontSize="md"
            color="white"
            fontFamily="body"
            value={field.value}
            onChangeText={(text) => field.onChange(text)}
            placeholderTextColor={'gray.300'}
            _focus={{
              bg: 'gray.700',
              borderWidth: 1,
              borderColor: 'green.500',
            }}
            {...rest}
          />
          {fieldState?.error && (
            <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
              {fieldState.error?.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
      )}
    />
  )
}
