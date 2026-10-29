import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function StudentsScreen() {
  const { estudantes } = useLocalSearchParams();
  const router = useRouter();
  const lista = JSON.parse(estudantes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudantes</Text>
      <FlatList
        data={lista}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: "/profile", params: { nome: item } })}>
            <Text style={styles.name}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: { backgroundColor: "#fff", padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  name: { fontSize: 18 },
});

