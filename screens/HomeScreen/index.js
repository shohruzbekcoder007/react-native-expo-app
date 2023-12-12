import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../FeedScreen';
import MessagesScreen from '../MessagesScreen';

const Tab = createBottomTabNavigator();


function HomeScreen({ navigation }) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
      </Tab.Navigator>
    );
  }

export default HomeScreen