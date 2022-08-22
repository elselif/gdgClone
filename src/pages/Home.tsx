import Navbar from '../components/Navbar';
import HomeDo from '../components/homeDo';
import { HelloDiv } from '../Layouts/HelloDiv';
import { About } from '../Layouts/About';
import { Meetings } from '../Layouts/Meeting';

export default function ComplexGrid() {
  return (
    <>
      <Navbar />
      <HelloDiv />
      <HomeDo />
      <About />
      <Meetings />

    </>
  );
}


