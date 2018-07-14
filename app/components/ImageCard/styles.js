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
    row : {
        paddingTop: '6%',
        paddingBottom: '6%',
        paddingLeft:'6%',
        backgroundColor: '#d3d3d3',
        height: 160
    },
    col : {
        marginRight: 10,
        marginBottom: 10
    },
    columnContainer : {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#ffffff',
        flex:1
    },
  header : {
      height: 60,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  content : {
      flex: 1,
      backgroundColor: '#00ff00'
  },
  image : {
    width : 116,
    height: 140
  },
  icon : {
    color: '#000000',
    fontWeight: 'bold',
    paddingRight: 25
    }
});
