import * as React from 'react';
import { HStack, VStack, Text } from "native-base";
import MozaicButton from '../components/MozaicButton';
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
        <MozaicButton name="Espaces Verts" navigate="Espaces_Verts" navigation={this.props.navigation} logo="tree"/>
        <MozaicButton name="Sécurité" navigate="Securite" navigation={this.props.navigation} logo="shield"/>
    </HStack>
    <HStack flex={1} space="2" justifyContent="center" m="5">
        <MozaicButton name="Voirie" navigate="Espaces Verts" navigation={this.props.navigation} logo="road"/>
        <MozaicButton name="Éclairage Public" navigate="Eclairage_Public" navigation={this.props.navigation} logo="outdoor-lamp"/>
    </HStack>
    <HStack flex={1} space="2" justifyContent="center" m="5">
        <MozaicButton name="Animaux" navigate="Animaux" navigation={this.props.navigation} logo="paw"/>
        <MozaicButton name="Divers" navigate="Divers" navigation={this.props.navigation} logo="help"/>
    </HStack>
    </VStack>
    
    )
  }
}

export default Signalement