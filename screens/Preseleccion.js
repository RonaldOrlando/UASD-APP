// screens/Preseleccion.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios';

const Preseleccion = () => {
  const [asignaturas, setAsignaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener la lista de asignaturas disponibles
    axiosInstance.get('preseleccion')
      .then(response => {
        setAsignaturas(response.data);  // Suponiendo que la respuesta contiene un array de asignaturas
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener asignaturas', error);
        setLoading(false);
      });
  }, []);

  const handlePreseleccion = (asignaturaId) => {
    // Realizar la preselección enviando la asignatura seleccionada al servidor
    axiosInstance.post('preseleccion', { asignaturaId })
      .then(response => {
        alert('Asignatura preseleccionada con éxito');
      })
      .catch(error => {
        console.error('Error al preseleccionar asignatura', error);
        alert('Hubo un error al preseleccionar la asignatura');
      });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preselección de Asignaturas</Text>
      <FlatList
        data={asignaturas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.asignatura}>
            <Text style={styles.asignaturaTitulo}>{item.nombre}</Text>
            <Button title="Preseleccionar" onPress={() => handlePreseleccion(item.id)} />
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
  asignatura: {
    marginBottom: 20,
  },
  asignaturaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Preseleccion;
