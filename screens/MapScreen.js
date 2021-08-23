import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationCard from '../components/NavigationCard';
import RideOptionCard from '../components/RideOptionCard';


const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigationCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
