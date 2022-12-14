import * as React from 'react';
import { HStack, VStack, Text, Spacer, Input } from "native-base";
import StepButton from '../components/StepButton';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

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
      <VStack flex={1} marginX={5}>
        <Text fontSize="2xl" fontWeight="bold">Informations personnels</Text>
        <VStack space={4}>
          <HStack space={2} alignItems="center">
            <Ionicons name="person"size={30} color="#C30065"></Ionicons>
            <Input
              type='text'
              placeholder="Nom"
              marginRight={10}
              onChangeText={(text) => this._textInputChanged(text, 'nom')}
            />
          </HStack>
          <HStack space={2} alignItems="center">
            <Ionicons name="person"size={30} color="#C30065"></Ionicons>
            <Input
              type='text'
              placeholder="Prénom"
              marginRight={10}
              onChangeText={(text) => this._textInputChanged(text, 'prenom')}
            />
          </HStack>
          <HStack space={2} alignItems="center">
            <Entypo name="location-pin"size={30} color="#C30065"></Entypo>
            <Input
              type='text'
              placeholder="Adresse"
              marginRight={10}
              onChangeText={(text) => this._textInputChanged(text, 'adresse')}
            />
          </HStack>
          <HStack space={2} alignItems="center">
            <Entypo name="phone"size={30} color="#C30065"></Entypo>
            <Input
              type='text'
              placeholder="Numéro de Téléphone"
              marginRight={10}
              onChangeText={(text) => this._textInputChanged(text, 'tel')}
            />
          </HStack>
          <HStack space={2} alignItems="center">
            <Entypo name="mail-with-circle"size={30} color="#C30065"></Entypo>
            <Input
              type='text'
              placeholder="Email"
              marginRight={10}
              onChangeText={(text) => this._textInputChanged(text, 'email')}
            />
          </HStack>
        </VStack>
        <Spacer/>
        <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
      </VStack>
    )
  }
}

export default SignalementRenseignements