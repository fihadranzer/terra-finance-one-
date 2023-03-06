import React from "react";
import styles from "./style";
import './index.css'
import {
  Hero,
  Navbar,
  Stats,
  Business,
  Billing,
  Testimonials,
  CardDeals,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => (
  <div className="w-full bg-primary overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeals />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
