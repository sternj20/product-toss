import { itemsFetchData } from '../actions/items';

export function vote(id, val){
  return (dispatch) => {
	  fetch(`https://product-toss-backend.herokuapp.com/api/imgs/${id}/${val}/positive`, {
	  method: 'PUT'})
	  	.then((response) => {
		    if (!response.ok) {
		        throw Error(response.statusText);
		    }
        dispatch(itemsFetchData("https://product-toss-backend.herokuapp.com/api/imgs"))
		    })
  }
}
