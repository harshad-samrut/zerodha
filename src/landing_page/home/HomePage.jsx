import Navbar from "../Navbar";
import Hero from "./Hero";
import Trust from "./Trust";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAcc from "./OpenAcc";
import Footer from "../Footer";
import KiteConnect from "./KiteConnect";
import SignUp from "../SignUp"

function HomePage() {
  return (
    <>
      <Hero />
      <SignUp />
      <Trust />
      <KiteConnect />
      <Pricing />
      <Education />
      <OpenAcc />
      <SignUp />
    </>
  );
}

export default HomePage;
