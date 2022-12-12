import React from "react";
import { StyleSheet, View } from 'react-native'
import { Button, Text, Pressable, Center, Box, NativeBaseProvider, Flex, Select} from "native-base";
import { FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';

class Menus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type_menu: 0
    }
  }

  menu = {
    convives: '',
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
                <Select value={this.menu.convives} style={styles.select} minWidth="200" accessibilityLabel="Convives" placeholder="Convives" mt="1" onValueChange={itemValue => {this.menu.convives = itemValue;}}>
                  <Select.Item label="Adulte" value="adulte" />
                  <Select.Item label="Maternelle" value="maternelle" />
                  <Select.Item label="Primaire" value="primaire" />
                </Select>
             </Box>
             <Box my="3" style={styles.btnContainer}>
                 <View>
                   <Button onPress={() => this.setState({type_menu: 0})} style={this.state.type_menu == 0 ? styles.btnStyle(1) : styles.btnStyle(0)}>
                        <Text style={[this.state.type_menu == 0 ? styles.btnText_active : styles.btnText]}>Déjeuner</Text>
                   </Button>
                 </View>
                 <View >
                   <Button onPress={() => this.setState({type_menu: 1})} style={this.state.type_menu == 1 ? styles.btnStyle(1) : styles.btnStyle(0)} >
                       <Text style={[this.state.type_menu == 1 ? styles.btnText_active : styles.btnText]}>Sans viande</Text>
                   </Button>
                 </View>
                 <View>
                   <Button onPress={() => this.setState({type_menu: 2})} style={this.state.type_menu == 2 ? styles.btnStyle(1) : styles.btnStyle(0)}>
                        <Text style={[this.state.type_menu == 2 ? styles.btnText_active : styles.btnText]}>Sans porc</Text>
                    </Button>
                 </View>
                 <Button onPress={() => console.log(this.state.type_menu)}>Aloo</Button>
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
  selectContainer:{
    justifyContent:"center",
  },
  select:{
    height: 60,
    color:"#C30065",
  },
  btnContainer: {
    flex: 1,
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
  btn_active: {
    
  },
  btnText_active:{
    fontSize: 12,
    color:"white",
    textAlign: "center",
    fontWeight: "bold"
  },
  btn: {
    
  },
  btnText:{
    fontSize: 12,
    color:"#C30065",
    textAlign: "center",
    fontWeight: "bold"
  }
})

export default Menus