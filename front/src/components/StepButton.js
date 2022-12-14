import * as React from 'react';
import { Box, Pressable, Text, HStack, Spacer } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 

class StepButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Pressable
        onPress={() => this.props._navigation()}
        isDisabled={this.props.btnDisabled}
        bg="#C30065"
        rounded="md"
        _disabled={{
          bg: "gray.400",
        }}
      >
        <HStack alignItems="center" marginX={5}>
          <Text color="white" fontWeight="bold">Passer à l'étape suivante</Text>
          <Spacer/>
          <AntDesign name="arrowright" size={50} color="white"></AntDesign>
        </HStack>
      </Pressable>
    )
  }
}

export default StepButton