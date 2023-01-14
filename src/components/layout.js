import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ pageTitle, children }) => {
  return (
    <div className='bg-teal1 h-full min-h-screen p-5'>
      <div className='flex flex-row-reverse bg-teal1 text-slate-300 p-4 mt-4'>
        <ul class="flex items-center">
          <li class="mr-6">
            <Link class="" to="/about">About</Link>
          </li>
          <li class="mr-6">
            <Link class="" to="/projects">Projects</Link>
          </li>
          <li class="mr-6">
            <Link class="" to="/passions">Sport and Passions</Link>
          </li>
          <li class="mr-6">
            <Link class="" to="/contact">Contact</Link>
          </li>
          <li class="mr-6">
            <button className='rounded bg-cyan-600 p-2'>Resume</button>
          </li>
        </ul>
      </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Navbar