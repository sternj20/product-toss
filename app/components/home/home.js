import React, { Component } from "react";
import {
    View,
    Button,
    Image,
    Text,
    TouchableOpacity,
    Picker,
    ScrollView
} from "react-native";
import { styles } from "./styles";
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";
import VotingBar from "../votingBar/votingBar";
import preVsWorld from "../preVsWorld/preVsWorld";
import { ImagePicker, FileSystem } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { navigateToComponent } from "../../utils/helpers.js";
import Collapsible from "react-native-collapsible";

export class Home extends React.Component {
    componentDidMount() {
        this.props.fetchData(
            `http://product-toss-backend.herokuapp.com/api/user/${
                this.props.user.uid
            }`
        );
        this.props.navigation.setParams({
            navigateToComponent,
            user: this.props.user
        });
    }

    constructor(props) {
        super(props);
    }

    choosePhoto = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            exif: true,
            allowsEditing: false,
            quality: 0.7,
            base64: true
        });
        this.props.upload(
            pickerResult.uri,
            this.props.userID,
            this.props.user.email
        );
    };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            headerStyle: {
                backgroundColor: "teal",
                height: 70
            },
            headerTitle: (
                <View style={styles.headerWrapper}>
                    <Text adjustsFontSizeToFit style={styles.headerText}>
                        ProducTToss
                    </Text>
                </View>
            ),
            headerRight: (
                <View style={styles.headerWrapper}>
                    <TouchableOpacity
                        onPress={() =>
                            params.navigateToComponent(
                                navigation,
                                params.user,
                                "userImages"
                            )
                        }
                        style={{ flexDirection: "row" }}
                    >
                        <MaterialIcons name="face" size={50} />
                    </TouchableOpacity>
                </View>
            )
        };
    };

    render() {
        const { loading } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                {loading ? (
                    <LoadingIndicator color="#ffffff" size="large" />
                ) : (
                    <View>
                        <View style={{ flexDirection: "row" }} />
                        <ScrollView style={{ height: 520 }}>
                            {this.props.followingImages.length > 0 ? (
                                this.props.followingImages.map(
                                    (item, index) => {
                                        let user = {
                                            userName: item.userName,
                                            uid: item.createdBy
                                        };
                                        return (
                                            <View key={item._id}>
                                                <View
                                                    style={styles.imageUserInfo}
                                                >
                                                    <TouchableOpacity
                                                        style={
                                                            styles.imageUserInfo
                                                        }
                                                        onPress={() =>
                                                            this.props.seeFriendsData(
                                                                this.props
                                                                    .navigation,
                                                                user
                                                            )
                                                        }
                                                    >
                                                        <MaterialIcons
                                                            name="face"
                                                            size={50}
                                                        />
                                                        <Text
                                                            style={
                                                                styles.imageUserName
                                                            }
                                                        >
                                                            {item.userName}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        this.props.showSingleImageFromOther(
                                                            item,
                                                            this.props
                                                                .navigation,
                                                            user
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        source={{
                                                            uri: item.url
                                                        }}
                                                        key={item._id}
                                                        style={styles.image}
                                                    />
                                                </TouchableOpacity>
                                                <View style={styles.footer}>
                                                    <FontAwesome
                                                        name="diamond"
                                                        color="teal"
                                                        size={30}
                                                    />
                                                    <Text
                                                        style={
                                                            styles.imageStats
                                                        }
                                                    >
                                                        00
                                                    </Text>
                                                    <Ionicons
                                                        name="ios-chatbubbles"
                                                        color="teal"
                                                        size={30}
                                                    />
                                                    <Text
                                                        style={
                                                            styles.imageStats
                                                        }
                                                    >
                                                        00
                                                    </Text>
                                                </View>
                                                <View style={styles.bars}>
                                                    <FontAwesome
                                                        onPress={() =>
                                                            this.props.toggleCollapse(
                                                                this.props
                                                                    .followingImages[
                                                                    index
                                                                ].collapsed,
                                                                index,
                                                                'followingImages'
                                                            )
                                                        }
                                                        name="bars"
                                                        color="#f4511e"
                                                        size={50}
                                                    />
                                                    <Collapsible
                                                        style={styles.collapse}
                                                        collapsed={
                                                            this.props
                                                                .followingImages[
                                                                index
                                                            ].collapsed
                                                        }
                                                    >
                                                        <Button
                                                            onPress={() =>
                                                                console.log(
                                                                    "pressed"
                                                                )
                                                            }
                                                            title="Report"
                                                        />
                                                        <Button
                                                            onPress={() =>
                                                                console.log(
                                                                    "pressed"
                                                                )
                                                            }
                                                            title="Tweet"
                                                        />
                                                        <Button
                                                            onPress={() =>
                                                                console.log(
                                                                    "pressed"
                                                                )
                                                            }
                                                            title="Facebook"
                                                        />
                                                    </Collapsible>
                                                </View>
                                            </View>
                                        );
                                    }
                                )
                            ) : (
                                <Text>
                                    'You don't have any friends in your feed!
                                    Add some friends you lonely fool!
                                </Text>
                            )}
                        </ScrollView>
                        <View
                            style={{
                                height: 54,
                                backgroundColor: "white",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Ionicons
                                name="ios-home"
                                size={50}
                                color="black"
                                style={{ marginTop: 12, marginRight: 10 }}
                            />
                            <Ionicons
                                name="ios-search"
                                size={50}
                                color="black"
                                style={{ marginTop: 12, marginLeft: 35 }}
                            />
                            <FontAwesome
                                onPress={() =>
                                    this.props.navigation.navigate("preVsWorld")
                                }
                                name="diamond"
                                size={50}
                                color="blue"
                                style={{ marginTop: 12, marginLeft: 35 }}
                            />
                            <Ionicons
                                onPress={this.choosePhoto.bind(this)}
                                name="ios-camera"
                                size={50}
                                color="black"
                                style={{ marginTop: 12, marginLeft: 35 }}
                            />
                            <Ionicons
                                name="ios-chatbubbles"
                                size={50}
                                color="black"
                                style={{ marginTop: 12, marginLeft: 35 }}
                            />
                        </View>
                    </View>
                )}
            </View>
        );
    }
}