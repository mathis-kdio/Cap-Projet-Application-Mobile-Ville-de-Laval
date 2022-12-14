import * as React from 'react';
import { HStack, VStack, Text, TextArea, Box, Spacer } from "native-base";
import MozaicButton from '../components/MozaicButton';
import StepButton from '../components/StepButton';

class SignalementDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  _navigation() {
    this.props.navigation.navigate({
      name: "SignalementPhotos",
      params: {
        details: this.details
      }
    })
  }
  render() {
    return (
      <VStack flex={1} marginX={5}>
        <Text fontSize="2xl" fontWeight="bold">Quel est le problème ?</Text>
        <TextArea h={20} placeholder="Décrivez le problème ici" w="100%"/>
        <Spacer/>
        <StepButton _navigation={() => this._navigation()}/>
      </VStack>
    )
  }
}

export default SignalementDetails