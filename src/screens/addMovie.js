// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   Alert,
// } from 'react-native';

// export default class App extends Component {
//   // initial state
//   state = {
//     isVisible: false,
//   };

//   // hide show modal
//   displayModal(show) {
//     this.setState({isVisible: show});
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.displayModal(true);
//           }}>
//           <Text style={styles.buttonText}>Show Modal</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     display: 'flex',
//     height: 60,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     backgroundColor: '#2AC062',
//     shadowColor: '#2AC062',
//     shadowOpacity: 0.5,
//     shadowOffset: {
//       height: 10,
//       width: 0,
//     },
//     shadowRadius: 25,
//   },
//   closeButton: {
//     display: 'flex',
//     height: 60,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FF3974',
//     shadowColor: '#2AC062',
//     shadowOpacity: 0.5,
//     shadowOffset: {
//       height: 10,
//       width: 0,
//     },
//     shadowRadius: 25,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//   },
//   image: {
//     marginTop: 150,
//     marginBottom: 10,
//     width: '100%',
//     height: 350,
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 30,
//     padding: 40,
//   },
//   closeText: {
//     fontSize: 24,
//     color: '#00479e',
//     textAlign: 'center',
//   },
// });
