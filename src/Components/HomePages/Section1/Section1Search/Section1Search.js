import React from 'react'
import Seaction1SearchNavbar from "./Section1SearchNavbar/Seaction1SearchNavbar"
import Section1SearchInput from "./Section1SearchInput/Section1SearchInput"
function Section1Search() {
  return (
    <div className='w-full flex flex-wrap justify-center items-center gap-9'>
      <Section1SearchInput />
      <Seaction1SearchNavbar />
    </div>
  )
}

export default Section1Search
