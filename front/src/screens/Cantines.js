import React from "react";
import { StyleSheet, View } from 'react-native'
import { Button, Text, VStack, Center, Box, NativeBaseProvider} from "native-base";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Box mx="4" my="6">
            <Text pt="2" style={styles.title}>Choisissez une catégorie</Text>
            <Box mt="6" style={styles.btnContainer}>
                 <View>
                   <Button onPress={() => console.log("hello world")} style={styles.btn} mb="10">
                    <Center>
                        <FontAwesome name="child" size={30} color="white"/>
                        <Text mt="2" style={styles.btnText}>Menus scolaires</Text>
                    </Center>
                   </Button>
                 </View>
                 <View>
                   <Button onPress={() => console.log("hello")} style={styles.btn} mb="10">
                   <Center>
                       <MaterialIcons name="child-care" size={30} color="white"/>
                       <Text mt="2" style={styles.btnText}>Menus crèches</Text>
                   </Center>
                   </Button>
                 </View>
                 <View>
                   <Button onPress={() => console.log("hi")} style={styles.btn} mb="10">
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
    height: 145,
    width: 145,
    backgroundColor: "#C30065",
  },
  btnText:{
    fontSize: 20,
    color:"white",
    textAlign: "center",
    fontWeight: "600"
  }
})

export default Shop