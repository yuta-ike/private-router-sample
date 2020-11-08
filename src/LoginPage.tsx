import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLogin } from './AuthUserContext'

const LoginPage = () => {
  const history = useHistory()
  const [userId, setUserId] = useState("")
  const login = useLogin()

  const handleLogin = () => {
    login(userId)
  }

  return (
    <div>
      <input type="text" value={userId} onChange={e => setUserId(e.target.value)}/>
      <button onClick={handleLogin}>送信</button>
      <button onClick={() => history.push("/")}>ホームへアクセスしてみる</button>
    </div>
  )
}

export default LoginPage
