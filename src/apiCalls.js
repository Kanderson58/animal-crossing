export const getFish = () => {
  return fetch('http://acnhapi.com/v1/fish/')
    .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).catch(error => console.log(error))
}