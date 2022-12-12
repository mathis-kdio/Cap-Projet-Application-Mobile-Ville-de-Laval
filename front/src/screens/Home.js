import * as React from 'react';
import { HStack } from "native-base";
import MozaicButton from '../components/MozaicButton';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <HStack space="2" justifyContent="center" m="2">
        <MozaicButton
          name="cantine"
          navigate="Cantines"
          navigation={this.props.navigation}
          logo="shield"
        />
        <MozaicButton
          name="Signalements"
          navigate="Signalement"
          navigation={this.props.navigation}
          logo="shield"
        />
      </HStack>
    )
  }
}

export default Home