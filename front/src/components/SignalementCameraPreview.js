import * as React from 'react';
import { HStack, Text, Box } from "native-base";
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

class SignalementCameraPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { photo, savePhoto, retakePicture } = this.props;
    return (
      <Box flex={1} style={styles.container}>
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={styles.imageBackground}
        >
        <HStack flex={1} alignItems="flex-end" justifyContent="space-around" marginBottom={5}>
          <TouchableOpacity onPress={() => retakePicture()} >
            <Box margin={2} padding={4} bg="white" rounded="md">
              <Text>Reprendre la photo</Text>
            </Box>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => savePhoto()}>
            <Box margin={2} padding={4} bg="white" rounded="md">
              <Text>Garder la photo</Text>
            </Box>
          </TouchableOpacity>
        </HStack>
      </ImageBackground>
      </Box>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  imageBackground: {
    flex: 1,
  }
});

export default SignalementCameraPreview