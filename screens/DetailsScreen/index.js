import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import WrapperComponent from '../../components/WrapperComponent';
import { Audio } from "expo-av"
import axios from 'axios';

const faatiha = [
  {
    "number": 1,
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/1.mp3"
    ],
    "text": "﻿بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
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
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/2.mp3"
    ],
    "text": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
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
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/3.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/3.mp3"
    ],
    "text": "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
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
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/4.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/4.mp3"
    ],
    "text": "مَٰلِكِ يَوْمِ ٱلدِّينِ",
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
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/5.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/5.mp3"
    ],
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
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/6.mp3"
    ],
    "text": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
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
    "audio": "https://cdn.islamic.network/quran/audio/128/ar.alafasy/7.mp3",
    "audioSecondary": [
      "https://cdn.islamic.network/quran/audio/64/ar.alafasy/7.mp3"
    ],
    "text": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
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

  const { itemId } = route.params;
  const sound = useMemo(() => {
    return new Audio.Sound()
  }, [])

  const audiPlayer = async (url) => {
    await sound.unloadAsync()
    await sound.loadAsync({
      uri: url
    })
      try {
          await sound.playAsync()
      } catch (e) {
          console.warn(e)
      }
  }

  const [selectedList, setSelectedList] = useState([])

  useEffect(() => {
    if (itemId) {
      axios.get(`https://api.alquran.cloud/v1/surah/${itemId}/ar.alafasy`).then(response => {
        if (response.data.code == 200) {
          setSelectedList(response.data.data.ayahs)
        }
      }).catch(error => {
        console.warn(error)
      })
    }else{
      setSelectedList(faatiha)
    }

  }, [itemId])

  return (
    <WrapperComponent>
      <ScrollView>
        {
          selectedList.map((item, index) => (
            <Card 
              key={index} 
              style={{ margin: 10 }}
              onPress={() => {audiPlayer(item.audio)}}
            >
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