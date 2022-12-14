import * as React from 'react';
import { HStack, VStack, Text, Box, Pressable, Spacer, Image } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import StepButton from '../components/StepButton';
import * as ImagePicker from 'expo-image-picker';

class SignalementPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnDisabled: true,
      details: "",
      image: null
    }
  }

  componentDidMount() {
    if (this.props.route.params) {
      if (this.props.route.params.details) {
        this.setState({
          details: this.props.route.params.details
        })
      }
    }
  }

  componentDidUpdate() {
    if (this.props.route.params) {
      if (this.props.route.params.image && this.state.image != this.props.route.params.image.uri) {
        this.setState({
          image: this.props.route.params.image.uri,
          btnDisabled: false
        })
      }
    }
  }

  _navigation() {
    this.props.navigation.navigate({
      name: "SignalementRenseignements",
      params: {
        details: this.state.details,
        image: this.state.image
      }
    })
  }

  async _pickImage() {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      this.setState({
        image: result.assets[0].uri,
        btnDisabled: false
      })
    }
  };

  render() {
    return (
      <VStack flex={1} marginX={5}>
        <Text fontSize="2xl" fontWeight="bold">Photos</Text>
        <HStack>
          <Box flex={1} marginX="5" marginY="5" bg="#F4F5F9" rounded="md">
            <Pressable onPress={() => this.props.navigation.navigate("SignalementCamera")}>
              <HStack alignItems="center">
                <Text color="black" fontWeight="bold">Prendre une photo</Text>
                <Spacer/>
                <MaterialCommunityIcons name="camera-plus" size={50} color="#C30065"/>
              </HStack>
            </Pressable>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1} marginX="5" marginY="5" bg="#F4F5F9" rounded="md">
            <Pressable onPress={() => this._pickImage()}>
              <HStack alignItems="center">
                <Text color="black" fontWeight="bold">Ajouter depuis la galerie</Text>
                <Spacer/>
                <MaterialCommunityIcons name="folder-multiple-image" size={50} color="#C30065"/>
              </HStack>
            </Pressable>
          </Box>
        </HStack>
        <Text fontSize="2xl" fontWeight="bold">Vos photos</Text>
        <Text>Aucune photos</Text>
        {this.state.image && <Image source={{ uri: this.state.image }} alt="image du signalement" style={{ width: 200, height: 200 }} />}
        <Spacer/>
        <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
      </VStack>
    )
  }
}

export default SignalementPhotos