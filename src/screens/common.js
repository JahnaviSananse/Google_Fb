import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

const Common = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '30%',
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('google');
          }}>
          <Image
            style={styles.stretch}
            source={require('../constants/images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('fb');
          }}>
          <Image
            style={styles.stretch}
            source={require('../constants/images/facebook.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});

export default Common;
