import React, { Component } from "react";
import {
    View,
    Button,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { chooseContestToSee } from "../../actions/vote/vote";
import { connect } from "react-redux";
import { styles } from "./styles";
import {
    itemsFetchData,
    showSingleImageFromOther,
    showSingleImage,
    toggleCollapse
} from "../../actions/items/items";
import { imgNavHelper, profileNavHelper } from "../../utils/helpers.js";
import { seeFriendsData } from "../../actions/social/social";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Collapsible from "react-native-collapsible";

class preVsWorld extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: () => (
                <View style={styles.headerWrapper}>
                    <Text adjustsFontSizeToFit style={styles.headerText}>
                        VS-world
                    </Text>
                </View>
            )
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.props.contestToSee.submissions.map(
                        (submission, index) => {
                            let user = {
                                userName: submission.userName,
                                uid: submission.createdBy
                            };
                            return (
                                <View key={submission._id}>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() =>
                                                profileNavHelper(
                                                    this.props,
                                                    user
                                                )
                                            }
                                            style={styles.imageUserInfo}
                                        >
                                            <MaterialIcons
                                                name="face"
                                                size={50}
                                            />
                                            <Text style={styles.imageUserName}>
                                                {user.userName}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            imgNavHelper(
                                                submission,
                                                this.props,
                                                user
                                            )
                                        }
                                        key={`${index}Container`}
                                        style={styles.container}
                                    >
                                        <Image
                                            source={{ uri: submission.url }}
                                            key={`submission${submission._id}`}
                                            style={styles.image}
                                        />
                                    </TouchableOpacity>
                                    <View style={styles.bars}>
                                        <FontAwesome
                                            onPress={() =>
                                                this.props.toggleCollapse(
                                                    this.props.contestToSee
                                                        .submissions[index]
                                                        .collapsed,
                                                    index,
                                                    'contestToSee'
                                                )
                                            }
                                            name="diamond"
                                            color="teal"
                                            size={50}
                                        />
                                        <Collapsible
                                            style={styles.collapse}
                                            collapsed={
                                                this.props.contestToSee
                                                    .submissions[index]
                                                    .collapsed
                                            }
                                        >
                                            <Button
                                                onPress={() =>
                                                    console.log("pressed")
                                                }
                                                title="Report"
                                            />
                                            <Button
                                                onPress={() =>
                                                    console.log("pressed")
                                                }
                                                title="Tweet"
                                            />
                                            <Button
                                                onPress={() =>
                                                    console.log("pressed")
                                                }
                                                title="Facebook"
                                            />
                                        </Collapsible>
                                    </View>
                                </View>
                            );
                        }
                    )}
                </ScrollView>
                <TouchableOpacity
                    style={styles.submissionGallery}
                    onPress={() => this.props.navigation.navigate("vsWorld")}
                >
                    <Text style={styles.headerText}>Submissions Gallery</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.sessionReducer.user,
    userID: state.itemReducer.userID,
    archivedContests: state.itemReducer.archivedContests,
    contestToSee: state.itemReducer.contestToSee
});

const mapDispatchToProps = {
    fetchData: itemsFetchData,
    showSingleImageFromOther,
    showSingleImage,
    seeFriendsData,
    toggleCollapse
};

export default connect(mapStateToProps, mapDispatchToProps)(preVsWorld);

// this.props.contestToSee.name