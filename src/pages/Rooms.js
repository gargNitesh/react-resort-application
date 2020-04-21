import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'
const Rooms=()=> {
    return(
        <div>
       <Hero hero="roomsHero">{/*main concept in css*/}
       <Banner title="Our Rooms">
           <Link to="/" className="btn-primary">
               return Home
               </Link>
       </Banner>
       </Hero>
       <RoomsContainer/>
       </div>
    )
}
export default Rooms