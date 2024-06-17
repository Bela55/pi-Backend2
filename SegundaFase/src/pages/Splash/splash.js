import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigation.replace('Bem-vindo');
    }, 1000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={require('../../assets/animationvaca.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <Text style={styles.loadingText}>Muuuuuuuuuu...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e8b57',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  content: {
    alignItems: 'center',
  },
  animation: {
    width: width * 0.8,
    height: height * 0.6,
  },
  loadingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFF'
  },
});

export default Splash;
