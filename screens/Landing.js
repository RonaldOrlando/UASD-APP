import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo-uasd.png')} style={styles.image} />
      <Text style={styles.title}>Bienvenidos a la UASD</Text>
      <Text style={styles.description}>
        Misión, Visión y Valores de la universidad
      </Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
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
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Landing;
