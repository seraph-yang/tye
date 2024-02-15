"use client";
import Accordion from "../ui/accordion";

export default function Features() {
  const faqs = [
    {
      title: "Who can submit work?",
      text: "Since all of our profits are donated back into the community, we do no offer refunds unless the class is canceled. However, if your student can't make a class because of time conflicts, reach out and let the instructor know; they will happily give you the class material to catch up.",
      active: false,
    },
    {
      title: "What work does xPRESS publish? ",
      text: "Yes! Please reach out to us at theyoungexpressionists@gmail.com for more information on alternative payment methods.",
      active: false,
    },
    {
      title: "When is the deadline for submitting work?",
      text: "This summer, we will be hosting both in-person and online classes. If a class is in-person, the location will be within the San Jose area. Please check individual class information as to where it will be located.",
      active: false,
    },
    {
      title: "When will I hear back from xPRESS?",
      text: "All of our classes are student-run; we have a training process to make sure all of our instructors can host quality classes.",
      active: false,
    },
    {
      title: "Can I submit multiple times?",
      text: "Instructors will send class information including the Zoom link a couple days prior to the class start date. If you do not receive the information by then, please reach out to us at theyoungexpressionists@gmail.com; we'll connect you with the instructor right away",
      active: false,
    },
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">A Bi-annual Magazine Dedicated to Celebrating Creativity and Young Artists</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up">We are excited to launch xPRESS Magazine this summer to provide a new platform for young creators to share their work. xPRESS is the newest addition to The Young Expressionists, and we hope that through this new media outlet, we'll be able to showcase the brilliant works of young artists and writers like you!</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">Publishing & Submission Guidelines</h2>
            <p className="text-xl text-gray-600" data-aos="fade-up">xPRESS Magazine is available in both print and digital format, and publishes on a rolling basis. <span className="font-bold">Submissions are now OPEN for art and writing. Please the information below to read full submission guidelines.</span></p>
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
