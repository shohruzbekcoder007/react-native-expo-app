import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../FeedScreen';
import MessagesScreen from '../MessagesScreen';
import DetailsScreen from '../DetailsScreen';
import { Ionicons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


function HomeScreen({ navigation }) {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false 
      }}>
        <Tab.Screen 
          name="Feed" 
          component={FeedScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Messages" 
          component={MessagesScreen}
          options={{
            tabBarLabel: 'Messges',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="message" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Details" 
          component={DetailsScreen} 
          initialParams={{ itemId: 42 }}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-details" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

export default HomeScreen