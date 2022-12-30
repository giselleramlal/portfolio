import * as React from 'react'
import Layout from '../components/layout'

const   ProjectsPage = () => {
  return (
    <Layout>
        <div className='text-white'>
            
            <div className='text-3xl p-3 text-center'>Some Projects I've worked on</div>
            <div>Chess</div>
            <div>SE Capstone Website</div>
            <div>Experience during co-ops</div>
            <p className='text-l text-center my-3'>Here are a few technologies I’ve been working with recently: </p>
            <ul className='flex flex-row justify-center'>
                <li className='p-4'>JavaScript</li>
                <li className='border-l border-white p-4'>TypeScript</li>
                <li className='border-l border-white p-4'> React</li>
                <li className='border-l border-white p-4'> Node.js</li>
                <li className='border-l border-white p-4'>TailwindCSS</li>
            </ul>
        </div>
    </Layout>
  )
}

export const Head = () => <title>Projects</title>

export default ProjectsPage
