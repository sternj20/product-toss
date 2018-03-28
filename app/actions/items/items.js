import { sessionLoading, loadingSuccess } from '../session/actions'



export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function hideModal(){
    return{
        type: 'HIDE_MODAL'
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

export function seeFriendsData( props, uID){
    return(dispatch) => {
    dispatch(itemsFetchData(`https://product-toss-backend.herokuapp.com/api/user/${uID}`))
        
    props.navigation.navigate('userImages')
    }
}

export function showSingleImage(item, props){
    return (dispatch) => {
        props.navigation.navigate('singleImage')
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