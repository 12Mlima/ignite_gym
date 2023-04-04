import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UsePhoto } from '@components/UserPhoto'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
  useToast,
} from 'native-base'
import { useState } from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

const PHOTO_SIZE = 33

export const Profile: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState<any>()

  const toast = useToast()
  const { watch, control } = useForm()

  const handleUserPhoto = async () => {
    setIsLoading(true)

    try {
      const photoUser = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoUser.canceled) {
        return
      }

      if (photoUser.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoUser.assets[0].uri)

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: 'Essa imagem é muito grande. Esolha uma de até 5mb.',
            placement: 'top',
            bgColor: 'red.500',
          })
        }
        setUserPhoto(photoUser.assets[0].uri)
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {isLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={'full'}
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UsePhoto
              source={{ uri: userPhoto }}
              alt="foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleUserPhoto}>
            <Text
              color={'green.500'}
              fontWeight={'bold'}
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input control={control} name="" placeholder="Nome" bg={'gray.600'} />
          <Input
            control={control}
            name=""
            placeholder="E-mail"
            bg={'gray.600'}
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading
            color={'gray.200'}
            fontSize="md"
            mb={2}
            fontFamily={'heading'}
          >
            Alterar senha
          </Heading>

          <Input
            control={control}
            name=""
            placeholder="Senha antiga"
            bg={'gray.600'}
            secureTextEntry
          />
          <Input
            control={control}
            name=""
            placeholder="Nova senha"
            bg={'gray.600'}
            secureTextEntry
          />
          <Input
            control={control}
            name=""
            placeholder="Confirme a nova senha"
            bg={'gray.600'}
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
