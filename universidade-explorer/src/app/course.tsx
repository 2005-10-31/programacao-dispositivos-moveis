import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function CourseScreen() {
  const { nome, descricao, estudantes } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.desc}>{descricao}</Text>
      <Button
        title="Ver Estudantes"
        onPress={() =>
          router.push({ pathname: "/students", params: { nome, estudantes } })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  desc: { fontSize: 16, marginBottom: 20 },
});