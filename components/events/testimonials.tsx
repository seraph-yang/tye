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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 pt-12">
            <h2 className="h2 mb-4">Events</h2>
            <p className="text-xl text-gray-400">Events are another part of what makes TYE unique. We strive to provide fun and quality events for the community to encourage participation and engagement. This page is constantly being updated, so be sure to check back often for new event updates, and join our mailing list for more updates as well!</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Guest Speaker Series</div>
              <blockquote className="text-lg text-gray-500 grow">We invite guest speakers to give webinars on their areas of expertise about twice a month.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-500 not-italic"></cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Learn more</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Competitions</div>
              <blockquote className="text-lg text-gray-500 grow">We host fun contests and competitions for our students! Participate for a chance to win prizes and be featured on our site!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-500 not-italic"></cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://instagram.com/theyoungexpressionists">Learn more</a>
              </div>
            </div>


            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">International Penpal Program (TYEGO)</div>
              <blockquote className="text-lg text-gray-500 grow">Through our global outreach program with the River of Life Foundation (TYEGO), we are able to serve students globally. If you'd like to send a quick letter or message to one of our global students, please do so!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-500 not-italic"></cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Send a letter</a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
