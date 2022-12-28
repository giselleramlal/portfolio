import * as React from "react"

const IndexPage = () => {
  return (
    <div className="bg-teal3">
      <div>My name is </div>
      <h1>Giselle Ramlal.</h1>
      <p>A lil thing about me...</p>
      <button className="bg-teal5 p-2 rounded border-2 border-teal1">Click me</button>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
