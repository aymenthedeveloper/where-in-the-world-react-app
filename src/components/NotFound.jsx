import React from 'react'
import { Link } from 'react-router'

export default function ({message="Page Not Found!"}) {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>{message}</p>
      <Link to={"/"}>Go Back Home</Link>
    </div>
  )
}
