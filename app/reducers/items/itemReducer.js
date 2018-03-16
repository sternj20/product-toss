const initialState = {
    images: [],
    userUploads: [],
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
            //Pick two random images
            while(counter <= 2){
                newImg = action.items.images.splice(Math.floor(Math.random() * action.items.images.length), 1)
                items = items.concat(newImg)
                counter++;
            }
            return { ...state, images: items, userUploads: action.items.uploads, contests: action.items.contests}
        case 'ITEM_UPLOAD':
            return { ...state, recentUpload: action.recentUpload}
        case 'SHOW_SINGLE_ITEM':
            return { ...state, singleImage: action.singleImage}
        case 'SEE_CONTESTS':
            return {...state, imageToSubmit: action.submission, modalVisible: true}
        case 'HIDE_MODAL':
            return {...state, modalVisible: false}
        default:
            return state;
    }
}

export default itemReducer;

