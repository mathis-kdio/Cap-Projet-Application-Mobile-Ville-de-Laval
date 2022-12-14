import * as React from 'react';
import { StyleSheet} from 'react-native'
import { Box, Divider} from "native-base";

import MenusData from '../assets/MenusData.json';
import MenusPlat from '../components/MenusPlat';


class MenusComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { convives, type_menu, menu } = this.props;
    return (
        <Box w="100%" mt="-3" pb="2" style={styles.menuContainer}>
        <Box mt="4" w="100%">
          {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={menu[convives]["Entree"][type_menu]}/> : null }
        </Box>
        <Divider></Divider>

        <Box mt="1" w="100%">
            {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={MenusData[0][convives]["Plat"][type_menu]}/> : null }

            {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={MenusData[0][convives]["Sauce"][type_menu]}/> : null }

            {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={MenusData[0][convives]["Garniture"][type_menu]}/> : null }
        </Box>
        <Divider></Divider>

        <Box mt="1" w="100%">
            {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={MenusData[0][convives]["Fromage"][type_menu]}/> : null }
        </Box>
        <Divider></Divider>

        <Box mt="1" w="100%" style={styles.dessert}>
          <Box mt="1">
            {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={MenusData[0][convives]["Dessert"][type_menu]}/> : null }
          </Box>

          <Box mt="1" mr="2">
            {menu != null && Object.keys(menu).length > 0 ? <MenusPlat plat={MenusData[0][convives]["Divers"][type_menu]}/> : null }
          </Box>
        </Box>

        {menu != null && Object.keys(menu).length > 0 && menu[convives]["Gouter"] != null ? <MenusPlat plat={MenusData[0][convives]["Gouter"][type_menu]}/> : null }
     </Box>
    )
  }
}


const styles = StyleSheet.create({
    menuContainer: {
      backgroundColor: "#F4F5F9",
      zIndex: -1,
      borderRadius: 5
    },
    dessert:{
      flexDirection:"row",
      justifyContent: "space-between"
    },
  })

export default MenusComponent