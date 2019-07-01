import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default class App extends React.Component {
  state = {
    data: null,
  }
    constructor(props) {
        super(props);
        this.getUser(); 
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'white',
            borderBottomColor: 'white',
        },
    };

    getUser = () => {
      fetch('https://api.snapchat.wac.epitech.eu/all', {
          method: 'GET',
          headers: {
              "token": "2522AEF676FF25E6"
            },
        })
        
        .then((response) => response.json())
        .then((user) => { 
          return this.setState({
            data: user
          })
        })
        .catch((error) => {
           console.error(error);
        });
    }

  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingTop: 10 
  },
  
  separator:
  {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%'
  },
  text:
  {
    fontSize: 18,
    color: 'black',
    padding: 15
  }
});
