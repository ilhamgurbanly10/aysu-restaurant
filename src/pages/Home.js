import Carousel from '../components/Carousel';
import OurStory from '../components/OurStory';
import ViewGallery from '../components/ViewGallery';
import Testimonials from '../components/Testimonials';
import PrivateDining from '../components/PrivateDining';
import OurMenu from '../components/OurMenu';
import InstagramGallery from '../components/InstagramGallery';
import PressNews from '../components/PressNews';
import MakeReservation from '../components/MakeReservation';
import SignUpMain from '../components/SignUpMain';


function Home() {
    return (
      <>
        <Carousel/>
        <OurStory/>
        <ViewGallery/>
        <Testimonials/>
        <PrivateDining/>
        <OurMenu/>
        <InstagramGallery/>
        <PressNews/>
        <MakeReservation/>
        <SignUpMain/>
      </>  
    );
}
  
export default Home;