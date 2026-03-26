import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      {/* Centered Content */}
      <div className='my-10 flex justify-center mb-28'>
        <div className='flex flex-col gap-8 max-w-2xl text-center'>

          <div>
            <p className='font-semibold text-xl text-gray-700'>Our Store</p>
            <p className='text-gray-500 mt-2'>
              671314 Jodhpur <br /> Rajasthan, India
            </p>
          </div>

          <div>
            <p className='text-gray-500'>
              Tel: 9294531766 / 7289086751 <br />
              Email: clshivam16@gmail.com / mvdikshant@gmail.com
            </p>
          </div>

          <div>
            <p className='font-semibold text-xl text-gray-700'>Careers</p>
            <p className='text-gray-500 mt-2'>
              Learn more about our team and current opportunities.
            </p>
          </div>

          <div>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
              Explore Jobs
            </button>
          </div>

        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact