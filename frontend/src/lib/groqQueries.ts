import { groq } from 'next-sanity'

export const companiesQuery = groq`*[_type == 'company'] | order(publishedAt desc) {
    _id,
    title,
    "logo": mainImage.asset->url
  }`

export const servicesQuery = groq`*[_type =='service'] | order(publishedAt asc){
    _id,
    title,
    body,
    "icon": icon.name
  }`
export const projectsQuery = groq`*[_type == 'post'] | order(publishedAt desc) [0..2]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    body
  }`

export const testimonialsQuery = groq`*[_type == 'testimonial'] | order(publishedAt desc) [0..2]{
    _id,
    personName,
    personPosition,
    "personImage": personImage.asset->url,
    body,
    companyName,
    "comapnyLogo": companyLogo.asset->url
  }`
