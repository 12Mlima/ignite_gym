import { ScreenHeader } from '@components/ScreenHeader'
import { VStack } from 'native-base'

export const History: React.FC = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title={'Historico de Exercícios'} />
    </VStack>
  )
}
