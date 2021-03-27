import React, { useState } from 'react'
import UserAndPassword from './UserAndPassword.js'
import Otp from './Otp.js'

const STAGE_ONE = Symbol('auth_pass')
const STAGE_TWO = Symbol('auth_otp')

const Login = () => {
  const [stage, setStage] = useState(STAGE_ONE)
  const [userId, setUserId] = useState('')

  const callback = (nextStage, data) => {
    if (nextStage === STAGE_ONE || nextStage === STAGE_TWO) {
      setStage(nextStage)
    }

    if (nextStage === STAGE_ONE) { // previous stage was two (it looped)
      setUserId('')
    }

    if (nextStage === STAGE_TWO) { // previous stage was one
      setUserId(data.userId)
    }
  }

  const drawStage = () => {
    if (stage === STAGE_ONE) {
      return <UserAndPassword callback={callback} />
    }
    if (stage === STAGE_TWO) {
      return <Otp callback={callback} hashId={userId} />
    }
    // default
    return <p>Login service is unavailable!</p>
  }

  return (
    <div>
      <h2>Login!</h2>
      <hr />
      {drawStage()}
    </div>
  )
}

export default Login

export { STAGE_ONE, STAGE_TWO }
