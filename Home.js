import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);    
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#fffc00',
            borderBottomColor: '#fffc00',
        },
    };

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 150, height: 250, bottom: 425 }} source={{uri: 'https://i.imgur.com/VYpkDvU.png'}} />
        <View style={styles.button}>
          <View style={{ backgroundColor: '#f13a56', height: 90, justifyContent: 'center' }}>
            <Button onPress={ () => this.props.navigation.navigate('Login') } title = "CONNEXION" color = "white" />
          </View>
          <View style={{ backgroundColor: '#11adff', height: 90, justifyContent: 'center' }}>
            <Button onPress ={ () => this.props.navigation.navigate('Register') } title = "INSCRIPTION" color = "white"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffc00',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
      color: 'white',
    width: 500,
  },
});
