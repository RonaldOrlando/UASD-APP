// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Menu from '../screens/Menu';
import Noticias from '../screens/Noticias';  // Lo crearemos después
import Horarios from '../screens/Horarios';  // Lo crearemos después
import Preseleccion from '../screens/Preseleccion';  // Lo crearemos después
import Deuda from '../screens/Deuda';  // Lo crearemos después
import Solicitudes from '../screens/Solicitudes.js';  // Lo crearemos después
import MisTareas from '../screens/MisTareas';  // Lo crearemos después
import Eventos from '../screens/Eventos';  // Lo crearemos después
import Videos from '../screens/Videos';  // Lo crearemos después
import AcercaDe from '../screens/AcercaDe';  // Lo crearemos después

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Noticias" component={Noticias} />
        <Stack.Screen name="Horarios" component={Horarios} />
        <Stack.Screen name="Preseleccion" component={Preseleccion} />
        <Stack.Screen name="Deuda" component={Deuda} />
        <Stack.Screen name="Solicitudes" component={Solicitudes} />
        <Stack.Screen name="MisTareas" component={MisTareas} />
        <Stack.Screen name="Eventos" component={Eventos} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="AcercaDe" component={AcercaDe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
