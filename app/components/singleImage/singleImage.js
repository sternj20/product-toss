import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { deleteImage } from "../../actions/items/items";
import { seeFriendsData } from "../../actions/social/social";
import { navigateToComponent } from "../../utils/helpers.js";

class singleImage extends Component {
    componentDidMount() {
        this.props.navigation.setParams({
            singleImage: this.props.singleImage
        });
    }

    //USE THIS IN PREVSWORLD SOMEHOW
    static navigationOptions = ({ navigation }) => {
        const navigationHelper = params => {
            if (params.otherUser) {
                navigation.dispatch(
                    seeFriendsData(navigation, params.otherUser)
                );
            } else {
                navigateToComponent(navigation, params.user, "userImages");
            }
        };
        const { params } = navigation.state;
        return {
            headerStyle: {
                backgroundColor: "#f4511e",
                height: 70
            },
            headerTitle: () => (
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigationHelper(params)}>
                        <Text adjustsFontSizeToFit style={styles.headerText}>
                            {params.otherUser
                                ? params.otherUser.userName
                                : params.user.email.split("@")[0]}
                        </Text>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: (
                <View style={styles.headerWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        style={{ flexDirection: "row" }}
                    >
                        <MaterialIcons name="home" size={50} color="white" />
                    </TouchableOpacity>
                </View>
            )
        };
    };

    render() {
        return (
            <View>
                <Image
                    source={{ uri: this.props.singleImage.url }}
                    style={styles.image}
                />
                <View style={styles.singleImageHeader}>
                    <FontAwesome name="diamond" color="teal" size={20} />
                    <Text style={styles.singleImageHeadText}>00</Text>
                    <View style={styles.bars}>
                        <FontAwesome name="bars" color="#f4511e" size={40} />
                    </View>
                </View>
                <View style={styles.comments}>
                    <View>
                        <Ionicons
                            name="ios-chatbubbles"
                            size={30}
                            color="teal"
                        />
                    </View>
                    <View style={styles.commentContent}>
                        <View style={styles.comment}>
                            <Text style={styles.commentUser}>username</Text>
                            <Text style={styles.commentText}>Newest comments show up first in this list.</Text>
                        </View>
                        <View style={styles.comment}>
                            <Text style={styles.commentUser}>username</Text>
                            <Text style={styles.commentText}>older comments move down the list as it builds</Text>
                        </View>
                        <View style={styles.comment}>
                            <Text style={styles.commentUser}>username</Text>
                            <Text style={styles.commentText}>when the list gets too long it loads as a user scrolls down</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    singleImage: state.itemReducer.singleImage,
    user: state.sessionReducer.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(singleImage);

// <Button
//     onPress={() =>
//         deleteImage(
//             this.props.user.uid,
//             this.props.singleImage.url,
//             this.props.singleImage._id
//         )
//     }
//     title="delete"
// />