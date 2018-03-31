import { sessionLoading, loadingSuccess } from '../session/actions'



export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function getFriendsDataSuccess(items){
    return {
        type: 'SEE_ANOTHERS_DATA_SUCCESS',
        othersData: items
    }
}



export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
        .then((response) => {

            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
    };
}

//Gets another users data
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

//For seeing another persons profile 
export function seeFriendsData(navigation, uID){
    return(dispatch) => {
    dispatch({type: 'SESSION_LOADING'})
    dispatch(getFriendsData(`https://product-toss-backend.herokuapp.com/api/user/other/${uID}`))
        
    navigation.navigate('OtherUserImages')
    }
}

//Showing a single image if you are coming from the user profile -- pass your info as params 
export function showSingleImage(item, navigation, user){
    return (dispatch) => {
        navigation.navigate('singleImage', {user})
        dispatch({type: 'SHOW_SINGLE_ITEM', singleImage: item})
    }
}

//Showing a single image if you are coming from another users profile -- pass their info as params 
export function showSingleImageFromOther(item, navigation, user){
    return (dispatch) => {
        navigation.navigate('singleImage', {otherUser: user})
        dispatch({type: 'SHOW_SINGLE_ITEM', singleImage: item})
    }
}


export function upload(uri, uid,email){
    return (dispatch) => {
        let apiUrl = `https://product-toss-backend.herokuapp.com/api/imgs/${uid}/${email}`;
        let uriParts = uri.split('.');
        let fileType = uriParts[uriParts.length - 1];

        let formData = new FormData();
        formData.append('photo', {
          uri,
          name: `photo.${fileType}`,
          type: `image/${fileType}`,
        });
        let options = {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            },
        };
        dispatch(sessionLoading());
        return fetch(apiUrl, options).then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            let location = data.location
            dispatch(loadingSuccess())
            dispatch({ type: 'ITEM_UPLOAD', recentUpload: location})
        })
    }
}

export function deleteImage(uid, fileName, imgId ){
    console.log(uid)
    console.log(fileName)
    console.log(imgId)
    let deleteUrl = `https://product-toss-backend.herokuapp.com/api/imgs/${uid}`
    let deleteData = {
            fileName: fileName.split('/')[3],
            imgId
    }
    let deleteOptions = {
      method: 'PUT',
      body: JSON.stringify(deleteData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
    };
    return fetch(deleteUrl, deleteOptions)
}