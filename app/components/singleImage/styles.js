import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "65%"
    },
    button: {
        backgroundColor: "#88cc88",
        height: 40,
        margin: 10,
        borderRadius: 5,
        padding: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    user: {
        flexDirection: "row"
    },
    userHeader: {
        fontSize: 30
    },
    singleImageHeader: {
        flexDirection: "row"
    },
    singleImageHeadText: {
        fontSize: 20,
        color: 'teal',
        fontWeight: 'bold',
        marginLeft: 10
    },
    headerWrapper: {
        flex: 1
    },
    commentContent: {
        marginLeft: 20,
    },
    commentUser: {
        fontSize: 20,
        color: 'teal',
        fontWeight: 'bold',
    },
    comments: {
        flexDirection: 'row'
    },
    comment: {
        flexDirection: 'row',
        flexWrap:'wrap',

    },
    commentText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10
    },
    headerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign: "center", // ok
        alignSelf: "center" // ok
    },
  bars: {
    position: 'absolute',
    right: 10,
    alignItems: 'flex-end',
    width: '22%',
  },
});