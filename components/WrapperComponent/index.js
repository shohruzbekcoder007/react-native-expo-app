import { View, Text, ImageBackground } from 'react-native'
import image from './../../assets/bgimage.jpg'
import React from 'react'

const WrapperComponent = ({ children }) => {
  return (
    <ImageBackground
      source={image} resizeMode="cover"
    >
      {
        children
      }
    </ImageBackground>
  )
}

export default WrapperComponent