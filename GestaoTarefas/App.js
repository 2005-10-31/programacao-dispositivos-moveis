
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

// Tarefas iniciais para testar a aplicação
const tarefasIniciais = [
  {
    id: '1',
    title: 'Estudar React Native',
    subject: 'Programação Móvel',
    description: 'Estudar componentes e navegação entre ecrãs.',
    dueDate: '10/11/2026',
    completed: false,
  },
  {
    id: '2',
    title: 'Fazer exercícios de SQL',
    subject: 'Bases de Dados',
    description: 'Resolver exercícios de consultas e tabelas.',
    dueDate: '12/11/2026',
    completed: false,
  },
  {
    id: '3',
    title: 'Preparar apresentação',
    subject: 'Sistemas Distribuídos',
    description: 'Organizar os slides para a apresentação.',
    dueDate: '15/11/2026',
    completed: true,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(tarefasIniciais);

  // Adicionar uma nova tarefa
  const addTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  // Alterar o estado de uma tarefa
  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" options={{ title: 'Minhas Tarefas' }}>
          {(props) => (
            <HomeScreen
              {...props}
              tasks={tasks}
              onToggleTask={toggleTask}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Detalhes da Tarefa' }}
        />

        <Stack.Screen name="AddTask" options={{ title: 'Nova Tarefa' }}>
          {(props) => (
            <AddTaskScreen
              {...props}
              onAddTask={addTask}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
