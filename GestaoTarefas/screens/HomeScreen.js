
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation, tasks, onToggleTask }) {

  const tarefasConcluidas = tasks.filter(task => task.completed).length;
  const tarefasPendentes = tasks.length - tarefasConcluidas;

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>

      <TouchableOpacity
        style={styles.taskInfo}
        onPress={() => navigation.navigate('Details', { task: item })}
      >
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.subject}>{item.subject}</Text>

        <Text style={[
          styles.status,
          item.completed ? styles.completed : styles.pending
        ]}>
          {item.completed ? 'Concluída' : 'Pendente'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => onToggleTask(item.id)}
      >
        <Text style={styles.buttonText}>
          {item.completed ? 'Reabrir' : 'Concluir'}
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>As minhas tarefas</Text>

      <View style={styles.summary}>
        <View style={styles.summaryBox}>
          <Text style={styles.number}>{tasks.length}</Text>
          <Text>Total</Text>
        </View>

        <View style={styles.summaryBox}>
          <Text style={styles.number}>{tarefasPendentes}</Text>
          <Text>Pendentes</Text>
        </View>

        <View style={styles.summaryBox}>
          <Text style={styles.number}>{tarefasConcluidas}</Text>
          <Text>Concluídas</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Lista de tarefas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>
            Ainda não existem tarefas. Adiciona a tua primeira tarefa!
          </Text>
        }
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.addButtonText}>+ Adicionar tarefa</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D3557',
    marginBottom: 20,
  },

  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  summaryBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },

  number: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#247BA0',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1D3557',
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  taskInfo: {
    flex: 1,
  },

  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },

  subject: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },

  status: {
    marginTop: 8,
    fontWeight: 'bold',
  },

  completed: {
    color: '#219653',
  },

  pending: {
    color: '#E67E22',
  },

  statusButton: {
    backgroundColor: '#247BA0',
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: '#1D3557',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  emptyMessage: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 30,
  },
});
