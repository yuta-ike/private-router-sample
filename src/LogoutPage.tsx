import React from 'react'
import { useHistory } from 'react-router-dom'

const LogoutPage = () => {
  const history = useHistory()
  return (
    <div>
      ログアウトしました！
      <button onClick={() => history.push("/login")}>ログインページへ戻る</button>
    </div>
  )
}

export default LogoutPage