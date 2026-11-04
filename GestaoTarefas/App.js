
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Minhas Tarefas' }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Detalhes da Tarefa' }}
        />

        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ title: 'Nova Tarefa' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
