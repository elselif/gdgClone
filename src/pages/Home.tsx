import Navbar from '../components/Navbar';
import HomeDo from '../components/homeDo';
import { HelloDiv } from '../Layouts/HelloDiv';
import { About } from '../Layouts/About';
import { Meetings } from '../Layouts/Meeting';
import { Events } from '../Layouts/Event';
import { Partner } from '../Layouts/Partners';

export default function ComplexGrid() {
  return (
    <>
      <Navbar />
      <HelloDiv />
      <HomeDo />
      <About />
      <Meetings />
      <Events />
      <Partner />
    </>
  );
}


