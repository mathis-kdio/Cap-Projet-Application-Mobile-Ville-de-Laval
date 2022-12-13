import * as React from 'react';
import { HStack, VStack, Text, Box, Pressable, Spacer, Button } from "native-base";
import { Camera, CameraType } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import StepButton from '../components/StepButton';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

class SignalementPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.camera = null,
    this.state = {
      permission: true,
      type: CameraType.back
    }
  }

  componentDidMount() {
    this._requestPermission()
  }

  async _requestPermission() {
    let permission = await Camera.requestCameraPermissionsAsync();
    this.setState({permission: permission});
  }

  async _takePicture() {
    if (this.camera) {
      const photo = await this.camera.takePictureAsync();
    }
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

  _camera() {
    if (this.state.permission.granted) {
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
  }

  render() {
    return (
      <VStack flex={1} space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Photos</Text>
        <HStack>
          <Box flex={1} marginX="5" bg="#F4F5F9" rounded="md">
            <Pressable onPress={() => console.log("take photos")}>
              <HStack alignItems="center">
                <Text color="black" fontWeight="bold">Prendre une photo</Text>
                <Spacer/>
                <MaterialCommunityIcons name="camera-plus" size={50} color="#C30065"/>
              </HStack>
            </Pressable>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1} marginX="5" bg="#F4F5F9" rounded="md">
            <Pressable onPress={() => console.log("add photos")}>
              <HStack alignItems="center">
                <Text color="black" fontWeight="bold">Ajouter depuis la galerie</Text>
                <Spacer/>
                <MaterialCommunityIcons name="folder-multiple-image" size={50} color="#C30065"/>
              </HStack>
            </Pressable>
          </Box>
        </HStack>
        <HStack flex={1}>
          <VStack flex={1}>
            {this._testpermission()}
            {this._camera()}
          </VStack>
        </HStack>
        <Text fontSize="2xl" fontWeight="bold">Vos photos</Text>
        <Text>Aucune photos</Text>
        <StepButton></StepButton>
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

export default SignalementPhotos