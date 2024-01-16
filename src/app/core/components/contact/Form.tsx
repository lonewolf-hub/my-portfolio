import React from 'react'

const Form = () => {
  return (
   
         <div className='col-span-3 w-full h-auto shadow-md shadow-gray-600 rounded-xl lg:p-4 bg-bodyColor'>
            <div className='p-4' >

              <form action="https://getform.io/f/0ffba336-c158-4b07-88b4-5913264bb217"
                method="POST"
                encType="multipart/form-data"
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Name
                    </label>
                    <input name='name' className='border-2 rounded-lg p-3 flex border-gray-500 bg-transparent' type="text" required />
                  </div>
                  <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>
                    EMAIL
                  </label>
                  <input name='email' className='border-2 rounded-lg p-3 flex border-gray-500 bg-transparent' type="email" required />

                </div>
                </div>

            

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>
                    SUBJECT
                  </label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-500 bg-transparent' type="TEXT" required />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-500 bg-transparent'
                    rows={10}
                    name='message'
                  ></textarea>
                </div>

                <button className=' hover:scale-105 ease-in duration-300 w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>

          </div>
  
  )
}

export default Form
