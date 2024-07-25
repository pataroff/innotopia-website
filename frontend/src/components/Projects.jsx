import Link from 'next/link'
import Image from 'next/image'
// import { FaArrowRight } from 'react-icons/fa';
import { PortableText, toPlainText } from '@portabletext/react'

const Projects = ({ projects }) => {
  const wordLimit = 50

  const getWords = (text) => {
    const words = text.trim().split(' ')
    return words.slice(0, wordLimit).join(' ')
  }

  return (
    <section id='projects' className='scroll-mt-16'>
      {/* Main Wrapper */}
      <div className='flex justify-center items-center'>
        {/* Main Container */}
        <div className='flex flex-col justify-center items-center container overflow-x-hidden'>
          {/* Heading Container */}
          <div className='flex flex-col justify-center items-center font-poppins py-14'>
            <div className='flex flex-col py-4'>
              <h2 className='lg:text-3xl text-2xl font-bold z-10'>
                What we do
              </h2>
              <div className='bg-lime-green h-2 w-full z-0 -mt-2'></div>
            </div>
          </div>
          {/* Rounded Box Wrapper */}
          <div className='lg:px-32 px-12 py-8'>
            {/* Rounded Box Container */}
            <div className='rounded-2xl drop-shadow-md bg-slate-50 w-full h-full container p-8'>
              {/* Projects Wrapper */}
              <div className='flex flex-col justify-center items-center gap-y-8'>
                {projects.map((project, index) => (
                  <div
                    className={`flex flex-col lg:flex-row gap-x-8 ${
                      index === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                    key={project._id}
                  >
                    {/* Project Image Container */}
                    <div className='rounded-2xl drop-shadow-md bg-slate-100 overflow-hidden w-full h-96 lg:m-14'>
                      {/* Project Image */}
                      {project.mainImage ? (
                        <Link href={`/post/${project.slug}`}>
                          <Image
                            className='relative object-cover w-full h-full hover:scale-110 hover:opacity-80 transition-all duration-150'
                            src={project.mainImage}
                            width={1600}
                            height={585}
                            alt={project.title}
                            style={{ objectPosition: '30% 50%' }}
                          />
                        </Link>
                      ) : (
                        <div className='flex items-center justify-center h-full bg-gray-200'>
                          <span>No Image Available</span>
                        </div>
                      )}
                    </div>
                    {/* Project Text Wrapper */}
                    <div className='flex flex-col justify-center font-poppins p-12 gap-y-10 w-full'>
                      {/* Project Title */}
                      <h3 className='text-2xl font-bold'>
                        {project.title ? project.title : 'Untitled'}
                      </h3>
                      {/* Project Description */}
                      {project.body ? (
                        <p>
                          {getWords(toPlainText(project.body))}
                          {getWords(toPlainText(project.body)).endsWith('.')
                            ? '..'
                            : '...'}
                        </p>
                      ) : (
                        <p>No Description Available</p>
                      )}
                      {/* Project CTA */}
                      <Link href={`/post/${project.slug}`}>
                        <div className='flex justify-center items-center gap-x-2 rounded-2xl bg-lime-green w-44  h-10 hover:scale-95 transition-transform duration-150'>
                          <span className='font-bold uppercase'>
                            Learn More
                          </span>
                          {/* <FaArrowRight className='hidden group-hover:inline-block' /> */}
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
