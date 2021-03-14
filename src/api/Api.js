import axios from 'axios'
import configurations from './Configuration'

const get = (url) => axios.get(`${configurations.base_url}/${url}`)

export { get }
