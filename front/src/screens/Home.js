import * as React from 'react';
import { HStack } from "native-base";
import HomeButton from '../components/HomeButton';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <HStack space="2" justifyContent="center" m="2">
        <HomeButton
          name="cantine"
          navigate="Cantines"
          navigation={this.props.navigation}
        />
        <HomeButton
          name="Signalements"
          navigate="Signalement"
          navigation={this.props.navigation}
        />
      </HStack>
    )
  }
}

export default Home