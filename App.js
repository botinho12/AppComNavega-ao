import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen.js";
import DetailsScreen from './screens/DetailsScreen.js';

const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator inicitialRouteName="home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}