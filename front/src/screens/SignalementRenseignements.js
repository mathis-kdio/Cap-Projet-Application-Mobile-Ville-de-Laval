import * as React from 'react';
import { HStack, VStack, Text, TextArea, Box, Icon, Center } from "native-base";
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
        <VStack flex={1} space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Informations personnels</Text>
            <HStack space={2}>
                <Ionicons name="person"size={30} color="#C30065"></Ionicons>
                <TextArea h={10} placeholder="Nom" w="80%" />
            </HStack>
            <HStack space={2}>
                <Ionicons name="person"size={30} color="#C30065"></Ionicons>
                <TextArea h={10} placeholder="Prénom" w="80%" />
            </HStack>
            <HStack space={2}>
                <Entypo name="location-pin"size={30} color="#C30065"></Entypo>
                <TextArea h={10} placeholder="Adresse" w="80%" />
            </HStack>
            <HStack space={2}>
                <Entypo name="phone"size={30} color="#C30065"></Entypo>
                <TextArea h={10} placeholder="Numéro de Téléphone" w="80%" />
            </HStack>
            <HStack space={2}>
                <Entypo name="mail-with-circle"size={30} color="#C30065"></Entypo>
                <TextArea h={10} placeholder="Email" w="80%" />
            </HStack>
        <StepButton navigate="SignalementRecap" navigation={this.props.navigation}></StepButton>
      </VStack>
    )
  }
}

export default SignalementRenseignements