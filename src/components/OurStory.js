import Images from './Images';
import OrangeLink from './Buttons';

function OurStory() {
    return (
        <section className='our-story bigger-mt-1 container-2'>

            <div className='our-story-list row w-100 mx-auto gx-0 align-items-center align-content-center'>

                <div className='our-story-item col-12 col-lg me-lg-3'>

                    <div className="row gx-0 mx-auto w-100 flex-nowrap">
                        <div className="col me-3 pb-5">
                            <img src={Images.ourStory01} alt="Our Story Img" className="our-story-img w-100 h-auto"/>
                        </div>
                        <div className="col ms-3 mt-5">
                            <img src={Images.ourStory02} alt="Our Story Img" className="our-story-img w-100 h-auto"/>
                        </div>
                    </div>

                </div>

                <div className='our-story-item col-12 col-lg-5 ms-lg-3 mt-5 mt-lg-0'>
                    
                    <h4 className='our-story-title small-cursive-title'>Discover</h4>
                    <h3 className='our-story-subtitle bigger-title-2 mt-lg-n2'>OUR STORY</h3>

                    <p className='our-story-text normal-text mt-4'>
                        Multiply isn't night sixth under second second open he darkness 
                        said beast, without whales every herb sea place light life from divide isn't. 
                        Deep give greater. Darkness have fifth third open over itself. 
                        Third great make form is waters were. Midst green very.
                    </p>

                    <OrangeLink HTML="READ OUR FULL STORY" to="/"/>
                    
                </div>

            </div>

        </section>
    );
}
  
export default OurStory;