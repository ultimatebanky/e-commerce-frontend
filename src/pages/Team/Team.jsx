import './team.css'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiOutlineInstagram } from "react-icons/ai"
import { TiSocialLinkedin } from "react-icons/ti"
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
                        <h2>REMIGHT_LOGISTICS</h2>
                        <h1>Reliable Freight and <br/>Transportation Services</h1>
                        <h3>Logistics Solution For Your Successful Business</h3>
                    </div>
                </div>
            </div>    
        </div>

        <div className='team-two'>
            <h2>
                <strong>Join Team of Professionals - Become a Part of TransLogic</strong>
            </h2>
            <h3>
                We cherish active specialists willing to work on our company. If you are enthusiastic about transportation and ready to make impactful decisions, feel free to send us your CV. We are interested in hiring professionals for a long term.
            </h3>
        </div>

        <div>
            <div className='Our-team'>
                <hr/>
                <h1 className='ads-first' style={{textAlign: 'center'}}>Our Great Team</h1>
                <div className='Our-teamImgs'>
                    <div>
                        <img src={banky}/>
                        <h2>Remight Bankole</h2>
                        <h4>CEO. Founder</h4>
                        {/* <div className='About-icons'>
                            <AiOutlineTwitter size={25}/>
                            <AiOutlineGooglePlus size={25}/>
                            <TiSocialLinkedin size={25}/>
                            <AiOutlineInstagram size={25}/>
                        </div> */}
                    </div>
                    <div>
                    <img src={rokeebah}/>
                        <h2>Olajide Rokeebah</h2>
                        <h4>Logistics Coodinator</h4>
                        {/* <div className='About-icons'>
                            <AiOutlineTwitter size={25}/>
                            <AiOutlineInstagram size={25}/>
                            <AiOutlineGooglePlus size={25}/>
                            <TiSocialLinkedin size={25}/>
                        </div> */}
                    </div>
                    <div>
                    <img src={bayo}/>
                        <h2>Adebayo Ademola</h2>
                        <h4>Operation Manager</h4>
                        {/* <div className='About-icons'>
                            <TiSocialLinkedin size={25}/>
                            <AiOutlineGooglePlus size={25}/>
                            <AiOutlineTwitter size={25}/>
                            <AiOutlineInstagram size={25}/>
                        </div> */}
                    </div>
                    <div>
                    <img src={alfa}/>
                        <h2>AbdulMumin Sodiq</h2>
                        <h4>Technology. Officer</h4>
                        {/* <div className='About-icons'>
                            <AiOutlineGooglePlus size={25}/>
                            <AiOutlineTwitter size={25}/>
                            <AiOutlineInstagram size={25}/>
                            <TiSocialLinkedin size={25}/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Team