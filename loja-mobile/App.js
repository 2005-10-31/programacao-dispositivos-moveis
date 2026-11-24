import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { CartProvider } from './src/context/CartContext';
import Header from './src/components/Header';
import TabBar from './src/components/TabBar';
import ProdutosScreen from './src/screens/ProdutosScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import PerfilScreen from './src/screens/PerfilScreen';

function Main() {
  const { tema, modo } = useTheme();
  const [aba, setAba] = useState('produtos');

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <StatusBar style={modo === 'claro' ? 'dark' : 'light'} />
      <Header />
      <View style={styles.conteudo}>
        {aba === 'produtos' && <ProdutosScreen />}
        {aba === 'carrinho' && <CarrinhoScreen />}
        {aba === 'perfil' && <PerfilScreen />}
      </View>
      <TabBar abaAtiva={aba} aoMudar={setAba} />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Main />
      </CartProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  conteudo: { flex: 1 },
});