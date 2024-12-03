// screens/Solicitudes.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios';

const Solicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener las solicitudes
    axiosInstance.get('solicitudes')
      .then(response => {
        setSolicitudes(response.data);  // Suponiendo que la respuesta contiene las solicitudes
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener solicitudes', error);
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
      <Text style={styles.title}>Mis Solicitudes</Text>
      <FlatList
        data={solicitudes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.solicitud}>
            <Text style={styles.solicitudTitulo}>ID: {item.id}</Text>
            <Text>Estado: {item.estado}</Text>
            <Text>Fecha: {item.fecha}</Text>
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
  solicitud: {
    marginBottom: 20,
  },
  solicitudTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Solicitudes;
