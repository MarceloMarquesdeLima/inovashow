import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View>
      <TouchableOpacity onPress={() => router.push('/dashboard')}>
        <Text>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cidade')}>
        <Text>Cidade</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/expositor')}>
        <Text>Expositor</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/pessoa')}>
        <Text>Pessoa</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/vendedor')}>
        <Text>Vendedor</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/visita')}>
        <Text>Visita</Text>
      </TouchableOpacity>
    </View>
  );
}