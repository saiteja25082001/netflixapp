import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_small.jpg' alt='img'></img>

        </div>
        <form className='absolute   w-3/12 p-12 bg-black my-64 mx-auto right-0 left-0 bg-opacity-75 rounded-lg'>
        <h1 className='font-bold text-3xl text-white py-4' > Sign in</h1>
            <input type='text' placeholder='EmailAddress' className='p-3 my-2  w-full bg-slate-700 '/>
            <input type='password' placeholder='password' className='p-3 my-2  w-full  bg-slate-700 ' />
            <button className='p-4 my-4 text-white bg-red-600 w-full rounded-lg'>Sign In</button>
            <p className='text-white' > New to Netflix? Sign up now</p>
        </form>
    </div>
  )
}

export default Login