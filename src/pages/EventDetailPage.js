import { redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem   from '../components/EventItem'
export default function EventDetailPage(){
    const data=useRouteLoaderData('event-detail');
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




export async function action({params,request}){
    const eventId=params.eventId;
    const response= await fetch('http://localhost:8080/events/'+eventId,{
        method:request.method
    });
    if(!response.ok){
        throw new Response(JSON.stringify({message: 'count not delete events details'}), {status:500}) 
    }else{
        return redirect('/events');
    }
}