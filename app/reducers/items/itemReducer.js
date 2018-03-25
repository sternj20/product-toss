const initialState = {
    images: [],
    userUploads: [],
    contestToSee: [],
    contests: [],
    singleImage: '',
    recentUpload: '',
    modalVisible: false,
    imageToSubmit: {}
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            let items = []
            let counter = 1
            let activeContest = action.items.activeContest[0].submissions;
            //Pick two random images
            while(counter <= 2){
                newImg = activeContest.splice(Math.floor(Math.random() * activeContest.length), 1)
                items = items.concat(newImg)
                counter++;
            }[]
            return { ...state,
                contestImages: items,
                userUploads: action.items.uploads,
                archivedContests: action.items.archivedContests,
                activeContest: action.items.activeContest,
                contestToSee: action.items.archivedContests[0].submissions
            }
        case 'ITEM_UPLOAD':
            return { ...state, recentUpload: action.recentUpload}
        case 'SHOW_SINGLE_ITEM':
            return { ...state, singleImage: action.singleImage}
        case 'SELECT_CONTEST':
            return {...state, imageToSubmit: action.submission, modalVisible: true}
        case 'SEE_CONTEST':
            return {...state, contestToSee: state.contests[action.index].submissions}
        case 'HIDE_MODAL':
            return {...state, modalVisible: false}
        default:
            return state;
    }
}

export default itemReducer;

