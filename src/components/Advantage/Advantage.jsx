import React from 'react'
import "./advantage.css"
import { GiJetFighter } from "react-icons/gi"
import { FiPhoneCall } from "react-icons/fi"
import { MdOutlineMiscellaneousServices, MdPriceChange } from "react-icons/md"

const advantage = [
    {logo: <GiJetFighter/>, heading: 'Fast Delivery', details: 'Cooperating with TransLogic, you are guaranteed to have your cargo delivered fast and secure.'},
    {logo: <FiPhoneCall/>, heading: '24/7 Support', details: 'We provide you with 27/7 support, which gives you an opportunity to track your cargo on its way.'},
    {logo: <MdOutlineMiscellaneousServices/>, heading: 'Secured Services', details: 'We provide all our clients with professional transportation services on the highest security level.'},
    {logo: <MdPriceChange/>, heading: 'Affordable Prices', details: 'We have the lowest prices on the market and offer affordable solutions tailored to your business.'}
]

const Advantage = () => {
  return (
    <section className=' adv'>
        <div>
            <h1>What we offer.</h1>
            <div className='ads-icons' >
               {advantage.map(({logo, heading, details, i}) => (

                    <div key={i}>
                        <h2>{logo}</h2>
                        <h2>{heading}</h2>
                        <h5>{details}</h5>
                    </div>
               ))}
               
            </div>
        </div>
    </section>
  )
}

export default Advantage