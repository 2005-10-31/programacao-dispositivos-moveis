import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function PerfilScreen() {
  const { tema, modo, alternarTema } = useTheme();
  const { usuario, entrar, sair } = useAuth();
  const [nome, setNome] = useState('');

  const aoEntrar = () => {
    entrar(nome);
    setNome('');
  };

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <View
        style={[
          styles.cartao,
          { backgroundColor: tema.cartao, borderColor: tema.borda },
        ]}
      >
        {usuario ? (
          <>
            <Text style={[styles.titulo, { color: tema.texto }]}>
              Sessão iniciada como {usuario}
            </Text>
            <TouchableOpacity
              style={[styles.botao, { backgroundColor: tema.primaria }]}
              onPress={sair}
            >
              <Text style={styles.textoBotao}>Sair</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={[styles.titulo, { color: tema.texto }]}>Entrar</Text>
            <TextInput
              style={[
                styles.input,
                { color: tema.texto, borderColor: tema.borda },
              ]}
              placeholder="O teu nome"
              placeholderTextColor={tema.textoSecundario}
              value={nome}
              onChangeText={setNome}
            />
            <TouchableOpacity
              style={[styles.botao, { backgroundColor: tema.primaria }]}
              onPress={aoEntrar}
            >
              <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View
        style={[
          styles.cartao,
          styles.linha,
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
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  botao: { padding: 12, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#FFFFFF', fontWeight: 'bold' },
});