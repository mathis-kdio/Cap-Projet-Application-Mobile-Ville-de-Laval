import React from "react";
import { StyleSheet, View } from 'react-native'
import { Button, Text, Pressable, Center, Box, NativeBaseProvider, Flex, Select, VStack, Image, Divider} from "native-base";
import { FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';

import bio from '../assets/bio.png'
import local from '../assets/local.jpg'
import viande_francaise from '../assets/viande_francaise.png'
import fruits from '../assets/fruits.jpg'

class Menus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      convives: '',
      type_menu: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Box mx="4" my="6">
            <Flex direction="row">
              <Pressable onPress={() => this.props.navigation.navigate("Cantines")}><Ionicons name="chevron-back" size={30} color="black"/></Pressable>
              <Text style={styles.title} pt="2">Convives</Text>
            </Flex>
            <Box mt="2" style={styles.selectContainer}>
                <Select value={this.state.convives} style={styles.select} minWidth="200" accessibilityLabel="Convives" placeholder="Convives" mt="1" onValueChange={itemValue => {this.setState({convives: itemValue})}}>
                  <Select.Item label="Adulte" value="adulte" />
                  <Select.Item label="Maternelle" value="maternelle" />
                  <Select.Item label="Primaire" value="primaire" />
                </Select>
             </Box>
             <Box my="3" style={styles.btnContainer}>
                 <View>
                   <Button onPress={() => this.setState({type_menu: 0})} style={this.state.type_menu == 0 ? styles.btnStyle(1) : styles.btnStyle(0)}>
                        <Text style={this.state.type_menu == 0 ? styles.btnText(1) : styles.btnText(0)}>Déjeuner</Text>
                   </Button>
                 </View>
                 <View >
                   <Button onPress={() => this.setState({type_menu: 1})} style={this.state.type_menu == 1 ? styles.btnStyle(1) : styles.btnStyle(0)} >
                       <Text style={this.state.type_menu == 1 ? styles.btnText(1) : styles.btnText(0)}>Sans viande</Text>
                   </Button>
                 </View>
                 <View>
                   <Button onPress={() => this.setState({type_menu: 2})} style={this.state.type_menu == 2 ? styles.btnStyle(1) : styles.btnStyle(0)}>
                        <Text style={this.state.type_menu == 2 ? styles.btnText(1) : styles.btnText(0)}>Sans porc</Text>
                    </Button>
                 </View>
             </Box>
             <Box style={styles.btnContainer}>
              <VStack w="100%" h="100%">
                  <Button style={styles.datePicker}>
                    <Text style={styles.btnText(1)}>Date</Text>
                  </Button>
                </VStack>
             </Box>
             <Box w="100%" mt="-3" pb="2" style={styles.menuContainer}>
                <Box mt="4" w="100%">
                    <Text ml="2" style={styles.subtitle}>Entrée</Text>
                    <Text ml="4" style={styles.text}>P. de terre jambon emmental mayonnaise</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>
                </Box>
                <Divider></Divider>

                <Box mt="1" w="100%">
                    <Text ml="2" style={styles.subtitle}>Plat</Text>
                    <Text ml="4" style={styles.text}>Aiguillettes de poulet</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>

                    <Text ml="2" style={styles.subtitle}>Sauce</Text>
                    <Text ml="4" style={styles.text}>Sauce fromagère (viande)</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>

                    <Text ml="2" style={styles.subtitle}>Garniture</Text>
                    <Text ml="4" style={styles.text}>Brocolis</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>
                </Box>
                <Divider></Divider>

                <Box mt="1" w="100%">
                    <Text ml="2" style={styles.subtitle}>Fromage</Text>
                    <Text ml="4" style={styles.text}>+ Gruyère râpé bio</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>
                </Box>
                <Divider></Divider>

                <Box mt="1" w="100%" style={styles.dessert}>
                  <Box mt="1">
                    <Text ml="2" style={styles.subtitle}>Dessert</Text>
                    <Text ml="4" style={styles.text}>Clémentine</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>
                  </Box>

                  <Box mt="1" mr="1">
                    <Text ml="2" style={styles.subtitle}>Divers</Text>
                    <Text ml="4" style={styles.text}>Pain</Text>
                    <Box ml="4" style={styles.imgContainer}>
                      <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                      <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                      <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                      <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                    </Box>
                  </Box>
                </Box>

                <Text ml="2" style={styles.subtitle}>Goûter</Text>
                <Text ml="4" style={styles.text}>Lait bio chocolaté</Text>
                <Box ml="4" style={styles.imgContainer}>
                  <Image mr="1" source={bio} size={5} resizeMode='contain' alt="Bio"/>
                  <Image mr="1" source={local} size={5} resizeMode='contain' alt="Local"/>
                  <Image mr="1" source={viande_francaise} size={5} resizeMode='contain' alt="Viande française"/>
                  <Image mr="1" source={fruits} size={5} resizeMode='contain' alt="Fruits et légumes de saison"/>
                </Box>
             </Box>
        </Box>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
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
  selectContainer:{
    justifyContent:"center",
  },
  select:{
    height: 60,
    color:"#C30065",
  },
  btnContainer: {
    flexDirection:"row",
    justifyContent:'space-between',
    flexWrap:"wrap"
  },
  btnStyle(active) {
    if(active == 1){
      return {
        height: 45,
        width: 100,
        borderRadius: 15,
        backgroundColor: "#C30065",
      }
    }
    else{
      return{
        height: 45,
        width: 100,
        borderRadius: 15,
        backgroundColor: "transparent",
        borderColor: "#C30065",
        borderWidth: 2,
      }
    }
  },
  btnText(active) {
    if(active == 1){
      return{
        fontSize: 12,
        color:"white",
        textAlign: "center",
        fontWeight: "bold"
      }
    }
    else{
      return{
        fontSize: 12,
        color:"#C30065",
        textAlign: "center",
        fontWeight: "bold"
      }
    }
  },
  datePicker:{
    height: 40,
    borderRadius: 5,
    backgroundColor: "#C30065",
  },
  menuContainer: {
    backgroundColor: "#F4F5F9",
    zIndex: -1,
    borderRadius: 5
  },
  imgContainer:{
    flexDirection:"row",
  },
  dessert:{
    flexDirection:"row",
    justifyContent: "space-between"
  },
})

export default Menus