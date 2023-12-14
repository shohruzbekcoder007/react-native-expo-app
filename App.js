// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, HomeScreen, ProfilScreen } from './screens';
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#ccc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerRight: () => (
            <Button icon="account" mode="contained" onPress={
              () => navigation.navigate('Profil', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
          }>
              me
            </Button>
          ),
        })}
      >
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home'}}
          // options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
          options={{ 
            title: 'Details'
          }}
          
        /> */}
        <Stack.Screen
          name="Profil"
          component={ProfilScreen}
          initialParams={{ itemId: 42 }}
          options={({ navigation }) => ({ 
            title: 'Profil',
            headerRight: () => (
              <Button icon="home" mode="contained" onPress={
                () => navigation.navigate('Home', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })
            }>
                Home
              </Button>
            ),
          })}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;