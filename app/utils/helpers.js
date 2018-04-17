//for showing followers images
// Fisher-Yates (aka Knuth) Shuffle algorithm
//randomizes array of images from followers
import { seeFriendsData } from "../actions/social/social";

export const shuffle = array => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

//make an array of followers images out of the followers array
export const getFollowingImages = following => {
    let followersImages = [];
    following.forEach(element => {
        // console.log(element)
        element.images.forEach(image => {
            followersImages.push(image);
        });
    });
    let images = shuffle(followersImages);
    return images;
};

export const navigateToComponent = (navigation, user, destination) => {
    console.log(user);
    navigation.navigate(destination, {
        user
    });
};

//Helper to navigate to correct component and pass correct props based on whether or not image is yours or anothers
export const imgNavHelper = (submission, props, user) => {
    if (submission.createdBy === props.userID) {
        props.showSingleImage(submission, props.navigation, props.user);
    } else {
        console.log(user)
        props.showSingleImageFromOther(submission, props.navigation, user);
    }
};

//Helper to navigate to correct user profile from prevsworld component whether or not user is you or another
export const profileNavHelper = (props, user) => {
        if(props.userID === user.uid){
            props.navigation.navigate("userImages", {
                user: props.user
            });
        } else {
            props.seeFriendsData(props.navigation, user)
        }
    }