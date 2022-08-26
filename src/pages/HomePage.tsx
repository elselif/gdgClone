import Navbar from '../components/Navbar';
import { HelloDiv } from '../Layouts/HelloDiv';
import { About } from '../Layouts/About';
import { Meetings } from '../Layouts/Meeting';
import {  EventsPage } from '../Layouts/EventPage';
import { Partner } from '../Layouts/Partners';
import WhatWeDo from '../components/WhatWeDo';

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

