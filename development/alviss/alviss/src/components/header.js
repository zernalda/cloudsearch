//import library to help create component
import React from 'react';
import {Text, View} from 'react-native';

//create component
const Header = () => { 
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> Alviss </Text>
        </View>
    );
};

// create css
const styles = {
    viewStyle: {
        backgroundColor : 'blue',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        padding:30
    }
 
}
// make the component available to other parts of the app
export default Header;
