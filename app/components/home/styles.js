import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    marginTop:20,
    marginBottom: 200
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
  headerWrapper: {
    flex: 1,
  },
  headerText: {
    fontSize:40,
    fontWeight:'bold',
    color: 'white',
    textAlign: 'center', // ok
    alignSelf: 'center', // ok
  },
  smallButton: {
    width:50,
    height:5,
    flexDirection: 'row'  }
});
