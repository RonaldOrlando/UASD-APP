// screens/Noticias.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axiosInstance from '../config/axios'; // Importamos el axios configurado

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('noticias')
      .then(response => {
        setNoticias(response.data);  // Suponiendo que la respuesta contiene un array de noticias
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener noticias', error);
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
      <Text style={styles.title}>Últimas Noticias</Text>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noticia}>
            <Text style={styles.noticiaTitulo}>{item.titulo}</Text>
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
  noticia: {
    marginBottom: 20,
  },
  noticiaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Noticias;
