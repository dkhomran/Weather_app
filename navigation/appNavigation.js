import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="home"  options={{ headerShown: false }}  component={HomeScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}