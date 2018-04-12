import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 250,
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
});
