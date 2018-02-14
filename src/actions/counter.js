export function posVote(count){
  return {
    type: 'INCREMENT'
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