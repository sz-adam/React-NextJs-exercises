

import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
  //a megadott utvonal azonoító alapján (id) kinyeri az adatokat és továbbítjuk az Eventformnak
  const data = useRouteLoaderData('event-detail');

  return <EventForm event={data.event} />;
}

export default EditEventPage;