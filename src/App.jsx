import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import "moment/dist/locale/zh-tw"
import moment from 'moment' 
moment.locale("zh-tw")

function App() {
  const [yogurt,setYogurt] = useState("こんにちは！yogurtの自己紹介です。")
  
  const[nowTime,setNowTime] = useState(moment().format("YYYY MMMM Do a HH:mm:ss"))
  const[nowHour,setNowHour] = useState(moment().format("HH"))

  useEffect(() =>{
    const timer = setInterval(()=>{
      setNowTime(moment().format("YYYY MMMM Do a HH:mm:ss"))
    },1000)
    const timer2 = setInterval(()=>{
      setNowHour(moment().format("HH"))
    },3600000)
    return() =>{
      clearInterval(timer)
      clearInterval(timer2)
    }
  },[])
  useEffect(() =>{
    if(nowHour === "05"||nowHour === "06"||nowHour === "07"||nowHour === "08"||nowHour === "09"||nowHour === "10"){
      setYogurt("おはちう！yogurtの自己紹介です。")
    }else if(nowHour === "11"||nowHour === "12"||nowHour === "13"||nowHour === "14"||nowHour === "15"||nowHour === "16"){
      setYogurt("こんにちは！yogurtの自己紹介です。")
    }else{
      setYogurt("こんばんは！yogurtの自己紹介です。")
    }
  },[nowHour])
  
  

  return (
    <>
    <header>
      <p id='nowTime'>{nowTime}</p>
    </header>

    <main>
      <h1>{yogurt}</h1>
      <h2>學習中....</h2>
      <p>這裡還什麼都沒有</p>
      <button onClick={()=>setNowHour("06")}>早上</button>
      <button onClick={()=>setNowHour("12")}>中午</button>
      <button onClick={()=>setNowHour("00")}>晚上</button>
      <p>上面按鈕是測試用的下一次更新就會del掉了</p>
      <p>2025/10/2 好欸我成功部屬了放上我的電神師傅的github</p>
      <a href="https://github.com/yuzen9622" >友站:Zn</a>
      </main>
    </>
  )
}

export default App
