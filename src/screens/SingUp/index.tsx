import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const schema = yup
  .object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
    password: yup
      .string()
      .required('Digite uma senha')
      .min(6, 'Senha deve ter no mínimo 6 digitos'),
    password_confirm: yup
      .string()
      .required('Confirme a senha')
      .oneOf([yup.ref('password')], 'A confirmação de senha não confere'),
  })
  .required()

export const SignUp: React.FC<FormDataProps> = () => {
  const navigation = useNavigation<AuthNavigationRoutesProps>()

  const { watch, control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSignUp = (data: any) => {
    console.log(data)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color={'gray.100'} fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color={'gray.100'}
            fontSize="xl"
            mb={6}
            fontFamily={'heading'}
          >
            Crie sua conta
          </Heading>
          <Input control={control} name="name" placeholder="Nome" />
          <Input
            control={control}
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            control={control}
            name="password"
            placeholder="Senha"
            secureTextEntry
          />

          <Input
            control={control}
            name="password_confirm"
            placeholder="Confirme a Senha"
            secureTextEntry
            onSubmitEditing={handleSubmit(handleSignUp)}
            returnKeyType="send"
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={12}
          onPress={() => navigation.goBack()}
        />
      </VStack>
    </ScrollView>
  )
}
