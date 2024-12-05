import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Register = () => {
  const formData = z
    .object({
      name: z
        .string()
        .min(3, { message: 'Name must contain atleast 3 characters' }),
      email: z
        .string()
        .email({ message: 'Please enter a valid email address' }),
      password: z
        .string()
        .min(8, { message: 'Password must contain atleast 8 characters' }),
      cpass: z.string().min(8, {
        message: 'Confirm Password must contain atleast 8 characters'
      }),
      phoneNo: z.string().regex(/^[0-9]{10}$/, {
        message: 'Phone number must be exactly 10 digits'
      })
    })
    .refine(data => data.password === data.cpass, {
      path: ['cpass'],
      message: 'Password & Confirm Password should be same'
    })

  // const form = useForm({
  //   resolver: zodResolver(formData),
  //   defaultValue: {
  //     fname: '',
  //     lname: '',
  //     email: '',
  //     password: '',
  //     cpass: ''
  //   }
  // })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formData)
  })

  const formHandler = values => {
    console.log(values)
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
          <form
            method='POST'
            className='space-y-6'
            onSubmit={handleSubmit(formHandler)}
          >
            <div>
              <label
                htmlFor='name'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Name
              </label>
              <div className='mt-2'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  autoComplete='name'
                  placeholder='Enter your name'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  {...register('name')}
                />
                {errors.name && <p>{errors.name.message}</p>}
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
                  {...register('email')}
                />
                {errors.email && <p>{errors.email.message}</p>}
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
                  {...register('password')}
                />
                {errors.password && <p>{errors.password.message}</p>}
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
                  {...register('cpass')}
                />
                {errors.cpass && <p>{errors.cpass.message}</p>}
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
                  {...register("phoneNo")}
                />
                 {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
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
            Already have an account?{' '}
            <a
              href='/login'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
            >
              Login Here
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
