import { Actions } from 'react-native-router-flux';
import { sessionLoading, loadingSuccess } from '../session/actions'


export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
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

export function upload(uri){
    return (dispatch) => {
        let apiUrl = 'https://product-toss-backend.herokuapp.com/api/imgs/';
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

        return fetch(apiUrl, options)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response
        }).then((response) => response.json()).then(function(data) {
        let location = data.location
        dispatch(loadingSuccess())
        dispatch({ type: 'ITEM_UPLOAD', recentUpload: location})
        Actions.reset('recentUpload')
        })
    }
}
