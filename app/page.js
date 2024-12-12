import Link from 'next/link';
import React from 'react'

//you can write a custom metadata for a specific page
// export const metadata={
//   title:'Homepage| PropertyPulse'
// }

const HomePage = () => {
  return (
    <div> 
      <h1 className='text-3xl'>Welcome</h1>
      <Link href='/properties'>Show Properties</Link>
    </div>
  )
}

export default HomePage;