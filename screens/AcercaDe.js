// screens/AcercaDe.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AcercaDe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de los Desarrolladores</Text>
      <Text style={styles.text}>Nombre: Juan Pérez</Text>
      <Text style={styles.text}>Matrícula: 202010123</Text>
      <Text style={styles.text}>Nombre: María González</Text>
      <Text style={styles.text}>Matrícula: 202010124</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default AcercaDe;
