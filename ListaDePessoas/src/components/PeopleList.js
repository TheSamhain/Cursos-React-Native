import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
    const { peoples, onPressItem } = props;  // Este é o mesmo que const peoples = props.peoples  em ES6

    return (
        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )}
            keyExtractor={item => item.name.first}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;