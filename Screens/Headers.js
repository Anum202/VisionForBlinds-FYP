import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';

const Headers = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Screens/images/gradient.png')}
        style={styles.headerBackground}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
        <Image source={require('../Screens/images/logot.png')} style={styles.logo} accessibilityLabel='Vision For Blinds Logo'/>
        <Text style={styles.text} accessibilityLabel='Vision For Blinds'>Vision For Blinds</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  headerBackground: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  curveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    overflow: 'hidden',
  },
  curveLeft: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: '#000000',
    borderRadius: 35,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginLeft: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 100,
  },
});

export default Headers;
