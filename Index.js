import React from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions, ImageBackground, StatusBar } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class Index extends React.Component {
    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  
    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    }

    snapPhoto = async () => {     
        if (this.camera) {
            console.log("Picture has been taken !");
            let uri = await this.camera.takePictureAsync({base64: true});
            this.setState({ imageUri: uri });
            console.log(uri.base64);
          }
    }

    sendPicture = async () => {     
      this.props.navigation.navigate('SendPicture');
    }

    render() {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;

        const { imageUri } = this.state;
        if (imageUri) {
            return (
            <View>
              <StatusBar  barStyle="light-content" translucent={true} ></StatusBar>
              <ImageBackground style={{ width: screenWidth, height: screenHeight }} source={imageUri}>
              {/* <View style={{alignSelf: 'flex-start', position: 'absolute', marginTop: 50 }}>
                  <Text onPress={ this.deletePhoto } style={{marginLeft: 25}}>
                    <Image style={{ width: 53, height: 53}} source={{uri: 'https://i.imgur.com/mcD7llb.png'}} />
                  </Text>
                </View> */}
                <View style={{alignSelf: 'flex-end', position: 'absolute', bottom: 30, right: 22 }}>
                  <Text onPress={ this.sendPicture } style={{marginLeft: 50}}>
                    <Image style={{ width: 53, height: 53}} source={{uri: 'https://i.imgur.com/mcD7llb.png'}} />
                  </Text>
                </View>
              </ImageBackground>
            </View>
            );
        }
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
          <StatusBar  barStyle="light-content" translucent={true} ></StatusBar>
            <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.22,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <View style={{marginLeft: 15}}>
                    <Text style={{  marginBottom: 35 }}>
                            <Image style={{ width: 50, height: 50}} source={{uri: 'https://i.imgur.com/ity9m5T.png'}} />
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{marginLeft: 120, justifyContent: "flex-end"}}>
                    <Text onPress={ this.snapPhoto } style={{ marginBottom: 35 }}>
                            <Image style={{ width: 80, height: 80 }} source={{uri: 'https://i.imgur.com/EdzfkK9.png'}} />
                    </Text>
                  </View>
              </View>
            </Camera>
          </View>
        );
      }
    }
  }