import React from "react";
import { useEffect } from "react";
import { StyleSheet, View } from 'react-native'
import { Button, Text, Pressable, Center, Box, NativeBaseProvider, Flex, Select, VStack, Image, Divider} from "native-base";
import {Entypo, Ionicons} from '@expo/vector-icons';
import MenusData from '../assets/MenusData.json';
import MenusComponent from '../components/MenusComponent';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment/moment";

class Menus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      convives: 'adulte',
      type_menu: "dejeuner",
      date: new Date(),
      showDatePicker: false,
      current_menu: {}
    }
  }

  componentDidMount() {
    this._loadMenu();
  }

  _loadMenu() {
    let menu = MenusData.find(obj => {
      if (obj.date == moment(this.state.date).format('D/MM/YYYY'))
        return obj;
    })
    this.setState({current_menu: menu});
  };

  _onChange(selectedDate) {
    this.setState({
      date: new Date(selectedDate),
      showDatePicker: false
    })
    this._loadMenu();
  };

  render() {
    return (
      <Box style={styles.container}>
        <Box mx="4" my="6">
          <Flex direction="row">
            <Pressable onPress={() => this.props.navigation.navigate("Cantines")}><Ionicons name="chevron-back" size={30} color="black"/></Pressable>
            <Text style={styles.title} pt="2">Convives</Text>
          </Flex>
          <Box mt="2" style={styles.selectContainer}>
            <Select value={this.state.convives} defaultValue="adulte" style={styles.select} minWidth="200" accessibilityLabel="Convives" placeholder="Convives" mt="1" onValueChange={itemValue => {this.setState({convives: itemValue})}}>
              <Select.Item label="Adulte" value="adulte" />
              <Select.Item label="Maternelle" value="maternelle" />
              <Select.Item label="Primaire" value="primaire" />
            </Select>
          </Box>
          <Box my="3" style={styles.btnContainer}>
                <View>
                  <Button onPress={() => this.setState({type_menu: "dejeuner"})} style={this.state.type_menu == "dejeuner" ? styles.btnStyle(1) : styles.btnStyle(0)}>
                      <Text style={this.state.type_menu == "dejeuner" ? styles.btnText(1) : styles.btnText(0)}>Déjeuner</Text>
                  </Button>
                </View>
                <View >
                  <Button onPress={() => this.setState({type_menu: "SV"})} style={this.state.type_menu == "SV" ? styles.btnStyle(1) : styles.btnStyle(0)} >
                      <Text style={this.state.type_menu == "SV" ? styles.btnText(1) : styles.btnText(0)}>Sans viande</Text>
                  </Button>
                </View>
                <View>
                  <Button onPress={() => this.setState({type_menu: "SP"})} style={this.state.type_menu == "SP" ? styles.btnStyle(1) : styles.btnStyle(0)}>
                      <Text style={this.state.type_menu == "SP" ? styles.btnText(1) : styles.btnText(0)}>Sans porc</Text>
                  </Button>
                </View>
          </Box>
          <Box style={styles.dateContainer} bg="#C30065">
            <Pressable onPress={() => this._onChange(new Date(this.state.date.setDate(this.state.date.getDate() - 1)))}>
              <Entypo name="chevron-left" size={30} color="white"/>
            </Pressable>
            <Pressable onPress={() => this.setState({showDatePicker: true})}>
              <Text color="white" fontSize="lg">{moment(this.state.date).format('D/MM/YYYY')}</Text>
            </Pressable>
            {this.state.showDatePicker &&
              <DateTimePicker
                value={this.state.date}
                mode="date"
                minimumDate={new Date(2021, 12, 13)}
                style={styles.datePicker}
                onChange={(event, date) => {this._onChange(date);}}
              />
            }
            <Pressable onPress={() => this._onChange(new Date(this.state.date.setDate(this.state.date.getDate() + 1)))}>
              <Entypo name="chevron-right" size={30} color="white"/>
            </Pressable>
          </Box>
          <MenusComponent convives={this.state.convives} type_menu={this.state.type_menu} menu={this.state.current_menu}/>
        </Box>
      </Box>
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
  dateContainer:{
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap:"wrap",
    height: 40,
    borderRadius: 5
  }
})

export default Menus