import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Pressable } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardComponent = ({ title, content, imageSource, onPress }) => (

    <View accessibilityLabel='Home Screen'> 
        <Pressable onPressIn={onPress}>
            <Card style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image source={imageSource} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Title style={styles.title}>{title}</Title>
                            <Paragraph>{content}</Paragraph>
                        </View>
                </View>
            </Card>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 35,
        padding: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        margin: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2b4292',
    },
});

export default CardComponent;
