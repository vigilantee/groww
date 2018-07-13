import React, {Component} from 'react';
import { View, Text } from 'react-native';
// import SearchBar from 'react-native-searchbar';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import getSearchResultsFromAPI from '../../actions/searchImage';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        arrayOfRows: [0,1, 2, 3]
    }
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
        {cards.map(()=>
          this.cardInject()
        )}
      </View>
      );
  }

  render() {
    this.props.getSearchResultsFromAPI('https://jsonplaceholder.typicode.com/posts/1');
    return (
      <View style={styles.container}>
        {this.state.arrayOfRows.map( () =>
          this.rowInject()
          )}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    storeTeam: state.teamReducer
  };
 }
 
 const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSearchResultsFromAPI: getSearchResultsFromAPI
  }, dispatch);
 }
 
 export default connect(mapStateToProps,matchDispatchToProps)(Card);
