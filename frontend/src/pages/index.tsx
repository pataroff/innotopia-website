import Main from '../components/Main'
import Experience from '../components/Experience'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import { groq } from 'next-sanity'
import { sanityClient } from '../lib/sanity.client'

const projectsQuery = groq`*[_type == 'post'] | order(publishedAt desc) [0..2]{
  _id,
  title,
  "mainImage": mainImage.asset->url,
  body
}`

export const getStaticProps = async () => {
  let projects = await sanityClient.fetch(projectsQuery)

  return {
    props: {
      projects,
    },
  }
}

const index = ({ projects }) => {
  return (
    <>
      <Main />
      <Experience />
      <Services />
      <CTA />
      <Projects projects={projects} />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
export default index
