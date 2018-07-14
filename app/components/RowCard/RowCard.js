import React, { PureComponent } from "react";
import { View } from "react-native";
import styles from "./styles";

class RowCard extends PureComponent {
    cardInject = () => {
        return (
          <View style={styles.columnContainer}>
          </View>
        );
      }

  rowInject = () => {
    let cards = [0,1,2];
    // let data = this.props.data.slice(this.props.offset, this.props.offset+3)
    // this.props.data.map((e,index=5)=>{console.log("ye index hai bc..///???..", index)})
    // this.props.data.forEach((element, index) => {
    //     console.log("ye inde hai bc....", index);
    // });
    return (
      <View style={styles.rowContainer}>
      {cards.map(()=>
        this.cardInject()
      )}
      </View>
      );
    }

  render() {
      console.log('aaya bhai aaya .....///.....', this.props.data)
    return (
        this.rowInject()
    );
  }
}

export default RowCard;
