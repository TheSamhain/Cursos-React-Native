import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

/* StyleSheet */
const style = StyleSheet.create({
    container: {
        marginTop: 26,
        backgroundColor: '#4287f5',

        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        color: '#FFFFFF',
    }
});

export default Header;