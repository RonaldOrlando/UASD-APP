// screens/Eventos.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener los eventos
    axiosInstance.get('eventos')
      .then(response => {
        setEventos(response.data);  // Suponiendo que la respuesta contiene un array de eventos
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener eventos', error);
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
      <Text style={styles.title}>Eventos de la UASD</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.evento}>
            <Text style={styles.eventoTitulo}>{item.nombre}</Text>
            <Text>{item.fecha}</Text>
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
  evento: {
    marginBottom: 20,
  },
  eventoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Eventos;
