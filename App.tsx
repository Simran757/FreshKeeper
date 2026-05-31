import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import RootNavigator from './src/frontend/navigation/RootNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('Dark mode:', isDarkMode);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
export default App;
