import { Actions } from 'react-native-router-flux';
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

export function showSingleImage(item){
    return {
        type: 'SHOW_SINGLE_ITEM',
        singleImage: item
    };   
}   
export function getSingleImage(id){
    return (dispatch) => {
        let url = `https://product-toss-backend.herokuapp.com/api/imgs/${id}`
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
          dispatch(showSingleImage(responseJson[0]))
          Actions.reset('singleImage')
        })
    .catch((error) => {
      console.error(error);
    });
}
}
export function upload(uri, uid){
    return (dispatch) => {
        let apiUrl = `https://product-toss-backend.herokuapp.com/api/imgs/${uid}`;
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
            Actions.reset('recentUpload')
        })
    }
}

export function deleteImage(uid, fileName, imgId ){
    console.log(uid)
    console.log(fileName)
    console.log(imgId)
    let deleteUrl = `https://product-toss-backend.herokuapp.com/api/imgs/${uid}`
    let deleteData = {
            fileName,
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