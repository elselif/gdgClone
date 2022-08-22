import Navbar from '../components/Navbar';
import HomeDo from '../components/homeDo';
import { HelloDiv } from '../Layouts/HelloDiv';
import { About } from '../Layouts/About';

export default function ComplexGrid() {
  return (
    <>
      <Navbar />
      <HelloDiv></HelloDiv>
      <HomeDo></HomeDo>
      <About></About>

    </>
  );
}


