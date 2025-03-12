// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Homepage';
import EventsPage,{loader as eventsLoader} from './pages/EventsPage';
import EventDetailPage,{loader as eventDetailLoader,action as deleteEventAction} from './pages/EventDetailPage'
import NewEventPage,{action as newEventAction} from './pages/NewEventpage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';

const router= createBrowserRouter([
  {path: '/', element: <Root></Root>,errorElement: <Error></Error> ,children:[
    {index:true, element: <HomePage></HomePage>},
    {path: 'events', element: <EventsRoot></EventsRoot>, children: [
      {index:true, element: <EventsPage></EventsPage>, loader: eventsLoader },
      {path:':eventId',id:'event-detail',loader: eventDetailLoader ,children:[
        {index:true, element: <EventDetailPage></EventDetailPage>, action:deleteEventAction },
        {path: 'edit', element: <EditEventPage></EditEventPage>}
      ]},
      {path: 'new', element: <NewEventPage></NewEventPage>, action:newEventAction },
      
    ] }
    
  ]}
  
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
