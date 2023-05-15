import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const API_KEY = '02ff818e6cc0463aa4f94428231405';

const App = () => {
  const [city, setCity] = useState('rourkela');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, [city]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOuL RISHi</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter city name"
        placeholderTextColor="#aaa"
      />
      {weatherData ? (
        <>
          <Text style={styles.text}>City: {weatherData.location && weatherData.location.name}, {weatherData.location && weatherData.location.country}</Text>
          <Text style={styles.text}>Temperature: {weatherData.current && weatherData.current.temp_f && `${weatherData.current.temp_f}°F /`} {weatherData.current && weatherData.current.temp_c && `${weatherData.current.temp_c}°C`}</Text>
          <Text style={styles.text}>Description: {weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading weather data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcd307',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
});

export default App;
