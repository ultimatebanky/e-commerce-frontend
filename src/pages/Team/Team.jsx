import './team.css'
import banky from '../../assets/banky.jpg'
import rokeebah from '../../assets/rokeebah.jpg'
import alfa from '../../assets/alfa.jpg'
import bayo from '../../assets/bayo.jpg'


const Team = () => {
  return (
    <section className='a_section'>
        <div className='aero-header'>
            <div className='content'>
            
                <div className='aero-section team-section'>
                    <div className='aero-first team'>
                        <h2>REMIGHT_LOGISTICS.</h2>
                        <h1>Reliable Freight and <br/>Transportation Services.</h1>
                        <h3>Logistics Solution For Your Successful Business.</h3>
                    </div>
                </div>
            </div>    
        </div>

        <div className='team-two'>
            <h3>
            We provide first class service tailored to your shipping needs by cultivating a supreme effort to achieve and deliver world class logistics knowing that the freight forwarding and shipping sector is a fast rising sector.</h3>
        </div>

        <div>
            <div className='Our-team'>
                <hr/>
                <h1 className='ads-first' style={{textAlign: 'center'}}>Our Great Team</h1>
                <div className='Our-teamImgs'>
                    <div>
                        <img src={banky}/>
                        <h2>Bankole Remilekun</h2>
                        <h4>CEO.</h4>
                    </div>
                    <div>
                    <img src={rokeebah}/>
                        <h2>Olajide Rokeebah</h2>
                        <h4>Logistics Coodinator</h4>
                    </div>
                    <div>
                    <img src={bayo}/>
                        <h2>Adebayo Ademola</h2>
                        <h4>Operation Manager</h4>
                    </div>
                    <div>
                    <img src={alfa}/>
                        <h2>AbdulMumin Sodiq</h2>
                        <h4>Technology. Officer</h4>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Team