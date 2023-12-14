import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomCard from '../../components/CustomCard';
import all from './../../utils/all.json';
import WrapperComponent from '../../components/WrapperComponent';

export default function FeedScreen({ navigation }) {
  const [sura, setSura] = useState([])
  useEffect(() => {
    setSura(all.data.surahs)
  }, [])
  return (
    <WrapperComponent>
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
    </WrapperComponent>
  )
}