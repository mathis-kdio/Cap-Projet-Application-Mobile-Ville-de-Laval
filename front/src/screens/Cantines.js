import * as React from 'react';
import { Input, Box, FlatList, HStack, VStack, Text, Spacer } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Item from '../components/Item';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Box flex={1} justifyContent="center">
        <FlatList
          data={this.data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) =>
            <Box>

              <Item item={item}/>
            </Box>
          }
        />
      </Box>
    )
  }
}

export default Home