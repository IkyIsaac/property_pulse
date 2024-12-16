import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import Link from 'next/link';
import React from 'react'

//you can write a custom metadata for a specific page
// export const metadata={
//   title:'Homepage| PropertyPulse'
// }

const HomePage = () => {
  return (
    <>
    <Hero/>
    <InfoBoxes/>
    </>
  )
}

export default HomePage;