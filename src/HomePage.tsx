import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLogout } from './AuthUserContext'

const HomePage = () => {
  const history = useHistory()
  const logout = useLogout()
  return (
    <>
      <h1>ホーム</h1>
      <p>プライベートページです。ログインしていないユーザは見れません。</p>
      <div>
      <button onClick={logout}>ログアウトする</button>
      <button onClick={() => history.push("/login")}>/loginへアクセスしてみる</button>
      <button onClick={() => history.push("/logout")}>/logoutへアクセスしてみる</button>
      <button onClick={() => history.push("/profile/1")}>ユーザー1のプロフィールページへ</button>
      <button onClick={() => history.push("/profile/2")}>ユーザー2のプロフィールページへ</button>
      <button onClick={() => history.push("/profile/3")}>ユーザー3のプロフィールページへ</button>
      </div>
    </>
  )
}

export default HomePage