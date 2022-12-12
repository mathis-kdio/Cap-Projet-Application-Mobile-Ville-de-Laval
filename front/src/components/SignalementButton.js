import * as React from 'react';
import { Box, Pressable, Avatar, HStack, VStack, Text, Spacer } from "native-base";
import { FontAwesome } from '@expo/vector-icons'; 

class SignalementButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { name, navigate, navigation } = this.props;
    return (
        <Box flex={1} bg="#C30065" mb="10">
        <Pressable onPress={() => navigation.navigate({navigate})}>
          <HStack justifyContent="center">
            <Text color="white">{name}</Text>
          </HStack>
        </Pressable>
      </Box>
    )
  }
}

export default SignalementButton