//import library to help create component

import React from 'react';
import {Text, AppRegistry} from 'react-native';
// component nastig
import Header from './src/components/header';


//create component
const App = () => {
    return (
        <Header />
    );  
};

// render it to the device
//hey please take this component and shop up to uor device
 AppRegistry.registerComponent('alviss', () => App);

 