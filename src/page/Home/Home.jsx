import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import Feature from "./Feature";
import Listing from "./Listing";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner />
      {/*  */}
      <Feature />
      <Listing />
      <About />
    </div>
  );
};

export default Home;
