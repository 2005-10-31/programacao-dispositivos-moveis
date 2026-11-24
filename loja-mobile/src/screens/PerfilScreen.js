import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function PerfilScreen() {
  const { tema, modo, alternarTema } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <View
        style={[
          styles.cartao,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        <Text style={{ color: tema.texto, fontSize: 16 }}>Modo escuro</Text>
        <Switch value={modo === 'escuro'} onValueChange={alternarTema} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  cartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
});