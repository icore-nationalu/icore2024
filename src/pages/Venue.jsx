import VenueImage from "../assets/images/venue.png";

const Venue = () => {
  return (
    <>
      <section id="venue">
        <div className="header-wrapper">
          <span>Venue</span>
          <h1 className="heading">
            Bridging Modern Excellence with Cultural Richness
          </h1>
          <p className="subheading">
            The conference will be held at the vibrant National University-MOA,
            Philippines, offering a unique blend of modern amenities and natural
            beauty. Participants will have the opportunity to explore the
            region's rich cultural heritage while engaging in stimulating
            discussions on the future of information and computing research.
          </p>
        </div>
      </section>
      <section className="venue-container">
        <div className="wrapper">
          <div className="image-wrapper">
            <img src={VenueImage} alt="NU-MOA" />
          </div>

          <h3>National University MOA</h3>
          <p>
            The vibrant and modern setting for the International Conference on
            Information and Computing Research (iCORE) 2024. Nestled within the
            bustling Mall of Asia Complex in Pasay City, Philippines, NU MOA is
            a state-of-the-art facility, providing an ideal environment for
            collaboration, innovation, and intellectual exchange.
          </p>

          <h3>Address</h3>
          <p>
            NU Building, Coral Way Street, <br /> <br />
            Mall of Asia Complex, Pasay City <br /> <br />
            1300, Philippines
          </p>

          <h3>Architectural Excellence</h3>
          <p>
            The National University MOA boasts a contemporary and
            architecturally impressive design, reflecting the institution's
            commitment to providing cutting-edge facilities for academic and
            professional events. The venue harmoniously blends aesthetics with
            functionality, creating an inviting and conducive space for
            conferences and gatherings.
          </p>

          <h3>Strategic Excellence</h3>
          <p>
            Situated in the heart of the iconic Mall of Asia Complex, NU MOA
            benefits from a strategic location with easy accessibility.
            Attendees will appreciate the convenience of the venue, with its
            proximity to major transportation hubs, hotels, shopping centers,
            and entertainment options, ensuring a seamless and enjoyable
            conference experience
          </p>

          <h3>Conference Facilities</h3>
          <p>
            The NU MOA conference facilities are equipped with state-of-the-art
            amenities to meet the diverse needs of iCORE participants. Multiple
            conference rooms with modern audio-visual setups provide the perfect
            backdrop for paper presentations, keynote addresses, and interactive
            sessions. The venue's technological infrastructure ensures a smooth
            and engaging experience for both on-site and virtual attendees.
          </p>

          <h3>Exhibition Areas</h3>
          <p>
            NU MOA offers spacious exhibition areas where industry leaders,
            sponsors, and exhibitors can showcase the latest technological
            innovations, products, and services. These areas serve as dynamic
            hubs for networking and fostering collaborations between academia
            and industry professionals.
          </p>

          <h3>Accessibility</h3>
          <p>
            The venue's strategic location near major transportation hubs,
            including airports and public transit, makes it easily accessible
            for local and international participants. NU MOA's commitment to
            accessibility aligns with the goal of creating an inclusive and
            globally connected conference.
            <br /> <br />
            We invite you to immerse yourself in the dynamic and intellectually
            stimulating environment of National University MOA as we gather for
            iCORE 2024. Get ready to engage in thought-provoking discussions,
            forge new collaborations, and explore the forefront of information
            and computing research within this exceptional conference venue. We
            look forward to welcoming you to NU MOA in Pasay City, Philippines!
          </p>
        </div>
      </section>

      <section className="directions">
        <div className="wrapper">
          <div>
            <div className="header">
              <h2>
                Getting to National University MOA (NU MOA), Pasay City,
                Philippines
              </h2>
              <p className="description">
                Whether you're arriving from within Metro Manila or from a more
                distant location, there are several convenient transportation
                options to reach the National University MOA in Pasay City.
                Here's a guide on how to get to the conference venue:
              </p>
            </div>

            <h3>1. From Ninoy Aquino International Airport (NAIA)</h3>
            <p>
              NU MOA is situated in close proximity to NAIA. You can take a taxi
              or ride-sharing service directly from the airport to the
              conference venue. The journey should take approximately 15-30
              minutes, depending on traffic conditions.
            </p>

            <h3>2. From Other Parts of Metro Manila</h3>
            <p>
              If you're coming from other areas within Metro Manila, you can
              take a taxi, ride-sharing service, or use public transportation
              options such as buses or the Metro Rail Transit (MRT). Confirm
              with the driver or operator that you are heading to the National
              University MOA within the Mall of Asia Complex in Pasay City.
            </p>

            <h3>3. Using Public Transportation</h3>
            <p>
              For those using public transportation, the Mall of Asia Complex is
              well-served by buses and jeepneys. You can find public
              transportation options at major transport terminals and key points
              across Metro Manila. Alight at the designated Mall of Asia bus or
              jeepney terminal and proceed to the NU MOA within the complex.
            </p>

            <h3>4. Ride-Sharing Services</h3>
            <p>
              Services like{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"
                target="_blank"
              >
                Grab
              </a>{" "}
              and other ride-sharing apps (
              <a
                href="https://play.google.com/store/search?q=angkas&c=apps"
                target="_blank"
              >
                Angkas
              </a>
              ,{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.joyride.rider"
                target="_blank"
              >
                JoyRide
              </a>
              ) are widely available in Metro Manila. You can use these apps to
              book a convenient and comfortable ride directly to NU MOA. Enter
              the conference venue address (NU Building, Coral Way Street, Mall
              of Asia Complex, Pasay City) as your destination.
            </p>

            <h3>5. By Private Vehicle</h3>
            <p>
              If you're driving, use navigation apps like{" "}
              <a
                href="https://maps.app.goo.gl/vsgucAGGwPBEUWQx7"
                target="_blank"
              >
                Google Maps
              </a>{" "}
              to guide you to the conference venue. Parking facilities are
              available within the Mall of Asia Complex.
            </p>

            <h3>Local Landmarks</h3>
            <p>
              The NU MOA is situated within the Mall of Asia Complex, one of the
              largest shopping and entertainment complexes in Asia. Major
              landmarks nearby include the SM Mall of Asia, SMX Convention
              Center, and the Mall of Asia Arena.
            </p>

            <h3>Note</h3>
            <p>
              It is advisable to plan your journey in advance, considering
              potential traffic conditions in Metro Manila. If you are an
              international attendee, familiarize yourself with local
              transportation options and currency exchange facilities.
              <br /> <br />
              We look forward to welcoming you to the International Conference
              on Information and Computing Research (iCORE) at National
              University MOA in Pasay City! Safe travels!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Venue;
