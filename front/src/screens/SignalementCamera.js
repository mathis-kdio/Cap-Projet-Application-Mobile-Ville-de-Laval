import * as React from 'react';
import { HStack, VStack, Text, Box, Button } from "native-base";
import { Camera, CameraType } from 'expo-camera';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import SignalementCameraPreview from './SignalementCameraPreview';

class SignalementCamera extends React.Component {
  constructor(props) {
    super(props)
    this.camera = null,
    this.state = {
      permission: true,
      type: CameraType.back,
      previewVisible: false,
      capturedImage: null
    }
  }

  componentDidMount() {
    this._requestPermission()
  }

  async _requestPermission() {
    let permission = await Camera.requestCameraPermissionsAsync();
    this.setState({permission: permission});
  }

  _testpermission() {
    if (!this.state.permission) {
      // Camera permissions are still loading
      return <Box />;
    }

    if (!this.state.permission.granted) {
      return (
        <Box alignItems="center">
          <Text>Vous devez autoriser l'utilisation de la camera</Text>
          <Button colorScheme="warning" onPress={() => this._requestPermission()}>
            Donner la permission
          </Button>
        </Box>
      );
    }
  }

  async _takePicture() {
    if (this.camera) {
      const photo = await this.camera.takePictureAsync();
      this.setState({
        previewVisible: true,
        capturedImage: photo
      })
    }
  }

  _retakePicture() {
    this.setState({
      previewVisible: false,
      capturedImage: null
    })
  }

  _savePhoto() {
    this.setState({
      previewVisible: false,
    })
    console.log(this.state.capturedImage)
    this.props.navigation.navigate("SignalementPhotos")
  }

  _camera() {
    if (this.state.permission.granted && !this.state.previewVisible) {
      return (
        <Camera
          style={styles.camera}
          type={this.state.type}
          ref={(ref) => this.camera = ref}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.takePicureButton}
              onPress={() => this._takePicture()}
            />
          </View>
        </Camera>
      )
    }
    else if (this.state.previewVisible && this.state.capturedImage) {
      return (
        <SignalementCameraPreview photo={this.state.capturedImage} savePhoto={() => this._savePhoto()} retakePicture={() => this._retakePicture()}/>
      )
    }
  }

  render() {
    return (
      <VStack flex={1} space={4} alignItems="center">
        <HStack flex={1}>
          <VStack flex={1}>
            {this._testpermission()}
            {this._camera()}
          </VStack>
        </HStack>
      </VStack>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  takePicureButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff'
  }
});

export default SignalementCamera