"use client";

import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'cancellation',
    label: 'Is there a cancellation policy?',
    content: "Since all of our profits are donated back into the community, we do no offer refunds unless the class is canceled. However, if your student can't make a class because of time conflicts, reach out and let the instructor know; they will happily give you the class material to catch up.",
  },

  {
    id: 'paypal',
    label: "I don't use PayPal. Does TYE accept other forms of payment?",
    content: "Yes! Please reach out to us at theyoungexpressionists@gmail.com for more information on alternative payment methods.",
  },

  {
    id: 'location',
    label: 'Where do classes take place?',
    content: 'This summer, we will be hosting both in-person and online classes. If a class is in-person, the location will be within the San Jose area. Please check individual class information as to where it will be located.',
  },

  {
    id: 'registered',
    label: "I've registered for a class, but haven't recieved any information from the instructor yet. What should I do?",
    content: "Instructors will send class information including the Zoom link a couple days prior to the class start date. If you do not receive the information by then, please reach out to us at theyoungexpressionists@gmail.com; we'll connect you with the instructor right away.",
  },

  {
    id: 'teachers',
    label: "Who teaches TYE's classes?",
    content: "All of our classes are student-run; we have a training process to make sure all of our instructors can host quality classes.",
  },

  {
    id: 'financial-assistance',
    label: "Does TYE offer financial assistance?",
    content: "Yes! Please reach out to us at admin@theyoungexpressionists.org for more information.",
  },

  {
    id: 'not-satisfied',
    label: "I'm not satisfied with a class. What should I do?",
    content: "We're sorry you are not satisfied. We try our best to guarantee high-quality classes, but if you have any issues with the instructor or the class, please reach out to us and let us know!",
  },

  {
    id: 'right',
    label: "I'm not sure if a class is right for my student. What should I do?",
    content: "Please reach out to the instructor or to us at theyoungexpressionists@gmail.com. We'd be happy to provide you with additional class information to help you with class selections!",
  },

  {
    id: 'curriculum',
    label: "Who creates the class curriculum?",
    content: "All class curriculum/information is created by our instructors and approved through our adult mentors/advisors to guarantee quality classes.",
  },
];


interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
      </div>
    </Group>
  );
}

export default function Features() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600">The Young Expressionists (TYE) was founded in April 2020 with the sole mission of helping the community. When lockdown first began, many students missed out on their regular activities. We, a group of dedicated high school students, saw the opportunity to make an impact on the community through education. Since then, we have been offering online classes in a variety of classes. Each class is hosted by a high school instructor in a subject that they are both talented and passionate for. In addition to our summer classes, we also host events like competitions, monthly guest speakers, and more! As a nonprofit, all of our funds go directly back to the community to support our core values of education and community service. Come join us on our journey!</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Frequently Asked Questions</h2>
            <Accordion chevronPosition="right" variant="contained">
              {items}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
