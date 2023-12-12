import { View, ScrollView, Text as SimpleText } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function FeedScreen() {
    const [sura, setSura] = useState([])
    useEffect(() => {
        axios.get('http://api.alquran.cloud/v1/quran/1').then(response => {
            if(response.data.code == 200){
                setSura(response.data.data.surahs)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])
  return (
    <View>
      <ScrollView>
               {
                  sura.map((item, index) => (
                     <Card key = {index} style={{margin: 10}}>
                     <Card.Content>
                       <Text variant="titleLarge">{item.name}</Text>
                       <Text variant="bodyMedium">{item.englishName}</Text>
                       <SimpleText variant="bodyMedium" stye={{color: "red", fontWeight: 800}}>{item.revelationType}</SimpleText>
                     </Card.Content>
                   </Card>
                  ))
               }
            </ScrollView>
    </View>
  )
}