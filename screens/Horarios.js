// screens/Horarios.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios';

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('horarios')
      .then(response => {
        setHorarios(response.data);  // Suponiendo que la respuesta contiene los horarios en un array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener horarios', error);
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
      <Text style={styles.title}>Mis Horarios</Text>
      <FlatList
        data={horarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.horario}>
            <Text style={styles.horarioMateria}>{item.materia}</Text>
            <Text>Hora: {item.hora}</Text>
            <Text>Aula: {item.aula}</Text>
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
  horario: {
    marginBottom: 20,
  },
  horarioMateria: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Horarios;
