import './App.scss';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState(true)
  console.log(mode);
  
  return (  
    <div className={mode ? "App light": 'App dark'}>
            <section className={mode ? "App light": 'App dark'}>
    <div className='center'>
      <h1>Login</h1>
      <form method={mode ? "App light": 'App dark'}>
      <div className='txt_field'>
        <input className={mode ? "App light": 'App dark'} type="text"  required/>
        <span></span>
        <label >Username</label>
      </div>
      <div className='txt_field'>
        <input className={mode ? "App light": 'App dark'} type="password"  required/>
        <span></span>
        <label >Password</label>
      </div> 
      <div className='pass'>Forgot Password?</div>
  <button className={mode ? "App light": 'App dark'}> LOGIN </button>
    <div className='singup_link'>
    Not a member? <a href="#">Singup</a>
  </div>
      </form>
      </div>
     <section className='wees'>
      <button className={mode ? "App light": 'App dark'}  onClick={()=> setMode(!mode)}>
     <img  className='img' width='50' src= {mode ? "https://www.freeiconspng.com/thumbs/crescent-moon-png/black-crescent-moon-png-2.png":
      ""} alt="" /> 
      <img  className='img2' width='60' src= {mode ? "":
      "https://pngfre.com/wp-content/uploads/sun-png-from-pngfre-8-1024x614.png"} alt="" />
    </button>
</section>
 </section>
  </div>
   );
}

export default App;