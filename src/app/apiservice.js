import axios from 'axios';

const httpCliente = axios.create({
    baseURL: 'http://localhost:9090'
})

class ApiService {
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpCliente.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpCliente.put(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpCliente.delete(requestUrl);
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpCliente.get(requestUrl);
    }
}

export default ApiService;