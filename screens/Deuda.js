// screens/Deuda.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios';

const Deuda = () => {
  const [deuda, setDeuda] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('deuda')
      .then(response => {
        setDeuda(response.data.monto);  // Suponiendo que la respuesta contiene el monto de la deuda
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener deuda', error);
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
      <Text style={styles.title}>Estado de Deuda</Text>
      <Text style={styles.deuda}>Deuda actual: ${deuda}</Text>
      <Button title="Pagar" onPress={() => alert('Redirigiendo al sistema de pago...')} />
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
  deuda: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Deuda;
