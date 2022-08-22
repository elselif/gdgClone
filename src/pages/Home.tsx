import Navbar from '../components/Navbar';
import { HelloDiv } from '../Layouts/HelloDiv';
import { About } from '../Layouts/About';
import { Meetings } from '../Layouts/Meeting';
import { Events } from '../Layouts/Event';
import { Partner } from '../Layouts/Partners';
import WhatWeDo from '../components/WhatWeDo';

export default function ComplexGrid() {
  return (
    <>
      <Navbar />
      <HelloDiv />
      <WhatWeDo />
      <About />
      <Meetings />
      <Events />
      <Partner />
    </>
  );
}


