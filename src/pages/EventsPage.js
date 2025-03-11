import { Link } from "react-router-dom"
const DUMMY=[
    {
        id: '1',
        title: 'some event'
    },
    {
        id:'2',
        title:'another event'
    }
]


export default function EventsPage(){
    return (
        <>
        <h1>Events Page</h1>
        <ul>
            {DUMMY.map((event)=> <li key={event.id}> <Link to={event.id}>{event.title}</Link></li> )}
        </ul>
        </>
    )
}