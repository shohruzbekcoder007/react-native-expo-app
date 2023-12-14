import * as React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import CustomCard from '../../components/CustomCard';
import { Card } from 'react-native-paper';

function DetailsScreen({ route, navigation }) {

  const { itemId, ayahs } = route.params;

  return (
    <View>
      <ScrollView>
        {
          ayahs.map((item, index) => (
            <Card key={index} style={{ margin: 10 }} >
              <Card.Content>
                <Text style={{ color: "green", fontSize: 26 }}>{item.text}</Text>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
    </View>
  );
}

export default DetailsScreen