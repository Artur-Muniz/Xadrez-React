// import React from 'react'
import Header from "../../components/HomeComponents/Header";
import Banner from "../../components/HomeComponents/Banner";
import Banner2 from "../../components/HomeComponents/Banner2";
import Third_page from "../../components/HomeComponents/Third-Page";

function Home () {
  return (
    <div className='app'>
        <Header />
        <Banner />
        <Banner2 />
        <Third_page />
    </div>
  )
}

export default Home