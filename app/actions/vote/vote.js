import { itemsFetchData } from '../items/items';

export const vote = (uID, imgID, val) =>{
let api = 'https://product-toss-backend.herokuapp.com/api/imgs/' + uID
  return (dispatch) => {
	  fetch(`https://product-toss-backend.herokuapp.com/api/imgs/${uID}/${imgID}/${val}`, {
	  method: 'PUT'})
	  	.then((response) => {
		    if (!response.ok) {
		        throw Error(response.statusText);
		    }
        dispatch(itemsFetchData(api))
		    })
  }
}