import React from 'react'

export default function Home() {
  return (
    <>
                          {/* Header */}
      <div className=' bg-slate-500 text-white text-center py-[20px]'>
        <p className=' font-mono font-bold text-2xl'>Atm Machine</p>
      </div>
                        {/* Mid-Section */}
      <div className='bg-orange-500 w-full h-[521px]'>

        <div className=' bg-black w-[550px] h-[400px] flex justify-between border-white border-4 absolute mt-[50px] ml-[150px]'>
          <div className='w-[80px] h-[400px]'>
             <button className='border-white border-4 w-[50px] h-[50px] ml-[10px] mt-[30px]'><p className='text-white'>1</p></button>
             <button className='border-white border-4 w-[50px] h-[50px] ml-[10px] mt-[70px]'><p className='text-white'>2</p></button>
             <button className='border-white border-4 w-[50px] h-[50px] ml-[10px] mt-[90px]'><p className='text-white'>3</p></button>
          </div>
          <div className='w-[80px] h-[400px]'>
             <button className='border-white border-4 w-[50px] h-[50px] ml-[19px] mt-[30px]'><p className='text-white'>4</p></button>
             <button className='border-white border-4 w-[50px] h-[50px] ml-[19px] mt-[70px]'><p className='text-white'>5</p></button>
             <button className='border-white border-4 w-[50px] h-[50px] ml-[19px] mt-[90px]'><p className='text-white'>6</p></button>
          </div>
        </div>

        <div className='bg-black w-[300px] cursor-pointer h-[80px] ml-[800px] mt-[50px] absolute border-white border-4'>
          <p className='text-white text-center pt-[19px]'>Enter The Card Here</p>
        </div>
        <div className='bg-black w-[300px] cursor-pointer h-[80px] ml-[800px] mt-[250px] absolute border-white border-4'>
          <p className='text-white text-center pt-[19px]'>Recive Your Receipt</p>
        </div>
      </div>
    </>
  )
}
