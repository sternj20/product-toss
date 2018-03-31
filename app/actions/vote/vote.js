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
        dispatch(itemsFetchData(`https://product-toss-backend.herokuapp.com/api/user/${uID}`))
		    })
  }
}

export const selectContest = (img) => {
    return {
        type: 'SELECT_CONTEST',
        submission: img
    }
}

export function toggleSubmitToContest(value){
    return{
        type: 'TOGGLE_SUBMIT_TO_CONTEST',
        submitToContest: value
    }
}

export const chooseContestToSee = (index) =>{
    return {
        type: 'SEE_CONTEST',
        index
    }
}

export const submitImageToContest = (cid, img) => {
    let options = {
        method: 'POST',
                headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(img)
    }
    return(dispatch) => {
         fetch(`https://product-toss-backend.herokuapp.com/api/contest/${cid}`, options).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            })

    }
}

