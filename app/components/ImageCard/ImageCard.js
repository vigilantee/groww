import React, { Component } from 'react';
import {
  FlatList,
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import SearchBar from 'react-native-searchbar';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import getSearchResultsFromAPI from '../../actions/searchImage';

import styles from './styles';
import { Row, Column as Col, Grid } from 'react-native-responsive-grid'


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: [],
      query: 'coffee',
      page: 1
    }
    this.props.getSearchResultsFromAPI(this.state.query, this.state.page);
  };

  onEndReached = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.props.getSearchResultsFromAPI(this.state.query, this.state.page);
    })
  };

  _handleResults = (results) => {
    this.setState({
      query: results,
      page: 1
    }, () => this.props.getSearchResultsFromAPI(this.state.query, this.state.page));
  }

  colInjector = (url) => {
    return (
      <Col size={30} style={styles.col}>
        <Image
          style={styles.image}
          source={{ uri: url }}
        />
      </Col>
    )
  }

  rowInjector = (item, index) => {
    if (index % 3 != 0)
      return;
    return (<Row key={item.key} style={styles.row}>
      {this.colInjector(this.props.urlList[index])}
      {this.colInjector(this.props.urlList[index + 1])}
      {this.colInjector(this.props.urlList[index + 2])}
    </Row>
    )
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            style={{ height: 30, width: 330 }}
            icon={{ type: 'material-community', color: '#86939e', name: 'share' }}
            focusOnLayout={true}
            placeholder="Search..."
            handleSearch={this._handleResults}
          />
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Icon name={"search"} size={27} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {this.props.searchImage.length > 5 && <FlatList
          data={this.props.searchImage}
          initialNumToRender={12}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached}
          renderItem={
            ({ item, index }) => {
              return (this.rowInjector(item, index))
            }}
        />}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchImage: state.searchImage.allSearchResults,
    urlList: state.searchImage.urlList
  };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSearchResultsFromAPI: getSearchResultsFromAPI
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Card);
