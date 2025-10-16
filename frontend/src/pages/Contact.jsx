function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Address: Opp. Rajkiya Inter College, Sector 22 Near SBI Bank, Noida</p>
      <p>Phone: +91 9968081848 / 9958453016</p>
      <p>Email: bhagwati.snf@rediffmail.com</p>

      {/* Clickable Google Map */}
      <a
        href="https://www.google.com/maps/place/28%C2%B035'49.5%22N+77%C2%B020'33.3%22E/@28.597076,77.340014,17z"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", marginTop: "20px", width: "100%", height: "400px" }}
      >
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.123456!2d77.3425889!3d28.597076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzQ5LjUiTiA3N8KwMjAnMzMuMyJF!5e0!3m2!1sen!2sin!4v1696468461234!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </div>
  );
}

export default Contact;
