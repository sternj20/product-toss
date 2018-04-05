import { getFriendsData } from '../items/items'


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