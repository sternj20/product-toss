import React, { Component } from "react";
import {
    View,
    Button,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import VotingBar from "../votingBar/votingBar";
import { chooseContestToSee } from "../../actions/vote/vote";
import {
    showSingleImageFromOther,
    showSingleImage
} from "../../actions/items/items";
import { imgNavHelper } from "../../utils/helpers.js";
import { connect } from "react-redux";
import { styles } from "./styles";

class vsWorld extends React.Component {
    render() {
        return (
            <ScrollView>
                {this.props.activeContest ? (
                    <View>
                        <Text style={styles.header}>
                            This week's theme is {this.props.activeContest.name}
                        </Text>
                        {this.props.images.map((submission, index) => {
                            let user = {
                                userName: submission.userName,
                                uid: submission.createdBy
                            };
                            return (
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
                                        key={submission._id}
                                        style={styles.image}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                        <View style={styles.votingBar}>
                            <VotingBar />
                        </View>
                    </View>
                ) : (
                    <Text>
                        {" "}
                        Looks like there isn't a contest going on right now,
                        stay tuned...
                    </Text>
                )}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    userID: state.itemReducer.userID,
    user: state.sessionReducer.user,
    activeContest: state.itemReducer.activeContest,
    images: state.itemReducer.contestImages
});

const mapDispatchToProps = {
    showSingleImageFromOther,
    showSingleImage
};

export default connect(mapStateToProps, mapDispatchToProps)(vsWorld);