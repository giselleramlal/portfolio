import * as React from 'react'
import Layout from '../components/layout'

const PassionsPage = () => {
  return (
    <Layout>
      <div className='text-white p-24'>
        <div className='text-3xl py-2'>Cheerleading</div>
        <p className='py-3'>I grew up dancing, I did Modern, Hip-Hop, everything you could think of but eventually I wanted something new.
          I tried Cheerleading in High school, it turned out to be the perfect combination for Dance and my love of weightlifting.
          When I graduated I was not sure if I would ever get back into it. The Waterloo Warriors Cheerleading team has been my home since 2021.
          The positivity both my team and coaches radiate help me to regulate and counteract the stress caused by my degree and improves my time management.
          I've now competed twice, both provincially and nationally with the team and I plan to compete internationally in 2023.
        </p>
        <div className='text-3xl py-2'>Climate Action</div>
        <p></p>
        <div className='text-3xl py-2'>Animal Rescue</div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Passions and Sport</title>

export default PassionsPage