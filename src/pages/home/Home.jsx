import React from "react";
import { Link } from "react-router-dom";
import Advantage from "../../components/Advantage/Advantage";
import Introduction from "../../components/inroduction/Introduction";
import Quotation from "../../components/quotation/Quotation";
import RateCalculator from "../../components/RateCalculator/RateCalculator";
import "./Home.scss";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className=" hero">
        <div className="hero-text">
          <h2>Welcome to Remight logistics.</h2>
          <p>Your premier partner in logistics and supply chain management. With a legacy of reliability and a commitment to excellence, we empower businesses of all sizes to streamline their operations, reduce costs, and deliver goods efficiently to customers worldwide.</p>
          
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-secondary">
              <Link to={"/register"}>Get Started</Link>
            </button>
          </div>

          
          <div className="--flex-start">
            <div>
                <pre>+234 703 63 22 097</pre> 
                <pre>info@remight.org</pre>
            </div>

            <div>
                <pre>| Trasport ltd. inc. 300</pre> 
                <address> Computer Village, Ikeja Lagos state Nigeria</address>
            </div>

            <div>
                <pre>| 9:00 - 18:00</pre> 
                <pre>| Monday - Friday</pre>
            </div>
        </div>

        </div>

        <div className="box">

        </div>
      </section>

      <Introduction/>
      <Advantage/>
      <Quotation/>
      <RateCalculator/>
    </>
  );
};

export default Home;
