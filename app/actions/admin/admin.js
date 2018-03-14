


export function submitContest(name) {
  console.log(name)
  return fetch('http://product-toss-backend.herokuapp.com/api/contest/new', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
  }),
});
}