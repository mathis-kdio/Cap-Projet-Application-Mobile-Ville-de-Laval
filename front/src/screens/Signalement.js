import * as React from 'react';
import { Box, HStack, VStack, Text, Spacer, Pressable } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import SignalementButton from '../components/SignalementButton';
class Signalement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <HStack space="2" justifyContent="center" m="2">
        <SignalementButton name="Espaces Verts" navigate="Espaces Verts" navigation={this.navigation}></SignalementButton>
      </HStack>
    )
  }
}

export default Signalement