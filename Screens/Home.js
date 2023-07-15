import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageCaptioning from './ImageCaptioning';
import OCRDetection from './OCRDetection';
import ColorDetection from './ColorDetection';
import CurrencyDetection from './CurrencyDetection';

const Tab = createMaterialTopTabNavigator();

const Home = () => {

    return (
        <SafeAreaView style={{flex: 1}}>

            <Tab.Navigator tabBarPosition='bottom'>
                <Tab.Screen
                    name="Image Captioning"
                    component={ImageCaptioning}
                    options={{
                        tabBarAccessibilityLabel: 'Image Captioning',
                        tabBarActiveTintColor: '#2b4292',
                        tabBarStyle:{
                            backgroundColor: '#FFF',
                        },
                        tabBarLabelStyle: {
                            fontSize: 8,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            marginBottom: -5,
                            marginTop: -8,
                            marginLeft: -5,
                        },
                        tabBarIndicatorStyle: {
                            height: 0,
                            borderRadius: 10,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            top: 0,
                            backgroundColor: '#2b4292'
                        },
                        tabBarIcon: () => (
                            <Image source={require('../Screens/images//captioning.png')} style={{ width: 15, height: 15 }} />
                          ),
                    }}
                    />
                <Tab.Screen
                    name="Color Detection"
                    component={ColorDetection}
                    options={{
                        tabBarAccessibilityLabel: 'Color Detection',
                        tabBarActiveTintColor: '#2b4292',
                        tabBarStyle:{
                            backgroundColor: '#FFF',
                        },
                        tabBarLabelStyle: {
                            fontSize: 8,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            marginBottom: -5,
                            marginTop: -8,
                            marginLeft: -5,
                        },
                        tabBarIndicatorStyle: {
                            height: 0,
                            borderRadius: 10,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            top: 0,
                            backgroundColor: '#2b4292'
                        },
                        tabBarIcon: () => (
                            <Image source={require('../Screens/images//color.png')} style={{ width: 15, height: 15 }} />
                        ),
                    }}
                    />
                <Tab.Screen
                    name="OCR Detection"
                    component={OCRDetection}
                    options={{
                        tabBarAccessibilityLabel: 'OCR Detection',
                        tabBarActiveTintColor: '#2b4292',
                        tabBarStyle:{
                            backgroundColor: '#FFF',
                        },
                        tabBarLabelStyle: {
                            fontSize: 8,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            marginBottom: -5,
                            marginTop: -8,
                            marginLeft: -5,
                        },
                        tabBarIndicatorStyle: {
                            height: 0,
                            borderRadius: 10,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            top: 0,
                            backgroundColor: '#2b4292'
                        },
                        tabBarIcon: () => (
                            <Image source={require('../Screens/images//ocr.png')} style={{ width: 15, height: 15 }} />
                        ),

                    }}
                    />
                <Tab.Screen
                    name="Currency Detection"
                    component={CurrencyDetection}
                    options={{
                        tabBarAccessibilityLabel: 'Currency Detection',
                        tabBarActiveTintColor: '#2b4292',
                        tabBarStyle:{
                            backgroundColor: '#FFF',
                        },
                        tabBarLabelStyle: {
                            fontSize: 8,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            marginBottom: -5,
                            marginTop: -8,
                            marginLeft: -5,
                        },
                        tabBarIndicatorStyle: {
                            height: 0,
                            borderRadius: 10,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            top: 0,
                            backgroundColor: '#2b4292'
                        },
                        tabBarIcon: () => (
                            <Image source={require('../Screens/images//pakistani.png')} style={{ width: 15, height: 15 }} />
                        ),

                    }}
                    />
            </Tab.Navigator>

        </SafeAreaView>
    )
};

export default Home;

const styles = StyleSheet.create({
});




