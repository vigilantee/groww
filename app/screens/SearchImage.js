import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from 'react-native-searchbar';

export default class SearchImage extends Component {
  render() {
    return (
      <View>
        <SearchBar
          // eslint-disable-next-line no-return-assign
          ref={(ref) => this.searchBar = ref}
          showOnLoad
        />
      </View>
    );
  }
}
