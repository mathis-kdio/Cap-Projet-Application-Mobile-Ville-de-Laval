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
    let { navigate, navigation} = this.props;
    return (
      <Box bg="#C30065" rounded="md" marginBottom={10}>
        <Pressable onPress={() => navigation.navigate(navigate)}>
          <HStack alignItems="center" marginX={5}>
            <Text color="white" fontWeight="bold">Passer à l'étape suivante</Text>
            <Spacer/>
            <AntDesign name="arrowright" size={50} color="white"></AntDesign>
          </HStack>
        </Pressable>
      </Box>
    )
  }
}

export default StepButton