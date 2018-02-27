import { itemsFetchData } from '../items/items';

export const vote = (id, val) =>{
  return (dispatch) => {
	  fetch(`https://product-toss-backend.herokuapp.com/api/imgs/${id}/${val}/`, {
	  method: 'PUT'})
	  	.then((response) => {
		    if (!response.ok) {
		        throw Error(response.statusText);
		    }
        dispatch(itemsFetchData("https://product-toss-backend.herokuapp.com/api/imgs"))
		    })
  }
}