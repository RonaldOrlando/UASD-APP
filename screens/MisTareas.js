// screens/MisTareas.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios';

const MisTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener las tareas pendientes
    axiosInstance.get('tareas')
      .then(response => {
        setTareas(response.data);  // Suponiendo que la respuesta contiene un array de tareas
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener tareas', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas Pendientes</Text>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tarea}>
            <Text style={styles.tareaTitulo}>{item.nombre}</Text>
            <Text>Fecha límite: {item.fechaLimite}</Text>
            <Text>{item.descripcion}</Text>
          </View>
        )}
      />
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
  tarea: {
    marginBottom: 20,
  },
  tareaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MisTareas;
