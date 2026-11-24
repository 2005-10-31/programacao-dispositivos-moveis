import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { tema, modo, alternarTema } = useTheme();
  const { totalItens } = useCart();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tema.cartao, borderBottomColor: tema.borda },
      ]}
    >
      <View>
        <Text style={[styles.titulo, { color: tema.texto }]}>Loja Mobile</Text>
        <Text style={[styles.subtitulo, { color: tema.textoSecundario }]}>
          Visitante
        </Text>
      </View>

      <View style={styles.direita}>
        <View style={styles.carrinho}>
          <Ionicons name="cart" size={24} color={tema.texto} />
          <Text style={[styles.contagem, { color: tema.primaria }]}>
            {totalItens}
          </Text>
        </View>

        <TouchableOpacity onPress={alternarTema}>
          <Ionicons
            name={modo === 'claro' ? 'moon' : 'sunny'}
            size={24}
            color={tema.primaria}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  subtitulo: { fontSize: 13 },
  direita: { flexDirection: 'row', alignItems: 'center' },
  carrinho: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  contagem: { fontSize: 16, fontWeight: 'bold', marginLeft: 4 },
});