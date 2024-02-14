"use client";
import Accordion from "../ui/accordion";

export default function Features() {
  const faqs = [
    {
      title: "Is there a cancellation policy?",
      text: "Since all of our profits are donated back into the community, we do no offer refunds unless the class is canceled. However, if your student can't make a class because of time conflicts, reach out and let the instructor know; they will happily give you the class material to catch up.",
      active: false,
    },
    {
      title: "I don't use PayPal. Does TYE accept other forms of payments?",
      text: "Yes! Please reach out to us at theyoungexpressionists@gmail.com for more information on alternative payment methods.",
      active: false,
    },
    {
      title: "Where do classes take place?",
      text: "This summer, we will be hosting both in-person and online classes. If a class is in-person, the location will be within the San Jose area. Please check individual class information as to where it will be located.",
      active: false,
    },
    {
      title: "Who teaches TYE's classes?",
      text: "All of our classes are student-run; we have a training process to make sure all of our instructors can host quality classes.",
      active: false,
    },
    {
      title: "I've registered for a class, but haven't received any information from the instructor yet. What do I do?",
      text: "Instructors will send class information including the Zoom link a couple days prior to the class start date. If you do not receive the information by then, please reach out to us at theyoungexpressionists@gmail.com; we'll connect you with the instructor right away",
      active: false,
    },
    {
      title: "Does TYE offer financial assistance?",
      text: "Yes! Please reach out to us at admin@theyoungexpressionists.org for more information.",
      active: false,
    },
    {
      title: "I'm not satisfied with a class. What do I do?",
      text: "We're sorry you are not satisfied. We try our best to guarantee high-quality classes, but if you have any issues with the instructor or the class, please reach out to us and let us know!",
      active: false,
    },
    {
      title: "I'm not sure if a class is right for my student. What should I do?",
      text: "Please reach out to the instructor or to us at theyoungexpressionists@gmail.com. We'd be happy to provide you with additional class information to help you with class selections!",
      active: false,
    },
    {
      title: "Who creates the class curriculum?",
      text: "All class curriculum/information is created by our instructors and approved through our adult mentors/advisors to guarantee quality classes.",
      active: false,
    },
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">Our Mission</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up">The Young Expressionists (TYE) was founded in April 2020 with the sole mission of helping the community. When lockdown first began, many students missed out on their regular activities. We, a group of dedicated high school students, saw the opportunity to make an impact on the community through education. Since then, we have been offering online classes in a variety of classes. Each class is hosted by a high school instructor in a subject that they are both talented and passionate for. In addition to our summer classes, we also host events like competitions, monthly guest speakers, and more! As a nonprofit, all of our funds go directly back to the community to support our core values of education and community service. Come join us on our journey!</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
            <div className="divide-y divide-slate-200">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
