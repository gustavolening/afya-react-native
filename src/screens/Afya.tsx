import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';


import PinImage from '../../assets/chuckmap.png'

const Afya: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 3.38710585,
          longitude: -76.53954122221155,
          latitudeDelta: 0.0008,
          longitudeDelta: 0.0008,
        }}
      >
        <View>
          <Marker
          icon={PinImage}
          coordinate={{
            latitude: 3.38710585,
            longitude: -76.53954122221155, 
          }}
          >
            <Callout
              tooltip={true}
              onPress={ () => navigation.navigate('contact')}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}> Hiii!</Text>
              </View>
            </Callout>
            
          </Marker>
        </View>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  paragraph: {
    color: '#fff'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(252, 71, 222, 0.8)'
  },
  calloutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
   
})

export default Afya;