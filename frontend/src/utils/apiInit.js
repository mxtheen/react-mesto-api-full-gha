import Api from "./Api.js"
const apiConfig = ({
  url: 'http://mxtheem.students.nomoredomains.sbs/',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
});
const apiInit = new Api(apiConfig)
export default apiInit

