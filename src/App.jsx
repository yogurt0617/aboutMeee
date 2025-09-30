import { useState } from 'react'
import './App.css'

function App() {
  const [yogurt,setYogurt] = useState("ここはyogurtユーグルトの自己紹介です！")

  return (
    <>
      <h1>{yogurt}</h1>
      <h2>學習中....</h2>
      <p>這裡還什麼都沒有</p>
    </>
  )
}

export default App
