import React from 'react' 

function Login() {
  return (
    <div className="gg-login-wrap">
    <div className='gg-login mx-auto border'>
        <div className="flex">
          <div className='w-1/2'>
<img src="./images/gg.png" alt="Login" />
          </div>
<div className="w-1/2">
    <div className="p-12">
        <img src="./images/FASCO.png" className='w-[150px]' alt="logo" />
        <div className='pt-40'>
        <label className='block'>
            <input type="text" placeholder='Enter Your Username' className='border-b w-[350px] outline-none' />
        </label>
        <label className='block pt-8 mb-8'>
        <input type="text" placeholder='Enter Your Password' className='border-b w-[350px] outline-none' />
        </label>
        <button className='bg-[#5b86e5] w-[350px] text-white p-3 leading-4 rounded'>Submit</button>
    </div>
    </div>
    
</div>
        </div>

    </div>
    </div>
  )
}

export default Login
