import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

export default function CarrinhoScreen() {
  const { tema } = useTheme();
  const { itens, adicionar, remover, limpar, totalPreco } = useCart();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      {itens.length === 0 ? (
        <Text style={{ color: tema.textoSecundario }}>O carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={itens}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.linha,
                  { backgroundColor: tema.cartao, borderColor: tema.borda },
                ]}
              >
                <View style={styles.info}>
                  <Text style={[styles.nome, { color: tema.texto }]}>
                    {item.nome}
                  </Text>
                  <Text style={{ color: tema.textoSecundario }}>
                    {item.preco * item.quantidade} CVE
                  </Text>
                </View>

                <View style={styles.controlos}>
                  <TouchableOpacity
                    style={[styles.botaoQtd, { borderColor: tema.primaria }]}
                    onPress={() => remover(item.id)}
                  >
                    <Text style={{ color: tema.primaria, fontSize: 18 }}>−</Text>
                  </TouchableOpacity>
                  <Text style={[styles.qtd, { color: tema.texto }]}>
                    {item.quantidade}
                  </Text>
                  <TouchableOpacity
                    style={[styles.botaoQtd, { borderColor: tema.primaria }]}
                    onPress={() => adicionar(item)}
                  >
                    <Text style={{ color: tema.primaria, fontSize: 18 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          <Text style={[styles.total, { color: tema.texto }]}>
            Total: {totalPreco} CVE
          </Text>

          <TouchableOpacity
            style={[styles.esvaziar, { backgroundColor: tema.primaria }]}
            onPress={limpar}
          >
            <Text style={styles.textoEsvaziar}>Esvaziar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  linha: {
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
  controlos: { flexDirection: 'row', alignItems: 'center' },
  botaoQtd: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtd: { marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 12 },
  esvaziar: { padding: 14, borderRadius: 12, alignItems: 'center' },
  textoEsvaziar: { color: '#FFFFFF', fontWeight: 'bold' },
});