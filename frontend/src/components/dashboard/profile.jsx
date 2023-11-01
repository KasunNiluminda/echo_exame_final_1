import React from 'react'
import UploadIcon from '../../assets/images/documentUpload.png'

function Institute() {
  return (
    <>
    <div className='bg-secondary'>
        <div className='my-4'>
            <h3 className='text-center text-primary capitalize'>institution name</h3>
        </div>
        <div className='h-[3px] bg-primary w-full'></div>
        <div className='grid grid-cols-2 justify-between py-5 px-32'>
            <div>
                <div>
                    <p className='capitalize font-bold my-5'>change profile photo</p>
                    <div className='rounded-full bg-[#d4d4d4] h-36 w-36' />
                </div>
                <div className='my-16'>
                    <p className='capitalize font-bold mb-5 '>Upload custom Logo</p>
                    <div className='rounded-lg bg-[#d4d4d4] h-36 w-36 py-8 pl-9'><img src={UploadIcon} className="" /></div>
                </div>
                <div className='mb-16'>
                    <p className='capitalize font-bold mb-5 '>Upload custom login picture</p>
                    <div className='rounded-lg bg-[#d4d4d4] h-40 w-40 py-9 px-11'><img src={UploadIcon} className="" /></div>
                </div>

            </div>
            <div>
                <form action="">
                    <p className='capitalize font-bold my-5'>current password</p>
                    <div>
                        <label htmlFor="current password" className='capitalize font-bold'>current password</label> <br />
                        <input type="password" className='bg-transparent border-b border-b-[#000000] w-96' /><br />
                    </div>

                    <div className='my-10'>
                        <label htmlFor="current password" className='capitalize font-bold'>new password</label> <br />
                        <input type="password" className='bg-transparent border-b border-b-[#000000] w-96' /><br />
                    </div>

                    <div>
                        <label htmlFor="current password" className='capitalize font-bold'>confirm new password</label> <br />
                        <input type="password" className='bg-transparent border-b border-b-[#000000] w-96' /><br />
                    </div>

                    <button className='mt-16 bg-primary capitalize roboto text-accent text-base py-2 px-8 rounded-full font-semibold'>submit</button>
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Institute
