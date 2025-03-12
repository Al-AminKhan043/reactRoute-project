import { useLoaderData } from 'react-router-dom';
import EventItem   from '../components/EventItem'
export default function EventDetailPage(){
    const data=useLoaderData();
    return (
        <>
        <EventItem event={data.event}></EventItem>
        </>
    )
}

export  async function loader({params}){
    const id=params.eventId;
    const response= await fetch('http://localhost:8080/events/'+id);
    if(!response.ok){
        throw new Response(JSON.stringify({message: 'count not fetch events details'}), {status:500}) 
    }else{
        return response;
    }
}