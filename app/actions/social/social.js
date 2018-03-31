export const followUser = (uid, userToFollow) => {
        fetch(`https://product-toss-backend.herokuapp.com/api/user/${uid}/${userToFollow}`, {method: 'POST'}).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
        console.log(response)
            })
}