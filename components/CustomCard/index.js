import { Card, Text } from 'react-native-paper';
import { Text as SimpleText } from 'react-native'
import React from 'react'

const CustomCard = ({ name, englishName, revelationType, onPressFunction }) => {
    return (
        <Card style={{ margin: 10 }} onPress={onPressFunction}>
            <Card.Content>
                <Text variant="titleLarge" style={{textAlign: "right", fontSize: 26}}>{name}</Text>
                <Text variant="bodyMedium" style={{textAlign: "right"}}>{englishName}</Text>
                <SimpleText style={{ color: "green", fontWeight: 800, textAlign: "right" }}>{revelationType}</SimpleText>
            </Card.Content>
        </Card>
    )
}

export default CustomCard