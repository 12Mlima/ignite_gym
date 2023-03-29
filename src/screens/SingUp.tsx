import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

export const SignUp: React.FC = () => {
  const navigation = useNavigation<AuthNavigationRoutesProps>()

  const { watch, control } = useForm()

  function handleLogin() {
    navigation.navigate('signIn')
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
          />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleLogin}
        />
      </VStack>
    </ScrollView>
  )
}
