import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import TextField from '../../component/Textfield/index';
import Button from '../../component/Button/index';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const fb = () => {
  async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView>
      <Image
        style={styles.stretch}
        source={require('../../constants/images/facebook.png')}
      />
      <Button title="SIGN IN" onPress={() => onFacebookButtonPress()} />
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

export default fb;
