import * as React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl h-3/4 p-24">
        <div className="text-cyan-400">Hi, my name is </div>
        <div className="text-8xl py-5 text-slate-300"> Giselle Ramlal.</div>
        <p className="text-xl text-slate-400">I am a student at the University of Waterloo, currently persuing a Bachelor's of Software Engineering with a Diploma in Sustainability.</p>
        <button className="border border-cyan-400 rounded p-4 text-xl my-4 text-slate-300">Get to know me</button>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
