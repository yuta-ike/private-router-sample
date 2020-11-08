import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ProfilePage = () => {
  const history = useHistory()
  const {userId} = useParams<{userId: string}>()
  return (
    <div>
      <h1>プロフィール</h1>
      ユーザー{userId}のプロフィールページです。ログインしていないユーザは見れません。
      <button onClick={() => history.push("/")}>ホームへ戻る</button>
    </div>
  )
}

export default ProfilePage