import React from 'react'

export default function Home() {
  return (
    <>
      <div className=' bg-green-200 w-full '>
        <div className='bg-red-500 flex mx-auto h-[312px] w-[1200px]'>
          <div className=' w-[500px]'>
            <img src={require("../images/hello.png")} alt='i' className='mx-auto h-auto w-[340px] overflow-hidden' />
          </div>
          <div className='w-full'>
            <div className='text-4xl'>Make good things together.</div>
          </div>
        </div>
      </div>
    </>
  )
}
