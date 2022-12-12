import * as React from 'react';
import { Box, HStack, VStack, Text, Spacer, Pressable } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <HStack space="2" justifyContent="center" m="2">
        <Box flex={1} bg="#C30065" p="2">
          <Pressable onPress={() => this.props.navigation.navigate("Cantines")}>
            <HStack justifyContent="center">
              <Text color="white">Cantines</Text>
            </HStack>
          </Pressable>
        </Box>
        <Box flex={1} bg="#C30065" p="2">
          <Pressable onPress={() => this.props.navigation.navigate("Signalement")}>
            <HStack justifyContent="center">
              <Text color="white">Signalements</Text>
            </HStack>
          </Pressable>
        </Box>
      </HStack>
    )
  }
}

export default Home