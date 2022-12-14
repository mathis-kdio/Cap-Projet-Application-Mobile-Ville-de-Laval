import * as React from 'react';
import { HStack, VStack, Text, TextArea, Box, Spacer, Pressable } from "native-base";
import MozaicButton from '../components/MozaicButton';
import StepButton from '../components/StepButton';
import { Entypo } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';
//maybe in the componentWillMount



class SignalementDateLieu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        date: new Date(),
    }
  }

  render() {
    const onChange = (event, selectedDate) => {
        this.setState({date: new Date(selectedDate)}, () => {})
      };

    return (
        <VStack flex={1} marginX={5}>
            <Text fontSize="2xl" fontWeight="bold">Date</Text>
            <Box bg="#C30065" rounded="md" marginTop={5} alignItems="center">
                <HStack alignItems="center">
                    <DateTimePicker
                        value={this.state.date}
                        mode="date"
                        textColor='white'
                        minimumDate={new Date()}
                        onChange={(event, date) => {
                            onChange(null, date);
                        }}
                    />
                    <Pressable onPress={() => onChange(null, new Date(this.state.date.setDate(this.state.date.getDate() + 1)))}><Entypo name="chevron-right" size={50} color="black"/></Pressable>
                </HStack>
            </Box>
            <Text fontSize="2xl" fontWeight="bold">Lieu</Text>
            <Spacer/>
            <StepButton navigate="SignalementDateLieu" navigation={this.props.navigation}/>
        </VStack>
        
    )
  }
}

export default SignalementDateLieu