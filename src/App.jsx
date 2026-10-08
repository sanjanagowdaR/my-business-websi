import './App.css'

function App() {
  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <span>VAYUPUTRA</span>
          <small>TRAVELS</small>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="tel:9071889824" className="nav-call">
          Call Now
        </a>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        {/* Background animation */}
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO VAYUPUTRA TRAVELS
          </p>

          <h1>
            Travel With
            <span> Confidence.</span>
          </h1>

          <p className="tagline">
            Your Safety Is Our First Preference
          </p>

          <p className="hero-description">
            Safe, comfortable and reliable travel solutions
            for every journey. Whether it is a family trip,
            airport transfer, wedding or corporate travel,
            we are here to make your journey better.
          </p>

          <div className="hero-buttons">

            <a href="tel:9071889824" className="gold-btn">
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919071889824"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* Decorative circle */}
        <div className="hero-circle">
          <div className="circle-inner">
            <span>VT</span>
            <small>TRAVEL</small>
          </div>
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services" id="services">

        <div className="section-title">

          <p>WHAT WE OFFER</p>

          <h2>
            Our <span>Services</span>
          </h2>

          <div className="line"></div>

          <p className="section-text">
            Travel services designed for comfort,
            safety and convenience.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">
            <div className="service-number">01</div>
            <div className="service-icon">🌴</div>
            <h3>Tour Packages</h3>
            <p>
              Explore new destinations with comfortable
              and convenient travel arrangements.
            </p>
          </div>


          <div className="service-card">
            <div className="service-number">02</div>
            <div className="service-icon">✈️</div>
            <h3>Airport Drops</h3>
            <p>
              Reliable pickup and drop services for
              stress-free airport travel.
            </p>
          </div>


          <div className="service-card">
            <div className="service-number">03</div>
            <div className="service-icon">💍</div>
            <h3>Wedding Trips</h3>
            <p>
              Comfortable transportation for weddings,
              celebrations and special occasions.
            </p>
          </div>


          <div className="service-card">
            <div className="service-number">04</div>
            <div className="service-icon">🧳</div>
            <h3>Outstation Trips</h3>
            <p>
              Enjoy long-distance journeys with
              dependable and comfortable travel.
            </p>
          </div>


          <div className="service-card">
            <div className="service-number">05</div>
            <div className="service-icon">🚘</div>
            <h3>Corporate Travel</h3>
            <p>
              Professional transportation solutions
              for business travel and events.
            </p>
          </div>


          <div className="service-card">
            <div className="service-number">06</div>
            <div className="service-icon">👥</div>
            <h3>Group Travel</h3>
            <p>
              Convenient travel arrangements for
              groups, families and tours.
            </p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about" id="about">

        <div className="about-decoration">
          <span>VT</span>
        </div>

        <div className="about-content">

          <p className="small-title">
            ABOUT US
          </p>

          <h2>
            Every Journey
            <span> Matters.</span>
          </h2>

          <p>
            At Vayuputra Travels, we believe that every
            journey should be safe, comfortable and
            memorable.
          </p>

          <p>
            We provide reliable transportation services
            for individuals, families, groups, weddings,
            airport travel and corporate requirements.
          </p>

          <div className="about-features">

            <div>
              <span>✓</span>
              <p>Safe & Reliable</p>
            </div>

            <div>
              <span>✓</span>
              <p>Well Maintained Vehicle</p>
            </div>

            <div>
              <span>✓</span>
              <p>Professional Service</p>
            </div>

            <div>
              <span>✓</span>
              <p>24/7 Service</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="why-us" id="why-us">

        <div className="section-title">

          <p>WHY VAYUPUTRA</p>

          <h2>
            Travel With <span>Trust</span>
          </h2>

          <div className="line"></div>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Safe & Reliable</h3>
            <p>
              Your safety is our first preference.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">🚗</div>
            <h3>Well Maintained</h3>
            <p>
              Comfortable and well maintained vehicles.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">⏰</div>
            <h3>24/7 Service</h3>
            <p>
              Travel assistance whenever you need us.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">★</div>
            <h3>Reliable Service</h3>
            <p>
              We value every customer and every journey.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <div className="contact-box">

          <p className="small-title">
            READY TO TRAVEL?
          </p>

          <h2>
            Let's Start Your
            <span> Journey.</span>
          </h2>

          <p>
            Contact us for bookings, enquiries and
            travel arrangements.
          </p>

          <div className="contact-person">
            <div className="person-circle">
              C
            </div>

            <div>
              <small>CONTACT PERSON</small>
              <h3>Chandan</h3>
            </div>
          </div>

          <a
            href="tel:9071889824"
            className="phone"
          >
            📞 9071889824
          </a>

          <div className="contact-buttons">

            <a
              href="tel:9071889824"
              className="gold-btn"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919071889824"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          <span>VAYUPUTRA</span>
          <small>TRAVELS</small>
        </div>

        <p>
          Your Safety Is Our First Preference
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Vayuputra Travels. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default App