import * as React from 'react';
import { VStack, Text, TextArea, Spacer } from "native-base";
import StepButton from '../components/StepButton';

class SignalementDetails extends React.Component {
  constructor(props) {
    super(props)
    this.details = ""
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

  _textAreaChanged(text) {
    this.details = text;
  }

  render() {
    return (
      <VStack flex={1} marginX={5}>
        <Text fontSize="2xl" fontWeight="bold">Quel est le problème ?</Text>
        <TextArea 
          h={20}
          placeholder="Décrivez le problème ici"
          w="100%"
          onChangeText={(text) => this._textAreaChanged(text)}
        />
        <Spacer/>
        <StepButton _navigation={() => this._navigation()}/>
      </VStack>
    )
  }
}

export default SignalementDetails