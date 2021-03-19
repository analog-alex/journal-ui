import axios from 'axios'
import configurations from './Configuration'

// commons
const uri = (url) => `${configurations.base_url}/${url}`
const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
}

// usual REST api methods
const Get = (url) => axios.get(uri(url))
const Post = (url, body) => axios.post(uri(url), headers, body)

export { Get, Post }
