import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Cursos" }} />
      <Stack.Screen name="course" options={{ title: "Detalhes do Curso" }} />
      <Stack.Screen name="students" options={{ title: "Estudantes" }} />
      <Stack.Screen name="profile" options={{ title: "Perfil" }} />
    </Stack>
  );
}


