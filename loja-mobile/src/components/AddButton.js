import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function AddButton({ produto }) {
  const { tema } = useTheme();
  const { adicionar } = useCart();

  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: tema.primaria }]}
      onPress={() => adicionar(produto)}
    >
      <Text style={styles.texto}>+ Adicionar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  texto: { color: '#FFFFFF', fontWeight: 'bold' },
});