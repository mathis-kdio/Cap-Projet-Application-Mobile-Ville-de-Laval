import * as React from 'react';
import { HStack, VStack, Text, TextArea, Box, Center, Pressable } from "native-base";
import {AntDesign } from '@expo/vector-icons'; 

class SignalementRecap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
        <VStack flex={1} space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Récapitulatif</Text>
        <TextArea h={20} placeholder="Récap du pb" w="90%" />
        <Text  fontWeight="bold">Date :</Text>
        <Text  fontWeight="bold">Lieu :</Text>
        <Text  fontWeight="bold">Vos photos :</Text>
        <Center>
            <Pressable onPress={() => this.props.navigation.navigate("SignalementRecap")}>
                <Center bg="#C30065" _text={{
                color: "white",
                fontWeight: "bold"
                }} height={100} width={{
                base: 200,
                lg: 250
                }}>
                    Valider et envoyer
                    <AntDesign name="arrowright" size={50} color="white"></AntDesign>
                </Center>
            </Pressable>
        </Center>
      </VStack>
    )
  }
}

export default SignalementRecap