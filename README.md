# TurboModule Calculator - React Native

## Overview
Welcome to the TurboModule Calculator project! This project is a React Native module, written in TypeScript, designed to perform native calculations on Android and return the results to the React Native frontend. The goal of this module is to leverage the performance benefits of TurboModules in React Native to handle computations natively.

## Features
- Simples Native calculations on Android
- Fast and efficient communication between native code and React Native
- Types using typescript

## Installation
Since the module is not available on npm, you need to add it directly from the repository.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/turbo-module-calculator.git
   cd turbo-module-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Build the library:**
   ```bash
   cd android
   ```
   ```bash
   ./gradlew generateCodegenArtifactsFromSchema
   ```

4. **Add the module to your project:**
   In your React Native project, add the path to the cloned repository in your `package.json`:
   ```json
   "dependencies": {
     "turbo-module-calculator": "file:../path-to-your-cloned-repo"
   }
   ```

5. **Build the project:**
   For Android:
   ```bash
   npx react-native run-android
   ```

## Usage
To use the TurboModule Calculator in your React Native project, you can follow the example below:

```typescript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, useColorScheme} from 'react-native';
import RTNCalculator from 'turbo-module-calculator/js/NativeCalculator';
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
```
## Post in LinkedIn

[Link](https://www.linkedin.com/posts/ednilsoncardosodossantos_turbo-modules-to-react-native-activity-7224535842080382978-_QiF?utm_source=share&utm_medium=member_desktop)

## Contact
For any inquiries or further information, you can reach out to:

- **LinkedIn:** [Ednilson Cardoso dos Santos](https://www.linkedin.com/in/ednilsoncardosodossantos/)
- **Email:** Ednilsonsantos43@gmail.com
