"use client"
import React from 'react'
import Link from 'next/link'
import { ForgetPassword } from '@/components/Layout/ForgetPassword/ForgetPassword';
import { useState } from 'react';

export function Login() {

  
  const [mostrarPasswordReset, setMostrarPasswordReset] = useState(false);

  const togglePasswordReset = () => {
    setMostrarPasswordReset(!mostrarPasswordReset);
  };
  return (
    <div>
       {mostrarPasswordReset ? (
        <ForgetPassword/>
      ) : (
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">Virtual Campus</h1>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>
          <div className="relative mb-4">
            <label htmlFor="full-user" className="leading-7 text-sm text-gray-600">User</label>
            <input type="number" id="full-user" user="full-user" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" user="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
         
            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Log in</button>
        
          
            <button className="text-indigo-500 inline-flex items-center"  onClick={togglePasswordReset}>Forget Password?
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24"></svg>
              
            </button>
          
        </div>
      </div>
    </section>

        )}
    </div>
    
  )
}
