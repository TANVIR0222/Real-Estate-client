import About from "./About";
import Banner from "./Banner";
import Feature from "./Feature";
import Listing from "./Listing";

const Home = () => {
    return (
        <div>
           <Banner /> 
           {/*  */}
           <Feature />
           <Listing />
           <About />
        </div>
    );
};

export default Home;