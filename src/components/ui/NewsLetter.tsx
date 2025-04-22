
import React from 'react'
import { Input } from './input'
import { Button } from './button'

const NewsLetter = () => {
  return (
    <div className='bg-gray-800 text-white dark:bg-gray-800 dark:text-white 
    py-12 rounded-md'>

      {/* Header*/}

      <div className='text-center'>
        <h2 className='text-2xl font-bold'>Stay Updated</h2>
        <p className='mt-4 text-lg'>
          Subscribe to our newsletter and get the latest updates directly
          in your inbox
        </p>

        {/* Form */}

        <form className='mt-8 sm:max-w-sm mx-auto sm:flex sm:justify-center '>
          <div className='flex-1'>
            <Input type='email' placeholder='Enter your email'
              className='w-3/4 dark:bg-gray-100 dark:text-gray-800
            dark:border-gray-800 mx-auto ' required />
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-4'>
            <Button>
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default NewsLetter
