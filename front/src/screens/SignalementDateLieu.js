import * as React from 'react';
import { HStack, VStack, Text, Box, Spacer, Pressable, Button, Input } from "native-base";
import StepButton from '../components/StepButton';
import { Entypo } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

class SignalementDateLieu extends React.Component {
  constructor(props) {
    super(props)
    this.mapRef = null;
    this.txtSearch = "";
    this.state = {
      date: new Date(),
      btnDisabled: false,
      location: {},
      regionName: undefined,
      errorMsg: ""
    }
  }

  _navigation() {
    this.props.navigation.navigate({
      name: "SignalementPhotos",
      params: {
        details: this.props.route.params.details
      }
    });
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
    });
  }

  async _requestPermissionLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        errorMsg: "L'autorisation d'accéder à l'emplacement a été refusée"
      })  
      return false;
    }
    return true;
  }

  async _getCurrentPosition() {
    let granted = await this._requestPermissionLocation();
    if (!granted)
      return;
    let location = await Location.getCurrentPositionAsync({});
    let { longitude, latitude} = location.coords;
    let regionName = await Location.reverseGeocodeAsync({longitude, latitude});
    this.setState({
      location: location.coords,
      regionName: regionName[0]
    });
    this._updateMap(location.coords.latitude, location.coords.longitude);
  }

  async _getGeocode() {
    let location = await Location.geocodeAsync(this.txtSearch);
    this.setState({
      location: location[0]
    });
    this._updateMap(location[0].latitude, location[0].longitude);
  }

  _updateMap(latitude, longitude) {
    this.mapRef.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    3 * 1000);
  }

  render() {
    let text = 'En attente de la localisation..';
    if (this.state.errorMsg) {
      text = this.state.errorMsg;
    }
    else if (this.state.regionName) {
      let rn = this.state.regionName;
      text = ''.concat(rn.name, ' ', rn.street, ' ', rn.postalCode, ' ', rn.city);
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
        <HStack marginY={2}>
          <Input flex={1} marginRight="2" onChangeText={(text) => this.txtSearch = text}/>
          <Button bg="#C30065" onPress={() => this._getGeocode()}>Chercher</Button>
        </HStack>
        <Button bg="#C30065" onPress={() => this._getCurrentPosition()} disabled={this.txtSearch.length == 0}>Me localiser</Button>
        <Text alignSelf="center" fontSize="lg">{text}</Text>
        <Box flex={1}>
          <MapView
            ref={(ref) => this.mapRef = ref}
            style={{width: '100%', height: '100%'}}
            initialRegion={{
              latitude: 48.07065,
              longitude: -0.77354,
              latitudeDelta: 0.015,
              longitudeDelta: 0.015,
            }}
          >
            <Marker
              coordinate={{
                latitude: this.state.location.latitude ? this.state.location.latitude : 48.07065,
                longitude: this.state.location.longitude ? this.state.location.longitude : -0.77354
              }}
            />
          </MapView>
        </Box>
        <Spacer/>
        <StepButton _navigation={() => this._navigation()} btnDisabled={this.state.btnDisabled}/>
      </VStack>
    )
  }
}

export default SignalementDateLieu