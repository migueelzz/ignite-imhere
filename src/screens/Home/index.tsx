import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles'
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [name, setName] = useState('')

    const handleParticipantAdd = () => {
      if (participants.includes(name)) {
        return Alert.alert('Participante existe', 'Já existe um participante com este nome.')
      }

      setParticipants((prev) => [...prev, name])
      setName('')
      console.log(participants)
    }

    const handleParticipantRemove = (name: string) => {
      Alert.alert('Remover', `Deseja realmente o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => setParticipants(prev => prev.filter(participant => participant !== name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.textBase}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder='Nome do participante'
            value={name}
            onChangeText={setName}
            placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
        >
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            name={item} 
            onRemove={handleParticipantRemove} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Niguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}