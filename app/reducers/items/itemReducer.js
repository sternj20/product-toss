const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            let items = []
            let counter = 1
            //Pick two random images
            while(counter <= 2){
                newImg = action.items.splice(Math.floor(Math.random() * action.items.length), 1)
                items = items.concat(newImg)
                counter++;
            }
            return items
        default:
            return state;
    }
}

export default itemReducer;

