import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Detalhes() {
  // Recebe o parâmetro enviado pela Home
  const { nome } = useLocalSearchParams<{ nome: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>
      <Text style={styles.texto}>Item clicado: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  titulo: { 
    fontSize: 20, 
    marginBottom: 10 
  },
  texto: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333' 
  },
});
