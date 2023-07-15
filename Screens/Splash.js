import React,{useEffect, useRef} from 'react'
import {View,Image, StyleSheet, Animated, Easing} from 'react-native'

const Splash = ({navigation}) =>{

    const startAnimation = useRef(new Animated.Value(0)).current;
    useEffect(()=>{

        setTimeout(()=>{
            navigation.replace('TalkBackPrompt');
            
            Animated.sequence([
                Animated.timing(
                    startAnimation,{
                        toValue: 100,
                        useNativeDriver: true,
                        easing: Easing.linear,
                        duration: 400,
                    }),    
                    Animated.spring(
                        startAnimation, {
                        toValue: 200,
                        delay: 1000,
                        friction: 1,
                        useNativeDriver: true
                      })
            ]).start();
        },3000)
    },[])
    
    return(
        <View style={styles.body} accessibilityHint={'Splash Screen'}>
            <Animated.View style={styles.animatedView} accessibilityLabel={'Splash Screen'}>
                <Image source={require('../Screens/images/logo.png')}/>
            </Animated.View>
        </View>      
    )
}
export default Splash;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0, 
    },
    animatedView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image: {
       height: 100,
       width: 100,
    }
});
