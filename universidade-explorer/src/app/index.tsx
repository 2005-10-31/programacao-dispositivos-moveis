import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const cursos = [
    { nome: "Engenharia Informática", descricao: "Curso de programação e sistemas", estudantes: ["Ana", "Bruno", "Carla"] },
    { nome: "Gestão", descricao: "Curso de administração e negócios", estudantes: ["Daniel", "Eva", "Fernando"] },
    { nome: "Design", descricao: "Curso de criatividade e design gráfico", estudantes: ["Gabriel", "Helena", "Igor"] },
    { nome: "Medicina", descricao: "Curso de ciências da saúde", estudantes: ["João", "Kátia", "Luís"] },
    { nome: "Direito", descricao: "Curso de leis e justiça", estudantes: ["Maria", "Nuno", "Olívia"] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Universidade Explorer</Text>
      <FlatList
        data={cursos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "/course", params: { nome: item.nome, descricao: item.descricao, estudantes: JSON.stringify(item.estudantes) } })}
          >
            <Text style={styles.courseName}>{item.nome}</Text>
            <Text style={styles.courseDesc}>{item.descricao}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#e0f7fa" }, 
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: { backgroundColor: "#fff", padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  courseName: { fontSize: 18, fontWeight: "600" },
  courseDesc: { fontSize: 14, color: "#555" },
});

