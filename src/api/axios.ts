import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:8849/api',
    timeout:1000,
    headers :{'X-test-Header': 'foobar'}
})
export default instance