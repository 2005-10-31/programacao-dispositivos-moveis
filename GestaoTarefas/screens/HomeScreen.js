
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function HomeScreen({
  navigation,
  tasks,
  onToggleTask,
  onDeleteTask,
}) {
  const [filter, setFilter] = useState('Todas');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Pendentes') return !task.completed;
    if (filter === 'Concluídas') return task.completed;
    return true;
  });

  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;

  const confirmDelete = (id) => {
    Alert.alert(
      'Eliminar tarefa',
      'Tens a certeza que queres eliminar esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => onDeleteTask(id),
        },
      ]
    );
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <TouchableOpacity
        style={styles.taskInfo}
        onPress={() => navigation.navigate('Details', { task: item })}
      >
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={{
          color: item.completed ? '#219653' : '#E67E22',
          fontWeight: 'bold',
          marginTop: 7,
        }}>
          {item.completed ? 'Concluída' : 'Pendente'}
        </Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.statusButton}
          onPress={() => onToggleTask(item.id)}
        >
          <Text style={styles.buttonText}>
            {item.completed ? 'Reabrir' : 'Concluir'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => confirmDelete(item.id)}
        >
          <Text style={styles.buttonText}>Apagar</Text>
        </TouchableOpacity>
      </View>
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
          <Text style={styles.number}>{pending}</Text>
          <Text>Pendentes</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.number}>{completed}</Text>
          <Text>Concluídas</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Filtrar tarefas</Text>

      <View style={styles.filters}>
        {['Todas', 'Pendentes', 'Concluídas'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterButton,
              filter === option && styles.activeFilter,
            ]}
            onPress={() => setFilter(option)}
          >
            <Text style={[
              styles.filterText,
              filter === option && styles.activeFilterText,
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Lista de tarefas</Text>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>
            Não existem tarefas nesta categoria.
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
    marginBottom: 20,
  },
  summaryBox: {
    backgroundColor: '#FFFFFF',
    padding: 12,
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1D3557',
    marginBottom: 10,
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 7,
  },
  filterButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  activeFilter: {
    backgroundColor: '#1D3557',
  },
  filterText: {
    color: '#1D3557',
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  taskInfo: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  subject: {
    color: '#666666',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  statusButton: {
    backgroundColor: '#247BA0',
    padding: 9,
    borderRadius: 7,
  },
  deleteButton: {
    backgroundColor: '#D9534F',
    padding: 9,
    borderRadius: 7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#1D3557',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 25,
  },
});
