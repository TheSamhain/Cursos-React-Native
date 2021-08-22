import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { activateKeepAwake } from 'expo-keep-awake';

import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props); // Isto chamará o construtor padrão dele

    this.state = {
      peoples: [],
      loading: true
    }

    activateKeepAwake();
  }

  componentDidMount() {
    this.setState({ loading: true })
    setTimeout(() => {
      axios // Chama por web Service no método get
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false
          })
        })
    }, 1500);
  }

  render() {

    return (
      <View >
        {this.state.loading
          ? <ActivityIndicator size="large" color='#6CA2F7' />
          : null
        }
         <PeopleList
            peoples={this.state.peoples}
            onPressItem={(pageParams) => this.props.navigation.navigate('PeopleDetail', pageParams)} />
      </View>
    );
  }
}
