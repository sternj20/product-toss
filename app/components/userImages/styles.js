import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    // flex: 1,
    width: 130,
    height: 120,
    marginTop:5,
    marginLeft:10,
  },
  primary: {
    color: 'rgb(116, 70, 195)'
  },
  title: {
    fontSize: 24,
    margin: 20
  },
  votingBar: {
    top: '-50%'
  },
  button: {
    backgroundColor: '#88cc88',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    justifyContent:'center',
  },
  userInfo: {
    flexDirection: 'column'
  },

 headerWrapper: {
    flex: 1,
  },
  headerText: {
    fontSize:40,
    fontWeight:'bold',
    color: 'white',
    textAlign: 'center', // ok
    alignSelf: 'center', // ok
  }
});
