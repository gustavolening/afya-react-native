import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native'

const Home: React.FC = () => {
  const [ allowCamera, setAllowCamera ] = useState<any>(null)
  const [ type, setType ] = useState(Camera.Constants.Type.back)

  const navigation = useNavigation()

  useEffect( () => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setAllowCamera(status === 'granted')
    })();
  }, [])

  if ( allowCamera === null || false){
    return (
      <View style={styles.container}>
      <Text style={styles.paragraph}>
        Acesso a camera não permitido
      </Text>
    </View>
    )
  }

  function handleScreens(elementScreen: string){
    navigation.navigate(elementScreen)
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <TouchableOpacity
          style={styles.button}
          onPress={ () => {
            setType(
              type === Camera.Constants.Type.back ?
              Camera.Constants.Type.front :
              Camera.Constants.Type.back 
            )
          }}
        >
        <Text style={styles.paragraph}>Clique para acessar a câmera</Text>
      </TouchableOpacity>
      </Camera>
      <TouchableOpacity
        onPress={ () => handleScreens('afya')}
      >
        <Text style={styles.paragraph}>Afya</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={ () => handleScreens('contact')}
      >
      <Text style={styles.paragraph}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c5c5c5',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    color: '#fff', 
  },
  button: {
    flex: 0.1,
  },
  camera: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width
  }
})

export default Home;