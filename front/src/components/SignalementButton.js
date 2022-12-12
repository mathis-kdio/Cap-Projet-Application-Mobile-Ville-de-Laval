import * as React from 'react';
import { Box, Pressable, Avatar, HStack, VStack, Text, Spacer, Center, Flex } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

class SignalementButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { name, navigate, navigation, logo } = this.props;
    return (
        <Box flex={1} bg="#C30065" mb="2" rounded="md" >
        <Pressable onPress={() => navigation.navigate({navigate})}>
          <Center size="175">
            <MaterialCommunityIcons name={logo} size={70} color="white"></MaterialCommunityIcons>
            <Text color="white">{name}</Text>
          </Center>
        </Pressable>
      </Box>
    )
  }
}

export default SignalementButton