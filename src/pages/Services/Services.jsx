import React from 'react'
import "./services.css"


const list = [
  {index: '1', content: 'Road Transportation', info: 'https://images.pexels.com/photos/6170451/pexels-photo-6170451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', detail: 'Road transportation is the linchpin of modern logistics, offering unparalleled flexibility, accessibility, and reliability. It plays a critical role in ensuring that products and materials reach their intended destinations efficiently, making it an indispensable component of the global supply chain. As technology and sustainability efforts continue to evolve, the road transport sector will likely undergo transformative changes, further enhancing its role in logistics.'},
  {index: '2', content: 'Sea Freight', info: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=800', detail: 'Sea freight is an indispensable component of modern logistics, enabling the efficient movement of goods on a global scale. Its cost-effectiveness, global reach, and ability to handle a variety of cargo types make it a preferred choice for businesses engaged in international trade.'},
  {index: '3', content: 'Air Freight', info: 'https://images.pexels.com/photos/1089304/pexels-photo-1089304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  {index: '4', content: 'Logistics Solution', info: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  {index: '5', content: 'Logistics Laboratory', info: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=800'},
  {index: '6', content: 'Warehousing Solution', info: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  {index: '7', content: 'TruckLoad Service', info: 'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
]

const Services = () => {
  return (
    <>
        <div className='service '>
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