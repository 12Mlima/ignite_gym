import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { Heading, VStack, SectionList, Text } from 'native-base'
import { useState } from 'react'

export const History: React.FC = () => {
  const [exercises, setExercises] = useState([
    {
      title: '22.08.22',
      data: ['Puxada Frontal'],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title={'Historico de Exercícios'} />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={(item) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color={'gray.200'}
            fontSize={'md'}
            mt={10}
            mb={3}
            fontFamily={'heading'}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color={'gray.100'} textAlign={'center'}>
            Não há exercícios registrados ainda.
          </Text>
        )}
      />
    </VStack>
  )
}