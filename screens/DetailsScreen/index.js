import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import WrapperComponent from '../../components/WrapperComponent';

const faatiha = [
  {
    "number": 1,
    "text": "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "numberInSurah": 1,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  },
  {
    "number": 2,
    "text": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "numberInSurah": 2,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  },
  {
    "number": 3,
    "text": "الرَّحْمَٰنِ الرَّحِيمِ",
    "numberInSurah": 3,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  },
  {
    "number": 4,
    "text": "مَالِكِ يَوْمِ الدِّينِ",
    "numberInSurah": 4,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  },
  {
    "number": 5,
    "text": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "numberInSurah": 5,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  },
  {
    "number": 6,
    "text": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    "numberInSurah": 6,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  },
  {
    "number": 7,
    "text": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    "numberInSurah": 7,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
  }
]

function DetailsScreen({ route, navigation }) {

  const { itemId, ayahs } = route.params;

  const [selectedList, setSelectedList] = useState([])

  useEffect(() => {
    if(ayahs){
      setSelectedList(ayahs)
    }else{
      setSelectedList(faatiha)
    }
    
  }, [])

  return (
    <WrapperComponent>
      <ScrollView>
        {
          selectedList.map((item, index) => (
            <Card key={index} style={{ margin: 10 }} >
              <Card.Content>
                <Text style={{ color: "green", fontSize: 26 }}>{item.text}</Text>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
    </WrapperComponent>
  );
}

export default DetailsScreen