import * as React from 'react';
import { HStack, VStack, Text, Box, Spacer, Pressable, Button } from "native-base";
import StepButton from '../components/StepButton';
import { Entypo } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

class SignalementDateLieu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      btnDisabled: false,
      location: undefined,
      errorMsg: ""
    }
  }

  _navigation() {
    this.props.navigation.navigate({
      name: "SignalementPhotos",
      params: {
        details: this.props.route.params.details
      }
    })
  }

  _dateTimePicker() {
    if (this.state.showDatePicker || Platform.OS === 'ios') {
      return (
        <DateTimePicker
          value={this.state.date}
          mode="date"
          minimumDate={new Date(2021, 12, 13)}
          textColor="white"
          themeVariant="light"
          onChange={(event, date) => {this._onChange(date);}}
        />
      )
    }
  }

  _onChange(selectedDate) {
    this.setState({
      date: new Date(selectedDate),
      showDatePicker: false
    })
  };

  async _requestPermissionLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        errorMsg: 'Permission to access location was denied'
      })  
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    this.setState({
      location: location
    })  
  }

  render() {
    let text = 'En attente de la localisation..';
    if (this.state.errorMsg) {
      text = this.state.errorMsg;
    }
    else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <VStack flex={1} marginX={5}>
        <Text fontSize="2xl" fontWeight="bold">Date</Text>
        <Box bg="#C30065" rounded="md" marginTop={5} alignItems="center">
          <HStack>
            <Pressable onPress={() => this._onChange(new Date(this.state.date.setDate(this.state.date.getDate() - 1)))}>
              <Entypo name="chevron-left" size={30} color="white"/>
            </Pressable>
            <Box>
              {Platform.OS === 'android' &&
                <Pressable onPress={() => this.setState({showDatePicker: true})}>
                  <Text color="white" fontSize="lg">{moment(this.state.date).format('D/MM/YYYY')}</Text>
                </Pressable>
              }
              {this._dateTimePicker()}
            </Box>
            <Pressable onPress={() => this._onChange(new Date(this.state.date.setDate(this.state.date.getDate() + 1)))}>
              <Entypo name="chevron-right" size={30} color="white"/>
            </Pressable>
          </HStack>
        </Box>
        <Text fontSize="2xl" fontWeight="bold">Lieu</Text>
        <Button onPress={() => this._requestPermissionLocation()}>Me localiser</Button>
        <Text>{text}</Text>
        <MapView style={{width: '100%', height: '100%'}}/>
        <Spacer/>
        <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
      </VStack>
    )
  }
}

export default SignalementDateLieu