import Api from "./Api.js"
const apiConfig = ({
  url: 'https://api.mxtheem.students.nomoreparties.co/',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
});
const apiInit = new Api(apiConfig)
export default apiInit

