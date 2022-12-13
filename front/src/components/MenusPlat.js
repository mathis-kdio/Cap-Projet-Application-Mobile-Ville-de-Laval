import * as React from 'react';
import { StyleSheet} from 'react-native'
import { Box, Text, Image } from "native-base";

import bio from '../assets/bio.png'
import local from '../assets/local.jpg'
import viande_francaise from '../assets/viande_francaise.png'
import fruits from '../assets/fruits.jpg'

class MenusPlat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { plat } = this.props;
    return (
    <Box>
      <Text ml="2" style={styles.subtitle}>{plat.type}</Text>
        <Text ml="4" style={styles.text}>{plat.nom}</Text>
        <Box ml="4" style={styles.imgContainer}>
            {plat.bio ? (<Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>) : null}
            {plat.local ? (<Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>) : null}
            {plat.viande_francaise ? (<Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>) : null}
            {plat.fruits ? (<Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>) : null}
        </Box>
    </Box>
    )
  }
}


const styles = StyleSheet.create({
    subtitle: {
      fontSize: 15,
      fontWeight: "bold",
      color: "black",
    },
    text:{
      fontSize: 12,
      fontWeight: "medium",
      color: "black",
    },
    imgContainer:{
      flexDirection:"row",
    }
  })

export default MenusPlat