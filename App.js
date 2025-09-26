import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ColorChanger from './Activity5/ColorChanger';
import CounterApp from './Activity5/CounterApp';


import Messenger from './MidAct1/Messenger';
import Comment from './MidAct1/Comment';

export default function App() {
  return (
    <View style={styles.container}>

  <Messenger/>
  <Comment/>

   <ColorChanger/>
  <CounterApp/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
