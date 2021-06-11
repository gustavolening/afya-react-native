import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const Contact: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Chuck Norris não dorme. Ele espera.
      </Text>
      <Image
        style={styles.chuckImage}
        source={ require('../../assets/chuckmap.png') }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    color: '#fff'
  },
  chuckImage: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Contact;