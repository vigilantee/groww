import React, {Component} from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import SearchBar from 'react-native-searchbar';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import getSearchResultsFromAPI from '../../actions/searchImage';
import Icon from "react-native-vector-icons/Feather";

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        arrayOfRows: [0,1, 2, 3]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('populated results are ......', this.nextProps.searchImage);
  }

  cardInject = () => {
    return (
      <View style={styles.columnContainer}>
      </View>
    );
  }

  rowInject = () => {
    let cards = [0,1,2];
    return (
      <View style={styles.rowContainer}>
      <FlatList
        data={cards}
        renderItem={()=>this.cardInject()}
      />
      </View>
      );
  }

  renderImages = () => {
    <FlatList
      data={this.state.arrayOfRows}
      renderItem={()=>this.rowInject()}
    />
  }

  renderSearchBar = () => {
    <TouchableOpacity onPress={() => this.searchBar.show()} >
      <Icon name={"search"} size ={20} style = {styles.icon}/>
    </TouchableOpacity>
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          style={{ height: 30, width: 330 }}
          icon = {{type: 'material-community', color: '#86939e', name: 'share' }}
          focusOnLayout={true}
        />
      <TouchableOpacity onPress={() => this.searchBar.show()} >
        <Icon name={"search"} size ={20} style = {styles.icon}/>
      </TouchableOpacity>
      <View  style={styles.container}>
        {this.renderImages()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    searchImage: state.searchImage
  };
 }
 
 const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSearchResultsFromAPI: getSearchResultsFromAPI
  }, dispatch);
 }
 
 export default connect(mapStateToProps,matchDispatchToProps)(Card);
