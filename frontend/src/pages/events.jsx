import Link from 'next/link';
import { useState } from 'react';

import { sanityClient } from '../lib/sanity.client';
import { eventsQuery } from '../lib/groqQueries';

export const getStaticProps = async () => {
  let events = await sanityClient.fetch(eventsQuery);

  return {
    props: {
      events,
    },
    revalidate: 10,
  };
};

const Events = ({ events }) => {
  const [displayCurrentEvents, setDisplayCurrentEvents] = useState(false);

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
              {!events ||
                (events.filter(
                  (event) => event.eventDate < new Date().toISOString()
                ).length === 0 && (
                  <div>
                    <h1>There are no past events!</h1>
                  </div>
                ))}

              {events
                .filter((event) => event.eventDate < new Date().toISOString())
                .map((event) => (
                  <div key={event._id}>
                    <h1>{event.eventName}</h1>
                    <h3>{event.eventDate}</h3>
                  </div>
                ))}
            </div>
          )}

          {displayCurrentEvents && (
            <div className='flex flex-col font-poppins text-lg font-normal'>
              {!events ||
                (events.filter(
                  (event) => event.eventDate > new Date().toISOString()
                ).length === 0 && (
                  <div>
                    <h1>There are no current events!</h1>
                  </div>
                ))}

              {events
                .filter((event) => event.eventDate > new Date().toISOString())
                .map((event) => (
                  <div key={event._id}>
                    <h1>{event.eventName}</h1>
                    <h3>{event.eventDate}</h3>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Events;
