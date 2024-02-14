import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        <div className="py-12 md:py-20  border-gray-800">

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">International impact</div>
                  <h3 className="h3 mb-3">The Young Expressionists Global Outreach (TYEGO)</h3>
                  <p className="text-xl text-gray-600 mb-4">The Young Expressionists is a proud partner of The River of Life Foundation. Many children who are in poorer countries don’t have the opportunity to learn new skills such as new languages, computer skills, and trade skills. Through this partnership, we aim to provide quality classes to children across the world to help them build sustainable futures.</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-left pt-5">
                    <div data-aos="fade-up" data-aos-delay="400">
                      <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Register</a>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                      <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Contribute</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           

          </div>

        </div>
      </div>
    </section>
  )
}
