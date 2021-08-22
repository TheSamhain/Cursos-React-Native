import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default Line = ({ label = "", content  = "-"}) => {
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label, label.length > 8 ? styles.longLabel : null]}>{label}</Text>
            <Text style={[styles.cell, styles.content]}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderBottomWidth: 1,
        // borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        flex: 3
    },

    longLabel: {
        fontSize: 12
    }
});
