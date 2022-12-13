import * as React from 'react';
import { HStack, VStack, Text, TextArea, Box, Icon, Center, Spacer } from "native-base";
import StepButton from '../components/StepButton';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

class SignalementRenseignements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <VStack flex={1} marginX={5}>
        <Text fontSize="2xl" fontWeight="bold">Informations personnels</Text>
        <VStack space={4}>
          <HStack space={2} alignItems="center">
            <Ionicons name="person"size={30} color="#C30065"></Ionicons>
            <TextArea h={10} placeholder="Nom" w="80%" />
          </HStack>
          <HStack space={2} alignItems="center">
            <Ionicons name="person"size={30} color="#C30065"></Ionicons>
            <TextArea h={10} placeholder="Prénom" w="80%" />
          </HStack>
          <HStack space={2} alignItems="center">
            <Entypo name="location-pin"size={30} color="#C30065"></Entypo>
            <TextArea h={10} placeholder="Adresse" w="80%" />
          </HStack>
          <HStack space={2} alignItems="center">
            <Entypo name="phone"size={30} color="#C30065"></Entypo>
            <TextArea h={10} placeholder="Numéro de Téléphone" w="80%" />
          </HStack>
          <HStack space={2} alignItems="center">
            <Entypo name="mail-with-circle"size={30} color="#C30065"></Entypo>
            <TextArea h={10} placeholder="Email" w="80%" />
          </HStack>
        </VStack>
        <Spacer/>
        <StepButton navigate="SignalementRecap" navigation={this.props.navigation}/>
      </VStack>
    )
  }
}

export default SignalementRenseignements