import React from 'react'
import { Link } from 'react-router-dom'
import { ShowOnLogin, ShowOnLogout } from '../protect/HiddenLink'
import './Quotation.scss'

const Quotation = () => {
  return (
    <section className='container --mt'>
    <div className='quotation'>
        <div>
            <h1 className='--mb'>INQUIRY</h1>
            <p>Send us your inquiry - we are pleased to send you an offer without obligation.<br/> Our solutions are tailored to your individual requirements.</p>
            <ShowOnLogout>
              <small>Please, login to make an inquiry</small>
            </ShowOnLogout>
        </div>
        <ShowOnLogin>
          <button className='--btn --btn-danger'><Link to='/createOrder'>Send Request</Link></button>
        </ShowOnLogin>
    </div>
    </section>
  )
}

export default Quotation