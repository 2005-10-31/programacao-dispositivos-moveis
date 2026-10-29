import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProfileScreen() {
  const { nome } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Estudante</Text>
      <Text style={styles.name}>Nome: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  name: { fontSize: 18 },
});
