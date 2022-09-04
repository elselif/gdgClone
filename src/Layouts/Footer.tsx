export default function Footer() {
  return (
    <div className='px-32 pb-10  tablex:hidden  '>
        <div className='my-4 '>
        <hr></hr>
        </div>
        <div className='flex justify-start'>
        <h1 className='text-xl'>Follow Us: </h1>
        </div>
        <div className='my-4'>
        <hr></hr>
        </div>
        
        <div className='flex flex-row justify-start space-x-64' >
            <h1 className='text-xl '>About</h1>
            <h1 className='text-xl'>Resources</h1>
            <h1 className='text-xl'>Developer Console</h1>
        </div>
        <div className='my-4'>
        <hr></hr>
        </div>
        <div className='flex justify-between'>
            <h1 className='text-3xl'>GDG Istanbul</h1>
            <p>Based on Project Aura</p>
        </div>
    </div>

  )
}
