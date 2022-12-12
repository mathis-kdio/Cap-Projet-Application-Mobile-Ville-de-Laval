import * as React from 'react';
import { Box, Pressable, Avatar, HStack, VStack, Text, Spacer } from "native-base";
import { FontAwesome } from '@expo/vector-icons'; 

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { item } = this.props;
    return (
      <Box borderBottomWidth="1" borderColor="muted.800" p="2">
        <Pressable onPress={() => this.props.navigation.navigate("Profil")}>
          <HStack space="2" justifyContent="space-between">

          </HStack>
        </Pressable>
      </Box>
    )
  }
}

export default Item