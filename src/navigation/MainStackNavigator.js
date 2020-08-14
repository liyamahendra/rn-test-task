import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Profile from '../screens/Profile'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#ffffff'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#000000',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Test' }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ route }) => ({
            title: route.params.name
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator