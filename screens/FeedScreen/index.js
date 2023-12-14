import { View, ScrollView, Text as SimpleText } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper';
import axios from './../../utils/baseUrl';
import CustomCard from '../../components/CustomCard';
import all from './../../utils/all.json';

export default function FeedScreen({ navigation }) {
  const [sura, setSura] = useState([])
  useEffect(() => {
    setSura(all.data.surahs)
  }, [])
  return (
    <View>
      <ScrollView>
        {
          sura.map((item, index) => (
            <CustomCard
              key={index}
              name={item.name}
              englishName={item.englishName}
              revelationType={item.revelationType}
              onPressFunction={() => {
                navigation.navigate('Details', {
                  itemId: item.number,
                  ayahs: item.ayahs
                })
              }}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}