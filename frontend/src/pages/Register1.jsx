import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpass: '',
    phoneNo: ''
  })

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault() // Prevent default form submission
    console.log('Form Data:', formData)
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            alt='Your Company'
            src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
            className='mx-auto h-10 w-auto'
          />
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Sign up to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form method='POST' className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='fname'
                className='block text-sm/6 font-medium text-gray-900'
              >
                First Name
              </label>
              <div className='mt-2'>
                <input
                  id='fname'
                  name='fname'
                  type='text'
                  required
                  autoComplete='fname'
                  placeholder='Enter your first name'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='lname'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Last Name
              </label>
              <div className='mt-2'>
                <input
                  id='lname'
                  name='lname'
                  type='text'
                  required
                  autoComplete='lname'
                  placeholder='Enter your last name'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  autoComplete='email'
                  placeholder='Enter your email'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  Password
                </label>
                {/* <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  autoComplete='current-password'
                  placeholder='Enter your password'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='cpass'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  Confirm Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='cpass'
                  name='cpass'
                  type='password'
                  required
                  autoComplete='cpass'
                  placeholder='Enter your confirm password'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  value={formData.cpass}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='phoneNo'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Phone Number
              </label>
              <div className='mt-2'>
                <input
                  id='phoneNo'
                  name='phoneNo'
                  type='tel'
                  required
                  autoComplete='off'
                  pattern='[0-9]{10}'
                  placeholder='Enter 10-digit phone number'
                  // maxLength="10"
                  // inputMode="numeric"
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Register
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Already have an account? -{' '}
            <a
              href='/login'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
