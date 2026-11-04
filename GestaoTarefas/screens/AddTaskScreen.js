
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

export default function AddTaskScreen({ navigation, onAddTask }) {

  // Estados dos campos do formulário
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Função para guardar a tarefa
  const handleSaveTask = () => {

    // Validar os campos obrigatórios
    if (title.trim() === '' || subject.trim() === '') {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preenche o título e a disciplina.'
      );
      return;
    }

    // Criar o objeto da nova tarefa
    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      subject: subject.trim(),
      description: description.trim(),
      dueDate: dueDate.trim(),
      completed: false,
    };

    // Enviar a tarefa para o App.js
    onAddTask(newTask);

    // Mostrar mensagem de sucesso
    Alert.alert('Sucesso', 'Tarefa adicionada com sucesso!');

    // Voltar para a lista
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.heading}>Nova Tarefa</Text>

      <Text style={styles.label}>Título *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React Native"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Disciplina *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Programação Móvel"
        value={subject}
        onChangeText={setSubject}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descreve a tarefa..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Data de entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 20/11/2026"
        value={dueDate}
        onChangeText={setDueDate}
      />

      <Text style={styles.note}>* Campos obrigatórios</Text>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveTask}
      >
        <Text style={styles.saveButtonText}>Guardar tarefa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
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
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1D3557',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
  },

  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },

  note: {
    color: '#777777',
    marginTop: 12,
    fontSize: 13,
  },

  saveButton: {
    backgroundColor: '#1D3557',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cancelButton: {
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  cancelButtonText: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold',
  },

});
