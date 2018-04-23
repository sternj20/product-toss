import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
    Button,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { styles } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { deleteImage, toggleCollapse } from "../../actions/items/items";
import { seeFriendsData } from "../../actions/social/social";
import { navigateToComponent } from "../../utils/helpers.js";
import Collapsible from "react-native-collapsible";

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
            <View style={{ flex: 1 }}>
                <Image
                    source={{ uri: this.props.singleImage.url }}
                    style={styles.image}
                />
                <View style={styles.singleImageHeader}>
                    <FontAwesome name="diamond" color="teal" size={20} />
                    <Text style={styles.singleImageHeadText}>00</Text>
                    <View style={styles.bars}>
                        <FontAwesome
                            name="bars"
                            onPress={() =>
                                this.props.toggleCollapse(
                                    this.props.singleImage.collapsed,
                                    0,
                                    "singleImage"
                                )
                            }
                            color="#f4511e"
                            size={40}
                        />
                        <Collapsible
                            style={styles.collapse}
                            collapsed={this.props.singleImage.collapsed}
                        >
                        {this.props.userID === this.props.singleImage.createdBy ?
                            <Button
                                onPress={() =>
                                    deleteImage(
                                        this.props.user.uid,
                                        this.props.singleImage.url,
                                        this.props.singleImage._id
                                    )
                                }
                                title="Delete Post"
                            /> : 
                            <Button onPress ={() => console.log('hi')} title="Report"></Button>
                        }
                            <Button
                                onPress={() => console.log("pressed")}
                                title="Tweet"
                            />
                            <Button
                                onPress={() => console.log("pressed")}
                                title="Facebook"
                            />
                        </Collapsible>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.comments}>
                        <View>
                            <Ionicons
                                name="ios-chatbubbles"
                                size={30}
                                color="teal"
                            />
                        </View>
                        <View style={styles.commentContent}>
                            <Text>
                                <Text style={styles.commentUser}>
                                    username{" "}
                                </Text>
                                <Text style={styles.commentText}>
                                    Newest comments show up first in this
                                    list.Newest comments show up first in this
                                    list. Newest comments show up first in this
                                    list.
                                </Text>
                            </Text>
                            <Text>
                                <Text style={styles.commentUser}>
                                    username{" "}
                                </Text>
                                <Text style={styles.commentText}>
                                    Older comments move down the list as it
                                    builds. Older women are also pretty hot.
                                </Text>
                            </Text>
                            <Text>
                                <Text style={styles.commentUser}>
                                    username{" "}
                                </Text>
                                <Text style={styles.commentText}>
                                    When the list gets too long it loads as a
                                    user scrolls down
                                </Text>
                            </Text>
                            <Text>
                                <Text style={styles.commentUser}>
                                    username{" "}
                                </Text>
                                <Text style={styles.commentText}>
                                    When the list gets too long it loads as a
                                    user scrolls down
                                </Text>
                            </Text>
                            <Text>
                                <Text style={styles.commentUser}>
                                    username{" "}
                                </Text>
                                <Text style={styles.commentText}>
                                    Now watch me whip. Now watch me nay nay.
                                </Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.options}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log("hi")}
                    >
                        <View style={styles.iconContainer}>
                            <FontAwesome
                                name="diamond"
                                color="#f4511e"
                                size={20}
                            />
                        </View>
                        <Text style={styles.optionText}>Nominate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log("hi")}
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons
                                name="ios-chatbubbles"
                                size={20}
                                color="#f4511e"
                            />
                        </View>
                        <Text style={styles.optionText}>Comment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    singleImage: state.itemReducer.singleImage,
    user: state.sessionReducer.user,
    userID: state.itemReducer.userID
});

const mapDispatchToProps = {
    toggleCollapse
};

export default connect(mapStateToProps, mapDispatchToProps)(singleImage);