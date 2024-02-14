export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600">The Young Expressionists (TYE) was founded in April 2020 with the sole mission of helping the community. When lockdown first began, many students missed out on their regular activities. We, a group of dedicated high school students, saw the opportunity to make an impact on the community through education. Since then, we have been offering online classes in a variety of classes. Each class is hosted by a high school instructor in a subject that they are both talented and passionate for. In addition to our summer classes, we also host events like competitions, monthly guest speakers, and more! As a nonprofit, all of our funds go directly back to the community to support our core values of education and community service. Come join us on our journey!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none text-center" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="pl-5">
                <h4 className="h2">100+</h4>
                <p className="text-lg text-gray-600 text-center">Volunteers</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="pl-5">
                <h4 className="h2">$11,000+</h4>
                <p className="text-lg text-gray-600 text-center">Raised</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="pl-5">
                <h4 className="h2">700+</h4>
                <p className="text-lg text-gray-600 text-center">Students</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="pl-5">
                <h4 className="h2">10+</h4>
                <p className="text-lg text-gray-600 text-center">Countries Served</p>
              </div>
            </div>

            <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="pl-5">
                <h4 className="h2">500+</h4>
                <p className="text-lg text-gray-600 text-center">Total Volunteer Hours</p>
              </div>
            </div>

            <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="pl-5">
                <h4 className="h2">130+</h4>
                <p className="text-lg text-gray-600 text-center">Events Organized</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
