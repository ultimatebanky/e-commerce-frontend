import './about.css'

const about = [
    {head: 'GLOBAL', content:'We span major hubs on all continents providing a seamless supply chain solution focused on quality systems throughout. we operate strategically located transportation, distribution and value-added service centers throughout North America, Europe and Asia.'},
    {head: 'OUR VALUE', content: 'Our corporate values aim to establish an organization with a passion for excellent service delivery and best industry practices. We provide first class service tailored to your shipping needs by cultivating a supreme effort to achieve and deliver world class logistics knowing that the freight forwarding and shipping sector is a fast rising sector.'},
    {head: 'WHY US?', content: 'With a widespread network and strategic partnerships worldwide, we ensure your shipments reach their destinations efficiently, whether theyre local or international, We understand that every business is unique. Our team tailors logistics solutions to meet your specific requirements and objectives.'},
]
const About = () => {
  return (
    <div className='about-main container'>
        <div className='about-page'>
            {about.map(({head, content, info, i}) => (
                <div key={i}>
            
                    <h1>{head}</h1>
                
                    <p>{content}</p>
                </div>
            ))}
        </div>

        <div className='about-side'>
            <div className='about-one'>
                <div className='about-subsection'>
                    <h2>Our Mission</h2>
                </div>
                <p>At Remight Logistics, our mission is to deliver excellence in logistics services by combining cutting-edge technology with a commitment to customer satisfaction.</p>
                <p>
                We are dedicated to providing seamless transportation and supply chain solutions that empower businesses to thrive in today's global marketplace.
                </p>
            </div>

            <div className='about-one  two'>
                <div className='about-percent'>
                    <h4>Air Fright</h4>
                    <h4>100%</h4>
                </div>
                <hr className='about-onehr'/>
                <div className='about-percent'>
                    <h4>Ocean Fright</h4>
                    <h4>90%</h4>
                </div>
                <hr className='about-twohr'/>
                <div className='about-percent'>
                    <h4>Road Fright</h4>
                    <h4>80%</h4>
                </div>
                <hr className='about-threehr'/>
                <div className='about-percent'>
                    <h4>Warehousing</h4>
                    <h4>85%</h4>
                </div>
                <hr className='about-fourhr'/>
                <div className='about-percent'>
                    <h4>Expenditor services</h4>
                    <h4>70%</h4>
                </div>
                <hr className='about-fivehr'/>
            </div>
        </div>
    </div>
  )
}

export default About