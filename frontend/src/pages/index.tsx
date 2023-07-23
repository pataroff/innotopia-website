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

const companiesQuery = groq`*[_type == 'company'] | order(publishedAt desc) {
  _id,
  title,
  "logo": mainImage.asset->url
}`

const servicesQuery = groq`*[_type =='service'] | order(publishedAt asc){
  _id,
  title,
  body,
  "icon": icon.name
}`
const projectsQuery = groq`*[_type == 'post'] | order(publishedAt desc) [0..2]{
  _id,
  title,
  "mainImage": mainImage.asset->url,
  body
}`

export const getStaticProps = async () => {
  let companies = await sanityClient.fetch(companiesQuery)
  let services = await sanityClient.fetch(servicesQuery)
  let projects = await sanityClient.fetch(projectsQuery)

  return {
    props: {
      companies,
      services,
      projects,
    },
  }
}

const index = ({ companies, services, projects }) => {
  return (
    <>
      <Main />
      <Experience companies={companies} />
      <Services services={services} />
      <CTA />
      <Projects projects={projects} />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
export default index
