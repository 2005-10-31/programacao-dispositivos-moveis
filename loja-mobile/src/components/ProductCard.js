import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AddButton from './AddButton';

export default function ProductCard({ produto }) {
  const { tema } = useTheme();

  return (
    <View
      style={[
        styles.cartao,
        { backgroundColor: tema.cartao, borderColor: tema.borda },
      ]}
    >
      <View style={styles.info}>
        <Text style={[styles.nome, { color: tema.texto }]}>{produto.nome}</Text>
        <Text style={{ color: tema.textoSecundario }}>{produto.preco} CVE</Text>
      </View>
      <AddButton produto={produto} />
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  info: { flex: 1, marginRight: 10 },
  nome: { fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
});