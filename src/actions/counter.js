export function posVote(id, val){
  return (dispatch) => {
	  fetch(`https://product-toss-backend.herokuapp.com/api/imgs/${id}/${val}/positive`, {
	  method: 'PUT'})
	  	.then((response) => {
		    if (!response.ok) {
		        throw Error(response.statusText);
		    }
		    })
  }
}

export function negVote(){
  return {
    type: 'DECREMENT'
  }
}
export function reset(){
  return {
    type: 'RESET'
  }
}