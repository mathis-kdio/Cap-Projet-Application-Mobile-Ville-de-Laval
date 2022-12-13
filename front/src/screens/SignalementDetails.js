import * as React from 'react';
import { HStack, VStack, Text, TextArea, Box } from "native-base";
import MozaicButton from '../components/MozaicButton';
import StepButton from '../components/StepButton';

class SignalementDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
        <VStack flex={1} space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Quel est le problème ?</Text>
        <TextArea h={20} placeholder="Text Area Placeholder" w="90%" />
        <StepButton></StepButton>
      </VStack>
    )
  }
}

export default SignalementDetails