import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Countries We Serve</h2>
            <p className="text-xl text-gray-400">description</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Southeast Asia</div>
              <blockquote className="text-lg text-gray-500 grow">Philippines and Cambodia</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">

              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Latin America</div>
              <blockquote className="text-lg text-gray-500 grow">To be determined</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">

              </div>
            </div>


            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Africa</div>
              <blockquote className="text-lg text-gray-500 grow">To be determined</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">

              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
