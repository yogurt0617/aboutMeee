import { useState,useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './App.css'
import "moment/dist/locale/zh-tw"
import moment from 'moment' 
import "animate.css"
moment.locale("zh-tw")

function App() {
  const [yogurt,setYogurt] = useState("こんにちは！yogurtの自己紹介です。")
  
  const[nowTime,setNowTime] = useState(moment().format("YYYY MMM Do HH:mm:ss (ddd)"))
  const[nowHour,setNowHour] = useState(moment().format("HH"))
  useEffect(() =>{
    const timer = setInterval(()=>{
      setNowTime(moment().format("YYYY MMM Do HH:mm:ss (ddd)"))
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
      setYogurt("おはよう！yogurtの自己紹介です。")
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
    <div>
      <TypeAnimation
        key={yogurt}  
        sequence={[yogurt, 1000]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize:'clamp(2.5rem, 4.5vw, 3.5rem)', display: 'inline-block',fontWeight:"bolder"}}
      />
    </div>
      <h1>關於我</h1>

    <div className='selfCare'>

      <div id='img'>
      <img src="image/owo.jpg" alt="yogurt" id='me'/>
      <h2>yogurt(優格)</h2>
      </div>
      <div id='info'>
      <p>學校: <a href="https://www.nutc.edu.tw/" style={{color:"#ffff",fontWeight:"normal"}}>臺中科技大學NUTC</a> 資管科IM</p>
      <p>生日:2007/06/17 18y(雙子座)</p>
      <p>E-Mail:<a href="mailto:20070617TimmyAlan@gmail.com" target='_block' style={{color:"#ffff"}}>20070617TimmyAlan@gmail.com</a></p>
      <p>專長:社會科、日文、說故事、料理</p>
      <p>興趣:料理、說話、唱歌、聽故事、看動漫、問chatGPT一堆哲學問題</p>
      <p>mbti:ENFP-A 快樂小狗</p>
      <p>去過的國家:0 (想去:日本跟土耳其)</p>
      </div>
      </div>

    <div>
      <p>2025/10/2 好欸我成功部屬了放上我的電神師傅的github</p>
      <a href="https://github.com/yuzen9622" target='_block' className='friend'>友達の站:Zn</a>
    </div>
      <h3>本網頁還在開發中</h3>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>我是湊行數的</p>
      <p>為了測試我的header正常，我湊了40行</p>
      </main>
    </>
  )
}

export default App
