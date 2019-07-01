import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Dimensions } from 'react-native';

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
    }
}

submitForm = () => {
  fetch('https://api.snapchat.wac.epitech.eu/connection', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
      }),
  })
  .then((response) => {
    console.log(response);
    if(response.status === 200)
      this.props.navigation.navigate('Index');
    else
      console.log('KO');
  })
  .catch((error) => {
    console.error(error);
  });
}


    static navigationOptions = {
      
      headerStyle: {
            backgroundColor: '#FFFF',
            borderBottomColor: '#FFFF',
          },
    };

  render() {
    const screenWidth = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
      <View style={{marginTop: 5, width: screenWidth, alignItems: 'center', backgroundColor: "#fffc00"}}>
        <Text style={styles.text}>CONNEXION</Text>
      </View>
        <View style={{width: 400}}>
        <TextInput style = {styles.input} value={this.state.email} placeholder = "Adresse mail" autoCapitalize = "none" onChangeText = {(email)=> this.setState({email})} autoFocus={true} />
            <TextInput style = {styles.input} value={this.state.password} placeholder = "Mot de passe" autoCapitalize = "none" onChangeText = {(password)=> this.setState({password})} secureTextEntry/>
            <View style={styles.button}>
                <View style={{ backgroundColor: '#11adff', height: 40, justifyContent: 'center' }}>
                    <Button onPress={ this.submitForm } title = "SE CONNECTER" color = "white" />
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                  <Text style={{color: '#1a0dab'}} onPress ={ () => this.props.navigation.navigate('Register') }>Vous n'avez pas de compte ?</Text>
                </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
  },
  text: {
    fontWeight: "bold",
    padding: 10,
    color: "black",
    fontSize: 35,
  },
  input: {
    height: 80,
    borderBottomColor: '#95a5a6',
    borderBottomWidth: 1,
    alignItems: 'center',
    
  },
  button: {
      marginTop: 35,
    color: 'white',
    width: 400,
  },
});
