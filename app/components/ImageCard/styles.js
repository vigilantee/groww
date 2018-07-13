import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ff0000'
  },
  rowContainer : {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#000000',
    flex:1
  },
  columnContainer : {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#ffffff',
    flex:1
  },
  image : {
    width : '50px',
    height: '50px'
  },
  icon : {
    marginRight : 18,
    marginTop : 7,
    color: '#BCC4D1',
    fontWeight: 'bold',
    marginLeft: 8
    }
});
