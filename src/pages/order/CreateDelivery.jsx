import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import PageMenu from '../../components/pageMenu/PageMenu';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RESET, createOrder } from '../../redux/features/auth/orderSlice';
import { toast } from 'react-toastify';

const initialState = {
    firstName: '',
     lastName: '',
     email: '',
     pickup_add: '',
     destination: '',
     phone: '',
     weight: '',
     description: '',
     service_type: '',
     additional_info: ''

};

const CreateDelivery = () => {
  const { isLoading, isSuccess} = useSelector((state) => state.order);

  const [formData, setFormData] = useState(initialState);
  
  const { firstName, lastName, email, pickup_add, destination, phone, weight, description, service_type, additional_info } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  
  };
  

  const ordercreation = async (e) => {
    e.preventDefault();

    if (!firstName ||
      !lastName ||
      !email ||
      !pickup_add ||
      !destination ||
      !phone ||
      !weight ||
      !description ||
      !service_type ||
      !additional_info
     ) {
    return toast.error('All fields are required');
  }
  
    const orderData = {
        firstName,
         lastName,
         email,
         pickup_add,
         destination,
         phone,
         weight,
         description,
         service_type,
         additional_info
    };
    
    
    await dispatch(createOrder(orderData));  
    // await dispatch(sendEmailToCollector())
  };
  
 
  useEffect(() => {
    if (isSuccess) {
      navigate('/profile');
    }
    dispatch(RESET());
  }, [isSuccess, dispatch, navigate]);

  return (
    <>
      <section className='top'>
        <div className='container'>
          {/* <PageMenu /> */}
          
          <div>
            <h2>Request a quotation</h2>

            <div className='--flex-start profile'>
              

              <Card cardClass={'card'}>
                <form onSubmit={ordercreation}>
                <p>
                  <label>FirstName:</label>
                  <input type='text' name='firstName' value={firstName} onChange={handleInputChange} placeholder='your first name here' />
                </p>

                <p>
                  <label>LastName:</label>
                  <input type='text' name='lastName' value={lastName} onChange={handleInputChange} placeholder='your last name here' />
                </p>


                  <p>
                    <label>Email:</label>
                    <input type='text' name='email' value={email} onChange={handleInputChange} placeholder='yourname@gmail.com' />
                  </p>

                  <p>
                    <label>Destination:</label>
                    <input type='text' name='destination' value={destination} onChange={handleInputChange} placeholder='Destination' />
                  </p>
                  <p>
                    <label>Phone:</label>
                    <input type='text' name='phone' value={phone} onChange={handleInputChange} placeholder='080000000000'/>
                  </p>
                  <p>
                    <label>Weight:</label>
                    <input type='text' name='weight' value={weight} onChange={handleInputChange} placeholder='weight in kg'/>
                  </p>
                  <p>
                    <label>Pickup Address:</label>
                    <input type='text' name='pickup_add' value={pickup_add} onChange={handleInputChange} placeholder='enter your address here'/>
                  </p>
                  <p>
                    <label>Description:</label>
                    <input type='text' name='description' value={description} onChange={handleInputChange} placeholder='payload in lbs'/>
                  </p>
                  <p>
                    <label>Service Type</label>
                    <input type='text' name='service_type' value={service_type} onChange={handleInputChange} placeholder='courier or logistics etc'/>
                  </p>
                  <p>
                    <label>Additional Information</label>
                    <textarea  name='additional_info' value={additional_info} onChange={handleInputChange} rows='6' placeholder='additional information'/>
                  </p>


                  <button className='--btn --btn-success --btn-block'>Submit Form</button>
                </form>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateDelivery;