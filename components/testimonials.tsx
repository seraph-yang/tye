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
            <h2 className="h2 mb-4">Contribute</h2>
            <p className="text-xl text-gray-400">If you're interested in what we do, you can help out by doing any of the following...</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Join our organization</div>
              <blockquote className="text-lg text-gray-500 grow">We're always looking for more passionate volunteers to join our team! Fill out the form below with any inquires. We would love to partner with your organization, have you as an instructor, or as a guest speaker!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-500 not-italic">Fill out our </cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">application</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Follow us on social media</div>
              <blockquote className="text-lg text-gray-500 grow">To stay in the loop with all the things going on at The Young Expressionists, be sure to check out our socials! You can also subscribe to our email list or contact us at admin@theyoungexpressionists.org.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-500 not-italic">Find us</cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://instagram.com/theyoungexpressionists">@theyoungexpressionists</a>
              </div>
            </div>


            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-white-800" data-aos="fade-up">
              <div className="h4 mb-4">Share your testimony</div>
              <blockquote className="text-lg text-gray-500 grow">If you had a positive experience with TYE, please take a minute to leave us your testimony! We gratly value and appreciate any feedback you give us! You can compliment a specific instructor, tell us about a class, or even just leave us some encouragement.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-500 not-italic">Submit a testimony</cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">here</a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
