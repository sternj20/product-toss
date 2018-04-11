const initialState = {
    otherFollowers: [],
    otherFollowing: [],
    otherID: '',
    otherName: '',
    othersData: []
}

const socialReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SEE_ANOTHERS_DATA_SUCCESS':
            return { ...state,
                    othersData: action.othersData.images,
                    otherID: action.othersData._id,
                    otherName: action.othersData.name,
                    otherFollowers: action.othersData.followers,
                    otherFollowing: action.othersData.following,
                }
            default:
                return state;
        }
}

export default socialReducer;