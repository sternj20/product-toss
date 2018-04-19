import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "60%"
    },
    user: {
        flexDirection: "row"
    },
    button: {
        width: '40%',
        marginLeft: 20
    },
    userHeader: {
        fontSize: 30
    },
    singleImageHeader: {
        flexDirection: "row"
    },
    singleImageHeadText: {
        fontSize: 20,
        color: "teal",
        fontWeight: "bold",
        marginLeft: 10
    },
    headerWrapper: {    
        flex: 1
    },
    commentContent: {
        marginLeft: 20
    },
    commentUser: {
        fontSize: 20,
        color: "teal",
        fontWeight: "bold"
    },
    comments: {
        flexDirection: "row"
    },
    commentText: {
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 10
    },
    headerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign: "center", // ok
        alignSelf: "center" // ok
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
    justifyContent:'center',
    },
    bars: {
        position: "absolute",
        right: 10,
        alignItems: "flex-end",
        width: "22%"
    },
});