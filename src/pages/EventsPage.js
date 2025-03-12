import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {

    const data= useLoaderData();
    // if(data.isError){
    // return <p>
    //     {data.message}
    // </p>    
    // } 
    const event=data.events;
 
  return (
    <>
      
      { <EventsList  events={event}/>}
    </>
  );
}

export default EventsPage;

export  async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
    //   return {
    //     isError:true,
    //     message: 'Could not fetch events!'
    //   }
    throw new Response(JSON.stringify({message: 'count not fetch events'}), {status:500})
    } else {
      return response;
    }
}