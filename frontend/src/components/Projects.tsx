import Link from 'next/link'
import Image from 'next/image'

const Projects = ({ projects }) => {
  const wordLimit = 5

  const getWords = (text) => {
    const words = text.trim().split(' ')
    return words.slice(0, wordLimit).join(' ')
  }

  return (
    <section id='projects'>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center overflow-x-hidden'>
        {/* Heading Container */}
        <div className='flex flex-col justify-center items-center font-poppins py-14'>
          <h2 className='lg:text-3xl text-2xl font-bold z-10 py-4'>
            What we do
          </h2>
        </div>
        {/* Rounded Box Wrapper */}
        <div className='px-56 py-8'>
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
                      <Image
                        src={project.mainImage}
                        width={1600}
                        height={585}
                        alt={project.title}
                        className='relative object-cover w-full h-full'
                        style={{ objectPosition: '30% 50%' }}
                      />
                    ) : (
                      <div className='flex items-center justify-center h-full bg-gray-200'>
                        <span>No Image Available</span>
                      </div>
                    )}
                  </div>
                  {/* Project Text Wrapper */}
                  <div className='flex flex-col justify-center font-poppins p-12 gap-y-4 w-full'>
                    {/* Project Title */}
                    <h3 className='text-2xl font-bold'>
                      {project.title ? project.title : 'Untitled'}
                    </h3>
                    {/* Project Description */}
                    {project.body && project.body[0]?.children[0]?.text ? (
                      <p>
                        {getWords(project.body[0].children[0].text)}
                        {project.body[0].children[0].text.split(' ').length >
                          wordLimit && '...'}
                      </p>
                    ) : (
                      <p>No Description Available</p>
                    )}
                    {/* Project CTA */}
                    <Link href='/post/ede-staal-mijn-groningen-mien-grunne'>
                      <div className='flex justify-center items-center rounded-2xl bg-lime-green w-40 h-10'>
                        <span className='font-bold'>View Project</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
