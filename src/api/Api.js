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
const Post = (url, body) => axios.post(uri(url), body, headers)

const AuthPost = (url, body, auth) => axios.post(
  uri(url),
  body,
  { headers: { ...headers.headers, Authorization: `Bearer ${auth}` } }
)

export { Get, Post, AuthPost }
