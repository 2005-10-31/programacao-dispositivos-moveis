import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useStudents } from "@/context/StudentsContext";

export default function StudentsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ nome: string; estudantes?: string }>();
  const { getStudents, saveStudents } = useStudents();

  const course = params.nome;

  // 1. Guardar a lista num useState.
  // Começa pelo que já foi guardado no Context; se não houver, usa os route params.
  const [students, setStudents] = useState<string[]>(() => {
    const saved = getStudents(course);
    if (saved) return saved;
    try {
      return params.estudantes ? JSON.parse(params.estudantes) : [];
    } catch {
      return [];
    }
  });
  const [newStudent, setNewStudent] = useState("");
  const [error, setError] = useState("");

  const updateStudents = (updated: string[]) => {
    setStudents(updated);
    saveStudents(course, updated); // persiste fora do ecrã
  };

  // 2. Adicionar estudante
  const addStudent = () => {
    const name = newStudent.trim();

    // 3. Nome vazio: mostrar erro em vermelho
    if (name === "") {
      setError("Nome não pode ser vazio");
      return;
    }

    updateStudents([...students, name]);

    // 4. Limpar o campo depois de adicionar
    setNewStudent("");
    setError("");
  };

  const removeStudent = (index: number) => {
    updateStudents(students.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudantes de {course}</Text>

      <View style={styles.row}>
        <TextInput
          value={newStudent}
          onChangeText={(text) => {
            setNewStudent(text);
            if (error) setError("");
          }}
          placeholder="Nome"
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={addStudent}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* 5. Mostrar o total */}
      <Text style={styles.total}>
        {students.length} {students.length === 1 ? "estudante" : "estudantes"}
      </Text>

      <FlatList
        data={students}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            {/* 6. Clicar num estudante continua a abrir o perfil */}
            <TouchableOpacity
              style={styles.itemName}
              onPress={() =>
                router.push({ pathname: "/profile", params: { nome: item } })
              }
            >
              <Text>{item}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removeStudent(index)}>
              <Text style={styles.remove}>×</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  row: { flexDirection: "row", alignItems: "center" },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#1a9ad6",
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  addButtonText: { color: "#fff", fontWeight: "bold" },
  error: { color: "red", marginTop: 6 },
  total: { marginVertical: 10, fontSize: 12, color: "#555" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9efe9",
    padding: 12,
    marginBottom: 8,
  },
  itemName: { flex: 1 },
  remove: { fontSize: 20, color: "#777", paddingHorizontal: 6 },
});