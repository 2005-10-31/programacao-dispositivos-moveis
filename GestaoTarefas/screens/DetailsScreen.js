
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {

  // Receber os dados da tarefa enviada pela HomeScreen
  const { task } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.heading}>Informações da tarefa</Text>

      <View style={styles.card}>

        <Text style={styles.label}>Título</Text>
        <Text style={styles.value}>{task.title}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Disciplina</Text>
        <Text style={styles.value}>{task.subject}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.value}>
          {task.description || 'Sem descrição disponível.'}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Data de entrega</Text>
        <Text style={styles.value}>{task.dueDate || 'Não definida'}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Estado</Text>

        <Text style={[
          styles.status,
          task.completed ? styles.completed : styles.pending
        ]}>
          {task.completed ? 'Concluída' : 'Pendente'}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar à lista</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#F4F6FA',
    padding: 20,
  },

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1D3557',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 6,
  },

  value: {
    fontSize: 17,
    color: '#222222',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 15,
  },

  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  completed: {
    color: '#219653',
  },

  pending: {
    color: '#E67E22',
  },

  backButton: {
    backgroundColor: '#1D3557',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
