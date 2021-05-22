import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import UserAndPassword from './UserAndPassword.js'
import Otp from './Otp.js'

const STAGE_ONE = Symbol('auth_pass')
const STAGE_TWO = Symbol('auth_otp')
const STAGE_THREE = Symbol('auth_done')

const Login = () => {
  const [stage, setStage] = useState(STAGE_ONE)
  const [userId, setUserId] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const authentication = JSON.parse(window.localStorage.getItem('auth'))
    if (authentication != null && authentication.jwt != null && authentication.id != null) {
      dispatch({ type: 'auth/on', user: { id: authentication.id, jwt: authentication.jwt } })
      history.push('/create')
    }
  })

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

    if (nextStage === STAGE_THREE) { // we are done with authentication
      dispatch({ type: 'auth/on', user: { id: userId, jwt: data.jwt } })
      window.localStorage.setItem('auth', JSON.stringify({ id: userId, jwt: data.jwt }))
      history.push('/posts')
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

export { STAGE_ONE, STAGE_TWO, STAGE_THREE }
