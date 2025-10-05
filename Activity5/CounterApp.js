import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const decHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    
  }



  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={decHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 24,
    marginBottom: 20,
  },
});