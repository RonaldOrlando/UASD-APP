// screens/Menu.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Noticias" onPress={() => navigation.navigate('Noticias')} />
      <Button title="Mis Materias (Horarios)" onPress={() => navigation.navigate('Horarios')} />
      <Button title="Preselección de Asignaturas" onPress={() => navigation.navigate('Preseleccion')} />
      <Button title="Deuda" onPress={() => navigation.navigate('Deuda')} />
      <Button title="Solicitudes" onPress={() => navigation.navigate('Solicitudes')} />
      <Button title="Mis Tareas" onPress={() => navigation.navigate('MisTareas')} />
      <Button title="Eventos" onPress={() => navigation.navigate('Eventos')} />
      <Button title="Videos" onPress={() => navigation.navigate('Videos')} />
      <Button title="Acerca de" onPress={() => navigation.navigate('AcercaDe')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Menu;
