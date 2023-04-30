import { Icon } from "react-native-elements"
import MainPage from "./MainPage"
import Departamentos from "./Departamentos"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Presidentes from "./Presidentes"

const Tab = createBottomTabNavigator()

function BarraNav(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name = "Inicio"
            component={MainPage}
            options={{
                TabBarIcon:({color, size}) => (
                    <Icon name="heart" type="font-awesome" color={color} size={size}/>
                ),
            }}/>

<Tab.Screen
            name = "Departamentos"
            component={Departamentos}
            options={{
                TabBarIcon:({color, size}) => (
                    <Icon name="map" type="font-awesome" color={color} size={size}/>
                ),
            }}/>

<Tab.Screen
            name = "Presidentes"
            component={Presidentes}
            options={{
                TabBarIcon:({color, size}) => (
                    <Icon name="book" type="font-awesome" color={color} size={size}/>
                ),
            }}/>


            
        </Tab.Navigator>
    )

}

export default BarraNav