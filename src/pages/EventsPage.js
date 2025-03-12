import { useLoaderData,Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {

    const {events}= useLoaderData();
    // if(data.isError){
    // return <p>
    //     {data.message}
    // </p>    
    // } 
    // const event=data.events;
 
  return (
    <>
      <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(events)=><EventsList events={events}></EventsList> }
      </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
  
  throw new Response(JSON.stringify({message: 'count not fetch events'}), {status:500})
  } else {
   const resData= await response.json();
   return resData.events;
  }
}

export async function loader() {
  return {
    events: loadEvents(),
  };
}