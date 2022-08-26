import { About } from '../Layouts/About';
import { Meetings } from '../Layouts/Meeting';
import { EventsPage } from '../Layouts/EventPage';
import { Partner } from '../Layouts/Partners';
import WhatWeDo from '../Layouts/WhatWeDo';
import { HelloDiv } from '../Layouts/HelloDiv';

export default function HomePage() {
  return (
    <>
      <HelloDiv />
      <WhatWeDo />
      <About />
      <Meetings />
      <EventsPage />
      <Partner />
    </>
  );
}


