// import React, { useRef, useState, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity, Image, Modal, Text } from 'react-native';
// import { Camera, useCameraDevices } from "react-native-vision-camera";
// import { ToastAndroid } from 'react-native';

// const ImageCaptioning = ({navigation}) => {

//   //Vision Camera
//   const devices = useCameraDevices();
//   const cameraDevice = devices.back;
//   const cameraRef = useRef(null);
//   const [photo, setPhoto] = useState(null);
//   const [imageSource, setImageSource] = useState('');
//   const [captionModalVisible, setCaptionModalVisible] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);
//   const [cameraPermission, setCameraPermission] = useState(false);

//     // State to force camera component to re-render
//     const [cameraKey, setCameraKey] = useState(0);

//   useEffect(() => {
//       (async () => {
//       const cameraPermissionStatus = await Camera.requestCameraPermission();
//       setCameraPermission(cameraPermissionStatus);

//       setCameraKey(prevKey => prevKey + 1);    
//       })();
//   }, []);

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       // Force camera component to re-render by updating key
//       setCameraKey(prevKey => prevKey + 1);
//     });
//     return unsubscribe;
//   }, [navigation]);

//   console.log(`Camera permission status: ${cameraPermission}`);

//   if (devices == null) {
//       return <Text style={{color: 'red', fontSize: 20}}>Camera not available</Text>;
//   }

//   const closeModal = () => {
//     setApiResponse(null);
//   };

//   useEffect(() => {
//     if (apiResponse) {
//       setCaptionModalVisible(true);
//     }
//   }, [apiResponse]);

//     const capturePhoto = async () => {
//     if (!cameraRef || !cameraRef.current) {
//       console.error('Camera reference is undefined or null');
//       console.log(cameraRef);
//       return;
//     }

//     try {
//       const photo = await cameraRef.current.takePhoto({});
//       setPhoto(photo);
//       setImageSource(photo.path);
//       console.log("Photo path:", photo.path);

//       var imag = {
//         uri: 'file://' + photo.path,
//         type: 'image/jpeg',
//         name: 'photo.jpg',
//       };
//       console.log('Photo captured successfully!', imag);
//       ToastAndroid.show("Photo captured successfully !", ToastAndroid.SHORT);

//       setCaptionModalVisible(true);

//       // Send photo to API
//       const formData = new FormData();
//       formData.append('image', imag);

//       console.log('Photo uploaded successfully!');
//       ToastAndroid.show("Fetching captions from image !", ToastAndroid.SHORT);

//       try {
//         const response = await fetch('http:192.168.100.12:8000/captionapi', {
//           method: 'post',
//           body: formData,
//           headers: {},
//         });

//         console.log("sent");

//         const data = await response.text();
//         console.log("Status", response.status);

//         setApiResponse(JSON.parse(data)['message']);

//       } catch (error) {
//         console.log('Error sending photo to API: ', error);
//       }
//     } catch (error) {
//       console.error('Error capturing photo:', error);
//     }
//   };

 
//   const renderCamera = () => {
//     if (devices && cameraDevice && cameraPermission === 'authorized') {
//         return (
//           <>
//             <Camera
//                 accessibilityLabel="Camera Screen. Touch slightly below to capture photo."
//                 ref={cameraRef}
//                 style={styles.camera}
//                 device={cameraDevice}
//                 isActive={true}
//                 photo={true}
//                 key={cameraKey} // Add key to force re-render
//             /> 
//              <TouchableOpacity style={styles.captureBtn} accessibilityLabel="Capture Button" accessibilityRole='Button' onPress={() => capturePhoto()}>
//               <Image accessibilityLabel="Capture Button" style={styles.cameraIcon} source={require('../Screens/images/capture.png')}/>
//             </TouchableOpacity>
//           </>  
//         ); 
//       }         
//   }

//     return (
//       <View style={styles.container}>
//         {renderCamera()}

//         {apiResponse && (
//           <Modal
//             visible={captionModalVisible}
//             animationType="slide"
//             transparent={true}
//             onRequestClose={closeModal}
//           >
//             <TouchableOpacity
//               style={styles.modalContainer}
//               activeOpacity={1}
//               onPress={closeModal} // Close the modal when clicked outside
//             >
//               <View style={styles.modalContent}>
//                 <Text style={styles.captionHead}>{`Caption for image is:`}</Text>
//                 <Text style={styles.captionText}>{`${apiResponse}`}</Text>
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         )}
//       </View>
//     );
//     };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   camera: {
//     height: 550,
//     width: 550,
//   },
//   captureBtn: {
//     height: 75,
//     width: 400,
//     backgroundColor: '#FFF',
//     marginTop: 0,
//   },
//   cameraIcon: {
//     height: 70,
//     alignSelf: 'center',
//     width: 80,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.85)',
//   },
//   modalContent: {
//     backgroundColor: '#FFF',
//     padding: 40,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   captionHead: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#2b4292',
//   },
//   captionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#000',
//   },
// });


// export default ImageCaptioning;







//new

import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Modal, Text, Pressable } from 'react-native';
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { ToastAndroid } from 'react-native';

const ImageCaptioning = ({ navigation }) => {
  // Vision Camera
  const devices = useCameraDevices();
  const cameraDevice = devices.back;
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [imageSource, setImageSource] = useState('');
  const [captionModalVisible, setCaptionModalVisible] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(false);

  // State to force camera component to re-render
  const [cameraKey, setCameraKey] = useState(0);

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);

      setCameraKey(prevKey => prevKey + 1);
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Force camera component to re-render by updating key
      setCameraKey(prevKey => prevKey + 1);
    });
    return unsubscribe;
  }, [navigation]);

  console.log(`Camera permission status: ${cameraPermission}`);

  if (devices == null) {
    return <Text style={{ color: 'red', fontSize: 20 }}>Camera not available</Text>;
  }

  const closeModal = () => {
    setApiResponse(null);
  };

  useEffect(() => {
    if (apiResponse) {
      setCaptionModalVisible(true);
    }
  }, [apiResponse]);

  const capturePhoto = async () => {
    if (!cameraRef || !cameraRef.current) {
      console.error('Camera reference is undefined or null');
      console.log(cameraRef);
      return;
    }

    try {
      const photo = await cameraRef.current.takePhoto({});
      setPhoto(photo);
      setImageSource(photo.path);
      console.log("Photo path:", photo.path);

      var imag = {
        uri: 'file://' + photo.path,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      console.log('Photo captured successfully!', imag);
      ToastAndroid.show("Photo captured successfully !", ToastAndroid.SHORT);

      setCaptionModalVisible(true);

      // Send photo to API
      const formData = new FormData();
      formData.append('image', imag);

      console.log('Photo uploaded successfully!');
      ToastAndroid.show("Fetching captions from image !", ToastAndroid.SHORT);

      try {
        const response = await fetch('http:192.168.100.12:8000/captionapi', {
          method: 'post',
          body: formData,
          headers: {},
        });

        console.log("sent");

        const data = await response.text();
        console.log("Status", response.status);

        setApiResponse(JSON.parse(data)['message']);

      } catch (error) {
        console.log('Error sending photo to API: ', error);
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  const renderCamera = () => {
    if (devices && cameraDevice && cameraPermission === 'authorized') {
      return (
          <Camera
            accessibilityLabel="Camera Screen. Touch slightly below to capture photo."
            ref={cameraRef}
            style={styles.camera}
            device={cameraDevice}
            isActive={true}
            photo={true}
            key={cameraKey}
          />
      );
    }
  }

  return (
    <View style={styles.container}>
      {renderCamera()}

        <View style={styles.captureBtnContainer}>
          <TouchableOpacity style={styles.captureBtn} accessibilityLabel="Capture Button" accessibilityRole='Button' onPress={capturePhoto}>
            <View style={styles.captureBtnOuter}>
              <View style={styles.captureBtnInner} />
            </View>
          </TouchableOpacity>
        </View>

      {apiResponse && (
        <Modal
          visible={captionModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={closeModal} // Close the modal when clicked outside
          >
            <View style={styles.modalContent}>
              <Text style={styles.captionHead}>{`Caption for image is:`}</Text>
              <Text style={styles.captionText}>{`${apiResponse}`}</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  captureBtnContainer: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  captureBtnOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFF',
  },
  captureBtnInner: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionHead: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2b4292',
  },
  captionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
});

export default ImageCaptioning;
