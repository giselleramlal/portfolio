import * as React from 'react'
import Layout from '../components/layout'
import cheer from '../images/cheer.png'

const PassionsPage = () => {
  return (
    <Layout>
      <div className='text-white max-w-3xl m-auto pt-12 text-center'>
        <div className='text-3xl py-2'>Cheerleading</div>
        <p className='py-3'>I grew up dancing, I did Modern, Hip-Hop, everything you could think of but eventually I wanted something new.
          I tried Cheerleading in High school, it turned out to be the perfect combination for Dance and my love of weightlifting.
          When I graduated I wasn't sure if I would ever get back into it. The Waterloo Warriors Cheerleading team has been my home since 2021.
          The positivity both my team and coaches radiate help me to regulate and counteract the stress caused by my degree and improves my time management.
          I've now competed twice, both provincially and nationally with the team and I plan to compete internationally in 2023.
        </p>
        <img src={cheer} alt="OCF Provincials 2022"/>
        <div className='text-3xl py-2'>Climate Action</div>
        <p>My passionate views on Climate Change and Global Warming stems from growing up in the Caribbean and slowly noticing the temperature increases, dead Coral Reefs and increased natural disasters while growing up.
          As the planet continues to suffer barely anything is being done by the large corporations to reverse these changes and mitigate further damages.
          I believe tech has an important role to play in the coming years if we want to reduce carbon emissions and let our planet thrive again.
          This influenced my decision to pursue a Diploma in Sustainability alongside my Software Engineering Degree to continue researching paths in which these two fields intersect.
          In the future, I hope I can be a part of the development of software to combat Climate change issues. If you'd like to learn more about Climate Change,
           click <a href='https://climate.nasa.gov/causes/'>here</a> for some of the causes and <a href='https://www.iadb.org/en/ove/climate-change-caribbean-small-island-states'>here</a> for some of the effects on the Caribbean.
        </p>
        <div className='text-3xl py-2'>Animal Rescue</div>
        <p>A rescue I think deserves more support: <a href='https://kitchenerstraycatrescue.org/'>Kitchener Stray Cat Resue</a></p>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Passions and Sport</title>

export default PassionsPage