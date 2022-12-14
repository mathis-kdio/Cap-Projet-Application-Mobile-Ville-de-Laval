import * as React from 'react';
import { VStack, Text, TextArea, Spacer, Box } from "native-base";
import StepButton from '../components/StepButton';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';

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
      <SafeAreaView style={{ flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{flex: 1}}
          enabled
        >
          <VStack flex={1} marginX={5} justifyContent="space-between">
            <Box>
              <Text fontSize="2xl" fontWeight="bold">Quel est le problème ?</Text>
              <TextArea 
                h={20}
                placeholder="Décrivez le problème ici"
                w="100%"
                onChangeText={(text) => this._textAreaChanged(text)}
              />
            </Box>
            <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
          </VStack>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1
  }
})

export default SignalementDetails