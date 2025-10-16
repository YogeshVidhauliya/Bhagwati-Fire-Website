function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <div className="About-Div">
        <h2>PROVIDING END-TO-END FIRE SAFETY SOLUTIONS</h2>
        <p className="about-para">
          With over 25 years of experience in the fire safety industry, we are a trusted name in India, providing a comprehensive range of fire protection solutions, including Fire Suppression Systems, Kitchen Suppression Systems, Fire Extinguishers, and related equipment. At Bhagwati Fire, safety is our priority, and we pride ourselves on delivering innovative, high-quality, and reliable products. Our commitment to integrity, transparency, and timely service ensures that our clients receive the best protection and peace of mind.
        </p>
      </div>



       <div className="About-Div">
        <h2>OUR MISSION</h2>
        <p className="about-para">
          To make workplaces, homes, and public spaces completely safe from fire hazards by offering advanced safety solutions, expert guidance, and unmatched service support.
        </p>
      </div>


       <div className="About-Div">
        <h2>OUR VISION</h2>
        <p className="about-para">
          To become India’s most trusted fire safety partner, ensuring zero compromises on safety, compliance, and innovation.
        </p>
      </div>


       <div className="About-Div">
        <h2>WHY CHOOSE BHAGWATI FIRE?</h2>
        <p className="about-para">
          
          <b>Flexible & Cost-Effective: </b>Tailored fire safety solutions to suit your needs and budget.
          <br/>
          <b>Satisfaction Guarantee:</b> Every product and service comes with our assurance of quality and reliability.
          <br/>
          <b>Dedicated to Save Lives:</b> Our team works tirelessly to ensure maximum protection for people and property.
          <br/>
          <b>Electronically & Securely Managed:</b> We maintain proper records and digital tracking for all installations and maintenance.
          <br/>
          <b>24/7 Emergency Support:</b>We are available round the clock to respond to urgent fire safety needs.
          <br/>
          <b>Experienced Team:</b> Skilled professionals with extensive industry knowledge for installation, inspection, and maintenance.
        </p>
      </div>

      <div>
        <ul>
          <li>Flexible & Cost-Effective</li>
          <li>Satisfaction Guarantee</li>
          <li>Dedicated to Save Lives</li>
          <li>Electronically & Securely</li>
          <li>24/7 Available to Service</li>
        </ul>
      </div>

      {/* Emergency Contact Section */}
      <div className="emergency-contact">
        <p>
          We Are Available 24 Hours <br />
          For Emergency: +91-9868081048 / 9958453016
        </p>
        <img
          src="/images/person.jpg" // replace with your image path
          alt="Person"
          className="contact-person"
        />
      </div>
    </div>
  );
}

export default About;
