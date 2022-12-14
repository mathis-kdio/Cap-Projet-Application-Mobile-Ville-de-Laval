import * as React from 'react';
import { VStack, Text, TextArea, Spacer, Box } from "native-base";
import StepButton from '../components/StepButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class SignalementDetails extends React.Component {
  constructor(props) {
    super(props)
    this.details = ""
    this.state = {
      btnDisabled: true
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
    this.setState({btnDisabled: text.length == 0})
  }

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <VStack flex={1} marginX={5}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">Quel est le problème ?</Text>
            <TextArea
              h={20}
              placeholder="Décrivez le problème ici"
              w="100%"
              onChangeText={(text) => this._textAreaChanged(text)}
            />
          </Box>
          <Spacer/>
          <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
        </VStack>
      </KeyboardAwareScrollView>
    )
  }
}

export default SignalementDetails