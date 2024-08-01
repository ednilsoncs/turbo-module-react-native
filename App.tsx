/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, useColorScheme} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onNativeSum = async () => {
    const value = await RTNCalculator?.sub(1, 6);

    console.log(value);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button onPress={onNativeSum} title="PUSH TO SUM" />
    </SafeAreaView>
  );
}

export default App;
