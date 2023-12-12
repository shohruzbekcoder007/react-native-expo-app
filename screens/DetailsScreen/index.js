import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {

    const { itemId, otherParam } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Feed')} />
      </View>
    );
  }

  export default DetailsScreen