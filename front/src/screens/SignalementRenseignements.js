import * as React from 'react';
import { HStack, VStack, Text, Spacer, Input } from "native-base";
import StepButton from '../components/StepButton';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class SignalementRenseignements extends React.Component {
  constructor(props) {
    super(props)
    this.renseignements = {nom: "", prenom: "", adresse: "", tel: "", email: ""}
    this.state = {
      btnDisabled: true
    }
  }

  _navigation() {
    this.props.navigation.navigate({
      name: "SignalementRecap",
      params: {
        details: this.props.route.params.details,
        image: this.props.route.params.image
      }
    })
  }

  _textInputChanged(text, item) {
    this.renseignements[item] = text;
    this.setState({btnDisabled: !Object.values(this.renseignements).every(item => item.length != 0)})
  }

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <VStack flex={1} marginX={5}>
          <Text fontSize="2xl" fontWeight="bold">Informations personnels</Text>
          <VStack space={4}>
            <HStack space={2} alignItems="center">
              <Ionicons name="person"size={30} color="#C30065"></Ionicons>
              <Input
                type='text'
                keyboardType={'default'}
                placeholder="Nom"
                marginRight={10}
                onChangeText={(text) => this._textInputChanged(text, 'nom')}
                returnKeyType={'next'}
                onSubmitEditing={() => this.prenomInput.focus()}
              />
            </HStack>
            <HStack space={2} alignItems="center">
              <Ionicons name="person"size={30} color="#C30065"></Ionicons>
              <Input
                type='text'
                keyboardType={'default'}
                placeholder="Prénom"
                marginRight={10}
                onChangeText={(text) => this._textInputChanged(text, 'prenom')}
                ref={ref => {this.prenomInput = ref}}
                returnKeyType={'next'}
                onSubmitEditing={() => this.adresseInput.focus()}
              />
            </HStack>
            <HStack space={2} alignItems="center">
              <Entypo name="location-pin"size={30} color="#C30065"></Entypo>
              <Input
                type='text'
                keyboardType={'default'}
                placeholder="Adresse"
                marginRight={10}
                onChangeText={(text) => this._textInputChanged(text, 'adresse')}
                ref={ref => {this.adresseInput = ref}}
                returnKeyType={'next'}
                onSubmitEditing={() => this.telInput.focus()}
              />
            </HStack>
            <HStack space={2} alignItems="center">
              <Entypo name="phone"size={30} color="#C30065"></Entypo>
              <Input
                type='text'
                keyboardType={'phone-pad'}
                placeholder="Numéro de Téléphone"
                marginRight={10}
                onChangeText={(text) => this._textInputChanged(text, 'tel')}
                ref={ref => {this.telInput = ref}}
                returnKeyType={'next'}
                onSubmitEditing={() => this.emailInput.focus()}
              />
            </HStack>
            <HStack space={2} alignItems="center">
              <Entypo name="mail-with-circle"size={30} color="#C30065"></Entypo>
              <Input
                type='text'
                keyboardType={'email-address'}
                placeholder="Email"
                marginRight={10}
                onChangeText={(text) => this._textInputChanged(text, 'email')}
                ref={ref => {this.emailInput = ref}}
              />
            </HStack>
          </VStack>
          <Spacer/>
          <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
        </VStack>
      </KeyboardAwareScrollView>
    )
  }
}

export default SignalementRenseignements