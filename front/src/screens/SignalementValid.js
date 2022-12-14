import * as React from 'react';
import { VStack, Text, Pressable, Center } from "native-base";
import { AntDesign} from '@expo/vector-icons'; 

class SignalementValid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
        <VStack flex={1} space={4} alignItems="center" marginTop="1/3" marginLeft="1/6" marginRight="1/6">
        <AntDesign name="checkcircleo" size={250} color="green"  />
        <Text fontSize="3xl" fontWeight="bold">Votre signalement a bien été envoyé !</Text>
        <Center>
            <Pressable onPress={() => this.props.navigation.navigate("SignalementValid")}>
                <Center bg="#C30065" _text={{
                color: "white",
                fontWeight: "bold"
                }} height={100} width={{
                base: 200,
                lg: 250
                }}>
                    Mes signalements
                    <AntDesign name="arrowright" size={50} color="white"></AntDesign>
                </Center>
            </Pressable>
        </Center>
      </VStack>
    )
  }
}

export default SignalementValid