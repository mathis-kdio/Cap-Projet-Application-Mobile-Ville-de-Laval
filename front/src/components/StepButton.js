import * as React from 'react';
import { Box, Pressable, Text, Center, HStack } from "native-base";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

class StepButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { navigate, navigation} = this.props;
    return (
        <Center>
            <Pressable onPress={() => navigation.navigate(navigate)}>
                <Center bg="#C30065" _text={{
                color: "white",
                fontWeight: "bold"
                }} height={100} width={{
                base: 200,
                lg: 250
                }}>
                    Passer à l'étape suivante
                    <AntDesign name="arrowright" size={50} color="white"></AntDesign>
                </Center>
            </Pressable>
        </Center>
    )
  }
}

export default StepButton