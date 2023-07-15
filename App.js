import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Screens/Splash'
import Home from './Screens/Home'
import TalkBackPrompt from './Screens/TalkBackPrompt'
import Header from './Screens/Header'
import Headers from './Screens/Headers'

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

    <Stack.Screen
      name="TalkBackPrompt"
      component={TalkBackPrompt}
      options={
                {
                  // title: 'VISION FOR BLINDS',
                  // headerTintColor: '#2b4292',
                  // headerTitleAlign: 'center',
                  // headerBackVisible: false,
                  // headerTitleStyle: {
                  //   fontSize: 16,
                  //   fontWeight: 'bold',
                  // },             
                 header: () => (
                   <Header />
                   ),

                // headerLeft: () => <Header/>
                }
              }
    />

      <Stack.Screen
        name="Home"
        component={Home}
        options={
          {
            header: () => (
              <Headers />
              ),
          }
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;
