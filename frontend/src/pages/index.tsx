import Main from '../components/Main'
import Experience from '../components/Experience'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import {
  companiesQuery,
  projectsQuery,
  servicesQuery,
  testimonialsQuery,
} from '../lib/groqQueries'
import { sanityClient } from '../lib/sanity.client'

export const getStaticProps = async () => {
  let companies = await sanityClient.fetch(companiesQuery)
  let services = await sanityClient.fetch(servicesQuery)
  let projects = await sanityClient.fetch(projectsQuery)
  let testimonials = await sanityClient.fetch(testimonialsQuery)

  return {
    props: {
      companies,
      services,
      projects,
      testimonials,
    },
  }
}

const index = ({ companies, services, projects, testimonials }) => {
  return (
    <>
      <Main />
      <Experience companies={companies} />
      <Services services={services} />
      <CTA />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </>
  )
}
export default index
