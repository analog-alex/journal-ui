import React, { useState } from 'react'
import { Post } from '../api/Api.js'
import { STAGE_ONE } from './Login.js'

const Otp = ({ callback, hashId }) => {
  const [otp, setOtp] = useState('')

  const onChangeHandler = event => setOtp(event.target.value)

  const loginWithOtp = () => {
    Post('/auth/otp', { otp: otp, hashId: hashId })
      .then(res => {
        console.log(res)
        // temporary hack :sad:
        window.localStorage.setItem('credentials', JSON.stringify(res))
      })
      .catch(err => {
        window.alert(err)
        callback(STAGE_ONE, {})
      })
  }

  return (
    <div>
      <p>Check your cell phone for authentication code! Set below:</p>
      <input type='text' value={otp} name='otp' onChange={onChangeHandler} />
      <br />
      <button disabled={otp === ''} onClick={loginWithOtp}> Login </button>
    </div>
  )
}

export default Otp
