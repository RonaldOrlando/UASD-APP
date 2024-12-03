// screens/Videos.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axiosInstance from '../config/axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener los videos relacionados con la UASD
    axiosInstance.get('videos')  // Suponiendo que el endpoint de videos es 'videos'
      .then(response => {
        setVideos(response.data);  // Suponiendo que la respuesta contiene un array de videos
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener videos', error);
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

  const handleVideoClick = (videoUrl) => {
    // Aquí puedes redirigir al usuario a una vista de video
    // Por ejemplo, abrir el video en un navegador o un reproductor de video
    alert(`Redirigiendo al video: ${videoUrl}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos de la UASD</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.video}>
            <Text style={styles.videoTitulo}>{item.titulo}</Text>
            <Text>{item.descripcion}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleVideoClick(item.url)}>
              <Text style={styles.buttonText}>Ver Video</Text>
            </TouchableOpacity>
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
  video: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  videoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Videos;
