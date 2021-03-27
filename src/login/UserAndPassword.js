import React, { useState } from 'react'
import { Post } from '../api/Api.js'
import { STAGE_TWO } from './Login.js'

const UserAndPassword = ({ callback }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const onChangeHandler = event => setCredentials({
    ...credentials,
    [event.target.name]: event.target.value
  })

  const loginWithCredentials = () => {
    Post('/auth/login', credentials)
      .then(res => {
        console.log(res)
        callback(STAGE_TWO, { userId: res.data.id }) // next stage of authentication
      })
      .catch(err => window.alert(err))
  }

  return (
    <div>
      <p>Please, enter your username and password</p>
      <input type='text' value={credentials.username} name='username' onChange={onChangeHandler} />
      <br />
      <input type='password' value={credentials.password} name='password' onChange={onChangeHandler} />
      <br />
      <button
        disabled={credentials.username === '' || credentials.password === ''}
        onClick={loginWithCredentials}
      >
        Authenticate
      </button>
    </div>
  )
}

export default UserAndPassword
