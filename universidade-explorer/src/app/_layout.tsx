import { Stack } from "expo-router";
import { StudentsProvider } from "../context/StudentsContext";

export default function Layout() {
  return (
    <StudentsProvider>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: "Cursos" }} />
        <Stack.Screen name="course" options={{ title: "Detalhes do Curso" }} />
        <Stack.Screen name="students" options={{ title: "Estudantes" }} />
        <Stack.Screen name="profile" options={{ title: "Perfil" }} />
      </Stack>
    </StudentsProvider>
  );
}