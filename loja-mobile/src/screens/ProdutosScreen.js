import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';
import produtos from '../data/produtos';

export default function ProdutosScreen() {
  const { tema } = useTheme();
  const [contador, setContador] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <TouchableOpacity
        style={[
          styles.contador,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={{ color: tema.texto }}>Estado local: {contador}</Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard produto={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  contador: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    alignItems: 'center',
  },
});