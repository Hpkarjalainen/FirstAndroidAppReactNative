import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [euros, setEuros] = useState('')
  const [krona, setKrona] = useState(0)

  const calculate = () => {
    const result = euros.replace(',', '.') * 11.85
    setKrona(result)
  }

  const reset = () => {
    setKrona(0)
    setEuros(0)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.field}>Euros</Text>
      <TextInput
        placeholder='Enter amount in euros'
        keyboardType='decimal-pad'
        onChangeText={text => setEuros(text)}
        style={styles.field}
      />
      <Text style={styles.field}>Krona</Text>
      <Text style={styles.field}>{krona.toFixed(2)}</Text>
      <Button title='Convert Currency' onPress={calculate} />
      <Button title='reset fields' onPress={reset} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  field: {
    marginBottom: 10,
    marginTop: 10,
  }
});
