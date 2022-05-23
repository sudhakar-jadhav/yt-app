import axios from 'axios'

const KEY = 'AIzaSyB8MvI1fLlRmiVmZad_QLiZuPPtsxDRjyw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})