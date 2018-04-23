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
        backgroundColor: "#D3D3D3",
        width: "40%",
        height: 35,
        marginLeft: 20,
        flexDirection: 'row',
                alignItems: "center",
        justifyContent: "center"
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
        marginLeft: 10,
        flex: 1,
        flexWrap: "wrap"
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
    },
    optionText: {
        color: "#f4511e",
        fontSize: 18
    },
    iconContainer: {
        position: 'absolute',
        left:0
    },
    nominate: {
        textAlign: 'center',
        alignSelf: 'center',

    },
    input: {
            borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
    },
    headerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign: "center", // ok
        alignSelf: "center" // ok
    },
    options: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    bars: {
        position: "absolute",
        right: 10,
        alignItems: "flex-end",
        width: "22%",
        zIndex: 2
    }
});