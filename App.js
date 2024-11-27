/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-paper';
import network from './App/services/network';
import { Provider } from 'react-redux';
import createStore from './App/store';
import { ThemeProvider, useTheme } from './theme/themeContext';
const MainApp = () => {
  const { store, persistor } = createStore();
  network.setupInterceptors();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggleTheme();
  };
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}
      >
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <Text
          style={{
            color: theme.colors.text.primary,
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          MED VALLET
        </Text>
        <Text
          style={{
            color: theme.colors.primary.main,
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          MED VALLET
        </Text>
        <Text
          style={{
            color: theme.colors.secondary.main,
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          MED VALLET
        </Text>
        <Text
          style={{
            color: theme.colors.secondary.main,
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          MED VALLET
        </Text>
      </View>
    </Provider>
  );
};
const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};
export default App;
