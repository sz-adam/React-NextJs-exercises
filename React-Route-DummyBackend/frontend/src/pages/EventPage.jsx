import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";

function EventsPage() {
  // const data = useLoaderData();
  // const events = data.events;
  //if(data.isError){
  //  return <p>{data.message}</p>
  //}
  //return <EventsList events={events} />;
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'}
    // throw { message: "Could not fetch events." };
    //  throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //    status: 500,
    //  });
    return json({ message: "Could not fetch events." }), { status: 500 };
  } else {
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
