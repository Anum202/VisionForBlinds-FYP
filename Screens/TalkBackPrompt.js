// import React, { useEffect, useState } from 'react';
// import { AccessibilityInfo, Alert, Linking, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// const TalkBackPrompt = ({navigation}) => {
//   const [isTalkBackEnabled, setIsTalkBackEnabled] = useState(false);

//   useEffect(() => {
//     AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => setIsTalkBackEnabled(isEnabled));
//   }, []);

//   if (!isTalkBackEnabled) {

//       Alert.alert(
//                 'Talkback Status :',
//                 `Talkback is ${isTalkBackEnabled ? 'Enabled' : 'Disabled'}.\n\nPress OK button slightly below on the right to continue using the app.`,
//                 [
//                   {
//                     text: 'OK',
//                   },
//                 ],
//                 { cancelable: false }
//               );
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>
//           Welcome to "VISION FOR BLINDS". We believe in creating a world where everyone has access to information and technology. {"\n\n"}To ensure that our app is accessible to all users, we recommend enabling TalkBack on your device. {"\n\n"}TalkBack is a built-in screen reader that helps users with visual impairments navigate their devices and access content. By enabling TalkBack, you'll be able to fully enjoy our app's features and functionalities.
//         </Text>
//         <TouchableOpacity style={styles.btn} onPress={() => Linking.openSettings()}>
//           <Text style={styles.btnText}>Enable TalkBack</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   else{
//     Alert.alert(
//         'Talkback Status :',
//         `Talkback is ${isTalkBackEnabled ? 'Enabled' : 'Disabled'}.\n\nPress OK button slightly below on the right to continue using the app.`,
//         [
//         {
//             text: 'OK',
//             onPress: () => navigation.navigate('Home')
//         },
//         ],
//         { cancelable: false }
//         );
//   }

// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#FFF',
//     },
//     text: {
//       color: '#000',
//       fontSize: 18,
//       margin: 40,
//       fontStyle: 'italic',
//     },
//     btn: {
//       width: 250,
//       height: 50,
//       backgroundColor: '#2b4292',
//       color: '#FFF',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginLeft: 50,
//       borderRadius: 40,     
//     },
//     btnText: {
//       fontSize: 19,
//       color: '#FFF',
//     }
// });

// export default TalkBackPrompt;



import React, { useEffect, useState } from 'react';
import { AccessibilityInfo, Text,  View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import CardComponent from './Cards'

const TalkBackPrompt = ({navigation}) => {
  const [isTalkBackEnabled, setIsTalkBackEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => setIsTalkBackEnabled(isEnabled));
    setModalVisible(true);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const navigateToCaptioning = () => {
    navigation.navigate('Home', { screen: 'Image Captioning' });
  };

  const navigateToColor = () => {
    navigation.navigate('Home', { screen: 'Color Detection' });
  };

  const navigateToOCR = () => {
    navigation.navigate('Home', { screen: 'OCR Detection' });
  };

  const navigateToCurrency = () => {
    navigation.navigate('Home', { screen: 'Currency Detection' });
  };

  return (
    <View style={styles.container}>
      <CardComponent
        accessibilityLabel="Image Captioning"
        accessibilityRole="Button"
        title="Image Captioning"
        content="This module will generate captions from captured image."
        imageSource={require('./images/captioning.png')}
        onPress= {navigateToCaptioning}
      />
      <CardComponent
        accessibilityLabel="Color Detection"
        title="Color Detection"
        content="This module will detect colors from captured image."
        imageSource={require('./images/color.png')}
        onPress= {navigateToColor}
      />
      <CardComponent
        accessibilityLabel="OCR Detection"
        title="OCR Detection"
        content="This module will extract text from captured image."
        imageSource={require('./images/ocr.png')}
        onPress= {navigateToOCR}
      />
      <CardComponent
        accessibilityLabel="Currency Detection"
        title="Currency Detection"
        content="This module will detect amount of Pakistani currency notes. "
        imageSource={require('./images/pakistani.png')}
        onPress= {navigateToCurrency}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
              {!isTalkBackEnabled ? (
                <>
                  <Text style={styles.modalHead}>Talkback Status</Text>
                  <Text style={styles.modalText}>TalkBack is disabled. Please enable TalkBack to continue.</Text>
                </>
                
                )  : (
                <>
                  <Text style={styles.modalHead}>Talkback Status</Text>
                  <Text style={styles.modalText}>TalkBack is enabled. Press OK button slightly below to continue using the app.</Text>
                </>
              )}
          <TouchableOpacity style={styles.btn} onPress={closeModal} accessibilityLabel="OK Button" accessibilityRole='Button'>
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
  </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    btn: {
      width: 300,
      height: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,   
    },
    btnText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2b4292',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
    },
    modalContent: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalHead: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#2b4292',
    },
    modalText: {
      fontSize: 17,
      marginBottom: 20,
      color: '#000',
    },
});

export default TalkBackPrompt;