import Link from 'next/link'
import Image from 'next/image'

import edeStaalProjectImage from '../../public/edestaal-project-image.jpg'
import _3dscansChurchesProjectImage from '../../public/3dscans-churches-project-image.png'
import arragnedRealismProjectImage from '../../public/arranged-realism-project-image.png'

const Projects = () => {
  return (
    <section>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center overflow-x-hidden'>
        {/* Heading Container */}
        <div className='flex flex-col justify-center items-center font-poppins py-14'>
          <h2 className='md:text-2xl lg:text-3xl text-2xl font-bold z-10 py-4'>
            What we do
          </h2>
        </div>
        {/* Rounded Box Wrapper */}
        <div className='px-56 py-8'>
          {/* Rounded Box Container */}
          <div className='rounded-2xl drop-shadow-md bg-slate-50 w-full h-full container p-8'>
            {/* Projects Wrapper */}
            <div className='flex flex-col justify-center items-center gap-y-8'>
              {/* Project Item */}
              <div className='flex flex-col md:flex-row gap-x-8'>
                {/* Project Image Container */}
                <div className='rounded-2xl drop-shadow-md bg-slate-100 overflow-hidden w-full h-96 md:m-14'>
                  {/* Project Image */}
                  <Image
                    src={edeStaalProjectImage}
                    alt='Ede Staal Project Image'
                    className='relative object-cover w-full h-full'
                    style={{ objectPosition: '30% 50%' }}
                  />
                </div>
                {/* Project Text Wrapper */}
                <div className='flex flex-col justify-center font-poppins p-12 gap-y-4 w-full'>
                  {/* Project Title */}
                  <h3 className='text-2xl font-bold'>
                    Ede Staal: mijn Groningen - mien Grunne
                  </h3>
                  {/* Project Description */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est culpa non suscipit eligendi corporis autem iusto,
                    laudantium provident voluptatibus facilis placeat
                    consectetur doloremque harum at aliquam nostrum soluta
                    aspernatur tenetur incidunt inventore illo quidem.
                  </p>
                  {/* Project CTA */}
                  <Link href='/post/ede-staal-mijn-groningen-mien-grunne'>
                    <div className='flex justify-center items-center rounded-2xl bg-lime-green w-40 h-10'>
                      <span className='font-bold'>View Project</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Project Item */}
              <div className='flex flex-col md:flex-row-reverse gap-x-8'>
                {/* Project Image Container */}
                <div className='rounded-2xl drop-shadow-md bg-slate-100 overflow-hidden w-full h-96 md:m-14'>
                  {/* Project Image */}
                  <Image
                    src={_3dscansChurchesProjectImage}
                    alt='3D-scans of churches Project Image'
                    className='relative object-cover w-full h-full'
                    style={{ objectPosition: '30% 50%' }}
                  />
                </div>
                {/* Project Text Wrapper */}
                <div className='flex flex-col justify-center font-poppins p-12 gap-y-4 w-full'>
                  {/* Project Title */}
                  <h3 className='text-2xl font-bold'>3D-scans of churches</h3>
                  {/* Project Description */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est culpa non suscipit eligendi corporis autem iusto,
                    laudantium provident voluptatibus facilis placeat
                    consectetur doloremque harum at aliquam nostrum soluta
                    aspernatur tenetur incidunt inventore illo quidem.
                  </p>
                  {/* Project CTA */}
                  <Link href='/post/3d-scans-of-churches'>
                    <div className='flex justify-center items-center rounded-2xl bg-lime-green w-40 h-10'>
                      <span className='font-bold'>View Project</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Project Item */}
              <div className='flex flex-col md:flex-row gap-x-8'>
                {/* Project Image Container */}
                <div className='rounded-2xl drop-shadow-md bg-slate-100 overflow-hidden w-full h-96 md:m-14'>
                  {/* Project Image */}
                  <Image
                    src={arragnedRealismProjectImage}
                    alt='Arranged Realism Project Image'
                    className='relative object-cover w-full h-full'
                    style={{ objectPosition: '40% 50%' }}
                  />
                </div>
                {/* Project Text Wrapper */}
                <div className='flex flex-col justify-center font-poppins p-12 gap-y-4 w-full'>
                  {/* Project Title */}
                  <h3 className='text-2xl font-bold'>
                    Arranged Realism - Art in Games
                  </h3>
                  {/* Project Description */}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est culpa non suscipit eligendi corporis autem iusto,
                    laudantium provident voluptatibus facilis placeat
                    consectetur doloremque harum at aliquam nostrum soluta
                    aspernatur tenetur incidunt inventore illo quidem.
                  </p>
                  {/* Project CTA */}
                  <Link href='/post/arranged-realism'>
                    <div className='flex justify-center items-center rounded-2xl bg-lime-green w-40 h-10'>
                      <span className='font-bold'>View Project</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
