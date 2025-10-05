import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ColorChanger from './Activity5/ColorChangerApp';  
import CounterApp from './Activity5/CounterApp';  

// Remove import "./index";

export default function App() {
  return (
    <View style={styles.container}>
      <ColorChanger />
      <CounterApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
