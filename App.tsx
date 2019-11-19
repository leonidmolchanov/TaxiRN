/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import PrimaryScreen from './src/screens/primary'
import EStyleSheet from "react-native-extended-stylesheet";
import {rem} from "./src/styles/remStyles";
// Стиль для scrollView
EStyleSheet.build({
  '@media ios': {
    $rem: rem,
    $remJsx: rem,
  },
  '@media android': {
    $rem: rem,
    $remJsx: rem,
  },
});
const App = () => {
  useEffect(() => {
  });

  return (
      <PrimaryScreen />
  );
};


export default App;

