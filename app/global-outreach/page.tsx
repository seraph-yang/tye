export const metadata = {
  title: 'Class Information - The Young Expressionists',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/tyego/tyego'
import Testimonials from '@/components/tyego/countries'

export default function Home() {
  return (
    <>
      <Zigzag />
      <Testimonials />
    </>
  )
}
