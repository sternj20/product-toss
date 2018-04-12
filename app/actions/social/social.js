

export const followUser = (uid, userToFollow) => {
    return(dispatch) => {
        fetch(`https://product-toss-backend.herokuapp.com/api/user/${uid}/${userToFollow}`, {method: 'POST'}).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(getFriendsData(`https://product-toss-backend.herokuapp.com/api/user/other/${userToFollow}`))
            })
    }
}

export const unFollowUser = (uid, userToUnfollow) => {
    return(dispatch) => {
        fetch(`https://product-toss-backend.herokuapp.com/api/user/${uid}/${userToUnfollow}`, {method: 'PUT'}).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(getFriendsData(`https://product-toss-backend.herokuapp.com/api/user/other/${userToUnfollow}`))
            })
    }
}

export function getFriendsData(url){
    return (dispatch) => {
        dispatch({type:'SESSION_LOADING'})
        fetch(url)
        .then((response) => {

            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((items) => {
            dispatch(getFriendsDataSuccess(items))
            dispatch({type: 'LOADING_SUCCESS'})
        })
    }; 
}

export function getFriendsDataSuccess(items){
    return {
        type: 'SEE_ANOTHERS_DATA_SUCCESS',
        othersData: items
    }
}

//For seeing another persons profile 
export function seeFriendsData(navigation, user){
    return(dispatch) => {
    dispatch({type: 'SESSION_LOADING'})
    dispatch(getFriendsData(`https://product-toss-backend.herokuapp.com/api/user/other/${user.uid}`))
        
    navigation.navigate('otherUserImages', {otherUser: user})
    }
}