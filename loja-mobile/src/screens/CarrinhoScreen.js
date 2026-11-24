import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function CarrinhoScreen() {
  const { tema } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <Text style={{ color: tema.texto }}>Carrinho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});