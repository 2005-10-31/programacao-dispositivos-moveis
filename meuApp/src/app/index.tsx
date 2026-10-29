import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const itens = [
  { id: '1', nome: 'Maçã' },
  { id: '2', nome: 'Banana' },
  { id: '3', nome: 'Laranja' },
  { id: '4', nome: 'Manga' },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              router.push({ pathname: '/detalhes', params: { nome: item.nome } })
            }
          >
            <Text style={styles.texto}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  texto: { fontSize: 18 },
});