import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'intern',
  title: 'Intern',
  type: 'document',
  fields: [
    defineField({
      name: 'personName',
      title: 'Person Name',
      type: 'string',
    }),
    defineField({
      name: 'personPosition',
      title: 'Person Team Position',
      type: 'string',
    }),
    defineField({
      name: 'personImage',
      title: 'Person Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Testimonial',
      type: 'blockContent',
    }),
    defineField({
      name: 'personPortfolioLink',
      title: 'Person Portfolio Link',
      type: 'string',
    }),
  ],
})
