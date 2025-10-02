import { useState } from 'react'
import './App.css'

function App() {
  const [yogurt,setYogurt] = useState("ここはyogurtユーグルトの自己紹介です！")

  return (
    <>
      <h1>{yogurt}</h1>
      <h2>學習中....</h2>
      <p>這裡還什麼都沒有</p>
      <p>2025/10/2 好欸我成部屬了放上我的電神師父的github</p>
      <a href="https://github.com/yuzen9622" >電神:Zn</a>
    </>
  )
}

export default App
