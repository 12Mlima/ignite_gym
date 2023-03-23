import { Heading, HStack, Text, VStack, Icon } from 'native-base'
import { UsePhoto } from './UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export const HomeHeader: React.FC = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UsePhoto
        source={{ uri: 'https://github.com/12Mlima.png' }}
        alt="imagem do user"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Marsel
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
