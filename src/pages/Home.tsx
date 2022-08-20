import React from 'react'


export default function Home() {
  return (
    <>
      <div className=' m-3 bg-green-200'>
        <div className='bg-red-500 flex mx-auto h-[280px] max-w-[1200]'>
          <div className=' w-[280px] bg-images'>
            <img src={require("../images/hello.png")} alt='i' className='w-full mx-auto h-auto w-[auto] sm:w-block overflow-hidden' />
          </div>
          <div className='w-auto'>
            <div className='text-4xl'>Make good things together.</div>
          </div>
        </div>
      </div>
    </>
  )
}
