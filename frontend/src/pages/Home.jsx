import { useState, useEffect } from "react";

function Home() {
  // Array of hero slides with image and text
  const heroSlides = [
    {
      image: "/images/fireBackground.jpg",
      title: "Welcome to Bhagwati Sales & Fire Company",
      subtitle: "Your trusted partner in fire safety equipment and solutions."
    },
    {
      image: "/images/fireBackground3.jpg",
      title: "Fire Hydrant System",
      subtitle: "Quick access to water for firefighting, ensuring maximum safety and minimal damage during emergencies."
    },
    {
      image: "/images/fireBackground2.jpg",
      title: "Fire Panel System",
      subtitle: "Intelligent fire detection and alert systems to protect lives and property with instant notifications."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      >
       

        <div className="overlay">
          <h1>{heroSlides[currentSlide].title}</h1>
          <p>{heroSlides[currentSlide].subtitle}</p>
        </div>
      </div>

      {/* Our Speciality Section */}
      <section className="speciality-section">
        <div className="speciality-container">
          <div className="speciality-text">
            <div className="animated-container">
              <div className="animated-group">
                <h2 className="animated-heading">Our Speciality</h2>
                <p>
                  We have been providing top-quality fire safety solutions for over{" "}
                  <strong>25 years</strong>. Serving{" "}
                  <strong>Noida, Delhi, Ghaziabad, and Gurugram</strong>, we
                  specialize in fire extinguishers, hydrants, alarms, and complete
                  safety solutions for offices, factories, and homes.
                </p>

                <h2 className="animated-heading">Why Choose Us</h2>
                <p>
                  From installation to annual maintenance, we provide end-to-end
                  fire safety services. Our products are ISI-marked and comply with
                  all government safety standards, making us a trusted choice for
                  businesses and homes.
                </p>

                <h2 className="animated-heading">Commitment to Safety</h2>
                <p>
                  We believe in proactive fire prevention, not just emergency
                  response. Our experts conduct regular inspections, safety audits,
                  and training programs to make workplaces and residences truly
                  fire-ready.
                </p>
              </div>
            </div>
          </div>

          <div className="speciality-icon">
            <img src="/images/logo.png" alt="Fire Safety Icon" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
