import { getFollowingImages } from "../../utils/helpers.js";
const initialState = {
    images: [],
    userUploads: [],
    contestToSee: [],
    contests: [],
    userID: "",
    submitToContest: false,
    singleImage: "",
    recentUpload: "",
    modalVisible: false,
    followingImages: [],
    imageToSubmit: {},
    isCollapsed: true,
    test: false
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ITEMS_FETCH_DATA_SUCCESS":
            let followingImages = getFollowingImages(action.items.following);
            let items = [];
            let counter = 1;
            let activeContest;
            if (action.items.activeContest) {
                activeContest = action.items.activeContest.submissions;
                //Pick two random images
                while (counter <= 2) {
                    newImg = activeContest.splice(
                        Math.floor(Math.random() * activeContest.length),
                        1
                    );
                    items = items.concat(newImg);
                    counter++;
                }
            } else {
                activeContest = "";
                items = [];
            }

            return {
                ...state,
                contestImages: items,
                userUploads: action.items.uploads,
                userID: action.items.userID,
                followingImages: getFollowingImages(action.items.following),
                following: action.items.following,
                followers: action.items.followers,
                archivedContests: action.items.archivedContests,
                activeContest: action.items.activeContest,
                contestToSee: action.items.archivedContests[0],
                contestToSeeName: action.items.archivedContests[0].name
            };
        case "VOTE_SUCCESS":
            console.log(activeContest);
        // return {
        //     ...state,
        //     contestImages:
        // }
        case "ITEM_UPLOAD":
            return { ...state, recentUpload: action.recentUpload };
        case "SHOW_SINGLE_ITEM":
            return { ...state, singleImage: action.singleImage };
        case "SELECT_CONTEST":
            return {
                ...state,
                imageToSubmit: action.submission,
                modalVisible: true
            };
        case "SEE_CONTEST":
            return {
                ...state,
                contestToSee: state.contests[action.index]
            };
        case "TOGGLE_SUBMIT_TO_CONTEST":
            return { ...state, submitToContest: action.submitToContest };
        case "TOGGLE_COLLAPSE":
            let stateMutation = [...state[action.destination]];
            if (action.destination === "contestToSee") {
                submissions = state[action.destination].submissions;
                submissions[action.imageToToggle].collapsed = !action.collapsed;
                stateMutation.submissions = submissions
            } else {
                stateMutation[action.imageToToggle].collapsed = !action.collapsed;

            }
            return { ...state, [action.destination]: stateMutation };
        default:
            return state;
    }
};

export default itemReducer;