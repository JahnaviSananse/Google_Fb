import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
// import TextField from '../../component/Textfield/index';
import Button from '../../component/Button/index';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
// import firebase from '../../firebase.utils';

GoogleSignin.configure({
  webClientId:
    '246733076031-1vf4alm2e1d3sr20n1ddtma16qfqumdt.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    alert(error);
    console.log('Error', error);
  }
}

const google = () => {
  // const [data, setData] = useState({email: '', password: ''});

  return (
    <SafeAreaView>
      {/* {console.log('dckhdbckhc', data)} */}
      {/* <TextField
        valaue={data.email}
        title={'Email'}
        change={e => setData({...data, email: e})}
        placeholder={' Enter Email here '}
      />
      <TextField
        value={data.password}
        change={e => setData({...data, password: e})}
        title={'Password'}
        placeholder={' Enter Password here '}
      /> */}

      <Image
        style={styles.stretch}
        source={require('../../constants/images/google.png')}
      />

      <Button title="SIGN IN" onPress={() => onGoogleButtonPress()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100,
    top: '100%',
    left: '40%',
    resizeMode: 'stretch',
  },
});

export default google;
