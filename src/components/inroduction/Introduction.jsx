import React from 'react'
import cloud from "../../assets/cloud.png"
import './Introduction.scss'


const Introduction = () => {
  return (
    <section className='container intro --mb'>
        <>
            <div>
                <h1>Who we are.</h1>
                <p>
                    &nbsp; &nbsp;TransLogistic is a worldwide transport and logistics company 
                    and provides added-value services in the areas of road transport, 
                    air and sea freight, logistics and customs and forwarding services.
                
                
                    As a fully integrated transport and logistics provider, TransLogic is 
                    able to make your logistics network more cost-efficient, whatever 
                    your business sector. Our goal is to develop customized, high-quality, 
                    large-scale logistical projects for our customers in order to provide a 
                    definite competitive advantage.
                </p>

                <div className='intro-stats'>
                    <div>
                        <h1>5</h1>
                        <p>years of experience</p>
                    </div>
                    <div>
                        <h1>47</h1>
                        <p>professional workers</p>
                    </div>
                    <div>
                        <h1>37</h1>
                        <p>countries covered</p>
                    </div>
                    <div>
                        <h1>286</h1>
                        <p>offices worldwide</p>
                    </div>
                </div>
            </div>

        
            <img src={cloud}/>
        </>
    </section>
  )
}

export default Introduction