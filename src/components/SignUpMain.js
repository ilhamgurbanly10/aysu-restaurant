import SignUpMainForm from './SignUpMainForm';


function SignUpMain() {

    return (
        <section className='sign-up-main mt-6 container-2 text-center overflow-hidden'>

            <h3 className="sign-up-main-title bigger-title-4">
                KEEP UP TO DATE WITH US!
            </h3>

            <p className="sign-up-main-title-text mt-4 bigger-text-6 text-lightgrey">
                Sign up to be the first to receive 
                special news and event updates from Aysu Restaurant.
            </p>
            
            <SignUpMainForm/>
            
        </section>
    );
}
  
export default SignUpMain;