const initialState = {
    votedImages: [],
    userUploads: [],
    recentUpload: ''
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            let items = []
            let counter = 1
            //Pick two random images
            while(counter <= 2){
                newImg = action.items.votedImages.splice(Math.floor(Math.random() * action.items.votedImages.length), 1)
                items = items.concat(newImg)
                counter++;
            }
            return { ...state, votedImages: items, userUploads: action.items.images}
        case 'ITEM_UPLOAD':
            return { ...state, recentUpload:action.recentUpload}
        default:
            return state;
    }
}

export default itemReducer;

