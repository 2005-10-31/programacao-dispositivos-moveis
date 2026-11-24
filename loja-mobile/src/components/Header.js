import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { tema, modo, alternarTema } = useTheme();

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

      <TouchableOpacity onPress={alternarTema}>
        <Ionicons
          name={modo === 'claro' ? 'moon' : 'sunny'}
          size={24}
          color={tema.primaria}
        />
      </TouchableOpacity>
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
});