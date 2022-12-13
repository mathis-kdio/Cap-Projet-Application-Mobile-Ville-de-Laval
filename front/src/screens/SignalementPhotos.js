import * as React from 'react';
import { HStack, VStack, Text, Box, Pressable, Center, Spacer } from "native-base";
import { Camera, CameraType } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import StepButton from '../components/StepButton';

class SignalementPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
        <Text fontSize="2xl" fontWeight="bold">Vos photos</Text>
        <Text>Aucune photos</Text>
        <StepButton></StepButton>
      </VStack>
    )
  }
}

export default SignalementPhotos