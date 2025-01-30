import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recommended from './Recommended'
import News from './News'

export default function Home() {
  return (
    <>
        <Banner/>
        <TopSeller/>
        <Recommended/>
        <News/>
    </>
  )
}
