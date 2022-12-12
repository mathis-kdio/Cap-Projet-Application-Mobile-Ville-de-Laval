import * as React from 'react';
import { Box, HStack, VStack, Text, Spacer, Pressable, Title } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import SignalementButton from '../components/SignalementButton';
class Signalement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
    <VStack flex={1} space={4} alignItems="center">
    <Text fontSize="2xl" fontWeight="bold">Choisissez une catégorie</Text>
    <HStack flex={1} space="2" justifyContent="center" m="5">
        <SignalementButton name="Espaces Verts" navigate="Espaces_Verts" navigation={this.navigation} logo="tree"></SignalementButton>
        <SignalementButton name="Sécurité" navigate="Securite" navigation={this.navigation} logo="shield"></SignalementButton>
    </HStack>
    <HStack flex={1} space="2" justifyContent="center" m="5">
        <SignalementButton name="Voirie" navigate="Espaces Verts" navigation={this.navigation} logo="road"></SignalementButton>
        <SignalementButton name="Éclairage Public" navigate="Eclairage_Public" navigation={this.navigation} logo="outdoor-lamp"></SignalementButton>
    </HStack>
    <HStack flex={1} space="2" justifyContent="center" m="5">
        <SignalementButton name="Animaux" navigate="Animaux" navigation={this.navigation} logo="paw"></SignalementButton>
        <SignalementButton name="Divers" navigate="Divers" navigation={this.navigation} logo="question"></SignalementButton>
    </HStack>
    </VStack>
    
    )
  }
}

export default Signalement