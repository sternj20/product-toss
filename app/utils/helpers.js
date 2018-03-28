//for showing followers images
// Fisher-Yates (aka Knuth) Shuffle algorithm 
//randomizes array of images from followers
export const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//make an array of followers images out of the followers array 
export const getFollowingImages = (following) => {
    let followersImages = []
    following.forEach(element => {
        // console.log(element)
        element.images.forEach(image => {
            followersImages.push(image)
        })
    })
            let images = shuffle(followersImages)
        return images
}

 export const  navigateToComponent = (navigation, user, destination) => {
        navigation.navigate(destination,{
            user
        })
}