import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const abas = [
  { chave: 'produtos', rotulo: 'Produtos' },
  { chave: 'carrinho', rotulo: 'Carrinho' },
  { chave: 'perfil', rotulo: 'Perfil' },
];

export default function TabBar({ abaAtiva, aoMudar }) {
  const { tema } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tema.cartao, borderTopColor: tema.borda },
      ]}
    >
      {abas.map((aba) => (
        <TouchableOpacity
          key={aba.chave}
          style={styles.aba}
          onPress={() => aoMudar(aba.chave)}
        >
          <Text
            style={{
              color: abaAtiva === aba.chave ? tema.primaria : tema.textoSecundario,
              fontWeight: abaAtiva === aba.chave ? 'bold' : 'normal',
            }}
          >
            {aba.rotulo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingBottom: 24,
  },
  aba: { flex: 1, alignItems: 'center', paddingVertical: 14 },
});