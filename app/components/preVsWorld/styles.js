import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 400,
    marginTop:20,
    marginBottom: 80
  },
  primary: {
    color: 'rgb(116, 70, 195)'
  },
  header: {
    fontSize: 30,
    color: 'blue'

  },
  votingBar: {
    top: '-50%'
  },
  bars: {
    position: 'absolute',
    right: 10,
    alignItems: 'flex-end',
    width: '22%',
  },
  collapse: {
    backgroundColor: 'white',
  },
  submissionGallery: {
    backgroundColor: '#f4511e',
    height: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
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
  imageUserInfo:{
    flexDirection: 'row'
  },
  imageUserName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'teal',
    alignSelf: 'center'
  },
});
