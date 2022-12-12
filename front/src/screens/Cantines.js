import React from "react";
import { StyleSheet, View } from 'react-native'
import { Button, Text, Pressable, Center, Box, NativeBaseProvider, Flex} from "native-base";
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

class Cantines extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Box mx="4" my="6">
            <Flex direction="row">
              <Pressable onPress={() => this.props.navigation.navigate("Home")}><Ionicons name="chevron-back" size={30} color="black"/></Pressable>
              <Text style={styles.title} pt="2">Choisissez une catégorie</Text>
            </Flex>
            <Box mt="6" style={styles.btnContainer}>
                 <View>
                   <Button onPress={() => this.props.navigation.navigate("Menus")} style={styles.btn} mb="10">
                    <Center>
                        <FontAwesome name="child" size={30} color="white"/>
                        <Text mt="2" style={styles.btnText}>Menus scolaires</Text>
                    </Center>
                   </Button>
                 </View>
                 <View>
                   <Button onPress={() => this.props.navigation.navigate("Menus")} style={styles.btn} mb="10">
                   <Center>
                       <MaterialIcons name="child-care" size={30} color="white"/>
                       <Text mt="2" style={styles.btnText}>Menus crèches</Text>
                   </Center>
                   </Button>
                 </View>
                 <View>
                   <Button onPress={() => this.props.navigation.navigate("Menus")} style={styles.btn} mb="10">
                    <Center>
                        <FontAwesome name="shopping-basket" size={30} color="white"/>
                        <Text mt="2" style={styles.btnText}>Menus portages</Text>
                    </Center>
                    </Button>
                 </View>
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
  btnContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent:'space-between',
    flexWrap:"wrap"
  },
  btn: {
    height: 140,
    width: 155,
    borderRadius: 10,
    backgroundColor: "#C30065",
  },
  btnText:{
    fontSize: 20,
    color:"white",
    textAlign: "center",
    fontWeight: "600"
  }
})

export default Cantines