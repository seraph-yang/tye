"use client"

import { List, ThemeIcon, rem } from '@mantine/core';
import { IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5, IconNumber6 } from '@tabler/icons-react';

export default function Demo() {
  return (
    <section>
      <div className="font-inter max-w-3xl mx-auto px-4 sm:px-6 pt-24">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">Our Classes</h2>
          <p className="text-xl text-gray-600">Check back here for our summer classes when registrations open! Join our mailing list to be notified.</p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pt-5">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Class schedule</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Register for classes</a>
              </div>
            </div>
        </div>
        <div className="py-12 md:py-20 text-grey-600">
          <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
            <List
              spacing="md"
              size="lg"
              center
            >
              <List.Item
                icon={
                  <ThemeIcon color="#81BBC3" size={24} radius="xl">
                    <IconNumber1 style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                Read through the class descriptions on our summer class offerings page and decide which ones you'd like to sign up for (make sure to take note of the age range and prerequisites)
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="#81BBC3" size={24} radius="xl">
                    <IconNumber2 style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                Check the dates for the classes on the calendar. Note that there are no classes the week of Fourth of July due to the holiday.
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="#81BBC3" size={24} radius="xl">
                    <IconNumber3 style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                Once you've decided which classes you'd like to enroll in and the dates, head over to the registration form and enroll in the classes. Our rates are $20 per class.
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="#81BBC3" size={24} radius="xl">
                    <IconNumber4 style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                Wait for a confirmation email from us! This may take a few days. Once you've received the email, make sure all the information looks correct (no need to respond to the email unless something is wrong).
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="#81BBC3" size={24} radius="xl">
                    <IconNumber5 style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                PayPal the class tuition to theyoungexpressionists@gmail.com. Select friends and family when making the payment, and format the payment as follows: parent name (first and last) - student name (first and last) - number (included in the email).
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="#81BBC3" size={24} radius="xl">
                    <IconNumber6 style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                Once you've made the payment, you're ready to go! Your instructors will reach out to you closer to the class start date with more information! Contact us at theyoungexpressionists@gmail.com if you have any questions!
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    </section>
  );
}