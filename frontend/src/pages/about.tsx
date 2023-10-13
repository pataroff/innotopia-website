import Image from 'next/image'

import innotopiaLogoBlack from '../../public/innotopia-logo-black.svg'

import { sanityClient } from '../lib/sanity.client'
import { teamMembersQuery, internsQuery } from '../lib/groqQueries'

export const getStaticProps = async () => {
  let teamMembers = await sanityClient.fetch(teamMembersQuery)
  let interns = await sanityClient.fetch(internsQuery)

  return {
    props: {
      teamMembers,
      interns,
    },
  }
}

const About = ({ teamMembers, interns }) => {
  return (
    <>
      {/* Main Wrapper */}
      <div className='flex justify-center items-center'>
        {/* Main Container */}
        <div className='flex flex-col gap-y-8 container md:px-14 px-6 lg:px-64 py-14'>
          {/* About */}
          <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
            {/* Text */}
            <div className='flex flex-col font-poppins gap-y-4 w-full'>
              <h1 className='text-4xl font-bold text-center lg:text-left'>
                About
              </h1>
              <p className='lg:text-lg text-md text-center lg:text-left'>
                Welcome to Innotopia, born from Indietopia&apos;s creative
                foundation and dedicated to transforming imaginative ideas into
                successful commercial ventures. We bridge creativity and
                commerce to make dreams a reality. Join us as we break new
                ground, redefine boundaries, and foster a vibrant ecosystem
                where innovation thrives. Together, we create a brighter future
                where creativity and profitability unite.
              </p>
            </div>
            {/* Image */}
            <div className='flex w-full'>
              <Image
                src={innotopiaLogoBlack}
                width={800}
                height={800}
                alt='Innotopia Logo'
              />
            </div>
          </div>
          {/* Meet The Team */}
          <div className='flex flex-col gap-y-8 font-poppins'>
            <h1 className='text-4xl font-bold text-center lg:text-left'>
              Meet the team
            </h1>
            {/* Team Members */}
            <div className='flex flex-row justify-center items-center lg:justify-normal gap-x-8 gap-y-4 flex-wrap'>
              {teamMembers.map((teamMember) => (
                <div
                  key={teamMember._id}
                  className='flex flex-col justify-center items-center gap-y-2'
                >
                  <div className='border-neutral-200 border rounded-3xl drop-shadow-md lg:w-[220px] lg:h-[280px] md:w-[300px] md:h-[400px] w-[300px] h-[400px] overflow-hidden'>
                    {teamMember.personImage && (
                      <Image
                        className='object-cover w-full h-full'
                        src={teamMember.personImage}
                        alt={teamMember.personName}
                        width={800}
                        height={800}
                      />
                    )}
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-bold text-lg lg:text-base'>
                      {teamMember.personName
                        ? teamMember.personName
                        : 'Unknown Name'}
                    </h3>
                    <h3 className='font-normal text-lg lg:text-base'>
                      {teamMember.personPosition
                        ? teamMember.personPosition
                        : 'Unknown Position'}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Interns & Graduates */}
            <div className='flex flex-col gap-y-8'>
              <h1 className='text-4xl font-poppins font-bold text-center lg:text-left'>
                Interns & Graduates
              </h1>
              {/* Intern Box */}
              {interns.map((intern) => (
                <div
                  key={intern._id}
                  className='rounded-3xl w-full h-full border border-neutral-200 drop-shadow-md'
                >
                  <div className='flex flex-col lg:flex-row justify-center items-center gap-x-10 gap-y-8 p-8'>
                    <div className='flex flex-col gap-y-2'>
                      <div className='border-neutral-200 border rounded-3xl w-[300px] h-[350px] overflow-hidden'>
                        {intern.personImage && (
                          <Image
                            className='object-cover w-full h-full'
                            src={intern.personImage}
                            alt={intern.personName}
                            width={800}
                            height={800}
                          />
                        )}
                      </div>
                      <div className='flex flex-col justify-center items-center'>
                        <h3 className='font-bold'>
                          {intern.personName
                            ? intern.personName
                            : 'Unknown Name'}
                        </h3>
                        <h3 className='font-normal'>
                          {intern.personPosition
                            ? intern.personPosition
                            : 'Unknown Position'}
                        </h3>
                      </div>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                      <p className='text-md text-center lg:text-left'>
                        {intern.body[0].children[0].text
                          ? intern.body[0].children[0].text
                          : 'Unknown Testimonial'}
                      </p>
                      <p className='font-bold text-center lg:text-left'>
                        Portfolio Link:
                        <a
                          className='font-normal'
                          target='_blank'
                          href={
                            intern.personPortfolioLink
                              ? intern.personPortfolioLink
                              : '/'
                          }
                        >
                          {' '}
                          {intern.personPortfolioLink
                            ? intern.personPortfolioLink
                            : 'Unknown Portfolio Link'}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
