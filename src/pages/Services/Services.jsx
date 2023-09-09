import React from 'react'
import "./services.css"


const list = [
  {index: '1', content: 'Road Transportation', info: 'https://images.pexels.com/photos/6170451/pexels-photo-6170451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', detail: ''},
  {index: '2', content: 'Sea Freight', info: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=800', detail: ''},
  {index: '3', content: 'Air Freight', info: 'https://images.pexels.com/photos/1089304/pexels-photo-1089304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  {index: '4', content: 'Logistics Solution', info: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  {index: '5', content: 'Logistics Laboratory', info: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=800'},
  {index: '6', content: 'Warehousing Solution', info: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
]

const Services = () => {
  return (
    <>
        <div className='service push'>
            <h1>Our Services.</h1>

            <div className='service-details'>
              {list.map(({index, content, info, detail}) => (
                  <div key={index} className='flex'>
                    <img src={info}/>
                    <h3>{content}</h3>
                    <p>{detail}</p>
                  </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default Services