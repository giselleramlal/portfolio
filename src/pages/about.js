import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <div className='text-white max-w-3xl m-auto pt-12'>
        <div className='text-3xl p-2 text-center mb-4'>How did I get here?</div>
        <p className='text-l border border-cyan-400 p-3'>Hi there! I'm Giselle. I was born and raised on the twin island republic of Trinidad and Tobago.
            I moved to Canada for University, going from the tropics to actually having Winters was the hardest transition of my life!
            Software engineering became an integral part of my life ever since I knew what it was (which was very late FYI).
            Growing up in a third-world country to a modest family, I didn't know coding existed till I was about 14 years old, and even then, my resources were limited.
            I nevertheless continued to pursue it and eventually made it here.
            
        </p>
        <div className='text-3xl p-2 text-center mb-4'>What am I currently doing?</div>
        <p className='text-l border border-cyan-400 p-3'>I am currently in my third year of a Bachelor's of Software Engineering, expecting to graduate in 2025.
            I am also pursuing a Diploma in Sustainability as i have a keen interest in Climate Change and I believe technology can be used to solve some of our Climate problems.</p>
        <div className='text-3xl p-2 text-center mb-4'>Some of my interestes include..</div>
        <p className='text-l border border-cyan-400 p-3'>Reading, going to the Gym, watching Netflix and Painting, though I'm not great at it.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage