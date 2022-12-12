import * as React from 'react';
import { Box, Pressable, HStack, Text } from "native-base";

class HomeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { name, navigate, navigation } = this.props;
    return (
      <Box flex={1} bg="#C30065" p="2">
      <Pressable onPress={() => navigation.navigate(navigate)}>
        <HStack justifyContent="center">
          <Text color="white">{name}</Text>
        </HStack>
      </Pressable>
    </Box>
    )
  }
}

export default HomeButton