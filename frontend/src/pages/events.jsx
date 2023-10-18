import Link from 'next/link'
import { useState } from 'react'

const Events = () => {
  const [displayCurrentEvents, setDisplayCurrentEvents] = useState(false)

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col py-6'>
          <h1 className='font-poppins font-bold uppercase text-6xl'>Events</h1>
          <div className='flex flex-row gap-x-4 font-poppins font-bold uppercase text-xl'>
            <span
              className='cursor-pointer'
              onClick={() => setDisplayCurrentEvents(true)}
            >
              <h3>Current Events</h3>
            </span>
            <span
              className='cursor-pointer'
              onClick={() => setDisplayCurrentEvents(false)}
            >
              <h3>Past Events</h3>
            </span>
          </div>
          {!displayCurrentEvents && (
            <div className='flex flex-col font-poppins text-lg font-normal'>
              <div>Past Event 1</div>
              <div>Past Event 2</div>
              <div>Past Event 3</div>
            </div>
          )}

          {displayCurrentEvents && (
            <div className='flex flex-col font-poppins text-lg font-normal'>
              <h3>Current Event 1</h3>
              <h3>Current Event 2</h3>
              <h3>Current Event 3</h3>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Events
