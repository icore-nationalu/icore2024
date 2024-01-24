import { Fragment } from "react";

const Registration = () => {
  const registration_fee = [
    {
      type: "Author Registration",
      fee_php: "PHP 19,000.00",
      fee_usd: "USD 350.00",
      inclusions: [
        "Access to all Conference Sessions",
        "Conference Materials and Proceedings",
        "Keynote Addresses and Special Sessions",
        "Coffee Breaks and Networking Opportunities",
        "Certificate of Paper Presentation",
      ],
    },
    {
      type: "Regular Audience Registration",
      fee_php: "PHP 1,000.00",
      fee_usd: "USD 20.00",
      inclusions: [
        "Access to all Conference Sessions",
        "Conference Materials and Proceedings",
        "Keynote Addresses and Special Sessions",
        "Coffee Breaks and Networking Opportunities",
        "Certificate of Participation",
      ],
    },
  ];

  const fees = [
    {
      type: "Student Rate ",
      subType: ["Undergraduate Students"],
      fee: "USD 325.00",
    },
    {
      type: "Regular Rate",
      subType: ["Graduate Students", "Faculty First", "Author"],
      fee: "USD 400.00",
    },
    {
      type: "Early Bird",
      fee: "USD 350.00",
    },
    {
      type: "Listener/Co-Author",
      fee: "USD 20.00",
    },
  ];

  const inclusions = [
    "Access to all Conference Sessions",
    "Conference Materials and Proceedings",
    "Keynote Addresses and Special Sessions",
    "Coffee Breaks and Networking Opportunities",
    "Certificate of Paper Presentation/Participation",
  ];

  return (
    <>
      <section id="registration">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Register</span>
            <h1 className="heading">Conference Registration Details</h1>
            <p className="subheading">
              You will find detailed information regarding registration options
              and associated fees for participants interested in joining this
              dynamic event.
            </p>
          </div>
        </div>
      </section>
      <div className="registration-wrapper">
        <div className="wrapper">
          <div>
            <div className="fee-table">
              <div className="table-header">
                <p>Registration Fees</p>
              </div>
              <div className="table-content">
                {/* <div className="row-header">
                  <span>TYPE</span>
                </div>
                <div className="row-header">
                  <span>FEE</span>
                </div> */}
                {fees.map((v, i) => {
                  const { type, subType, fee } = v;
                  return (
                    <Fragment key={i}>
                      <div className="row">
                        <span>{type}</span>
                        {subType && (
                          <ul>
                            {subType.map((v, i) => {
                              return <li key={i}>{v}</li>;
                            })}
                          </ul>
                        )}
                      </div>
                      <div className="row">
                        <span>{fee}</span>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div className="inclusions-table">
              <div className="table-header">
                <p>Inclusions</p>
              </div>
              <div className="table-content">
                {inclusions.map((v, i) => {
                  return (
                    <div className="row" key={i}>
                      <span>{v}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 
            <p className="content">
              The conference fee inclusions provide{" "}
              <span>
                access to all conference sessions, materials, and proceedings,
                including keynote addresses and special sessions
              </span>
              . Attendees also enjoy{" "}
              <span>coffee breaks and networking opportunities</span>.
              Presenters receive a{" "}
              <span>certificate of paper presentation</span>, while listeners
              receive a <span>certificate of participation</span>.
            </p>
 */}
            <h3 className="heading">Payment Methods</h3>
            <p className="content">
              Payments can be made online through the secure registration portal
              on the conference website.
              <br /> <br />
              Accepted payment methods include credit cards, bank transfers, and
              other online payment options.
            </p>

            <h3 className="heading">Important Dates</h3>
            <p className="content">Registration Deadline: July 8, 2024</p>

            <h3 className="heading">How to Register</h3>
            <ul className="registration-steps">
              <li>1. Visit the official iCORE 2024 website: icoreph.org</li>
              <li>2. Navigate to the Registration section.</li>
              <li>3. Complete the online registration form.</li>
              <li>4. Choose your registration category.</li>
              <li>
                5. Process your payment through the secure online payment
                system.
              </li>
            </ul>

            <h3 className="heading">Contact Information</h3>
            <p className="content">
              For registration inquiries, please contact the iCORE 2024
              registration desk at{" "}
              <a href="mailto:icore2024@national-u.edu.ph." className="link">
                icore2024@national-u.edu.ph
              </a>
              .
              <br /> <br />
              Twitter: @iCORE2024
              <br /> <br />
              LinkedIn: iCORE 2024
              <br /> <br />
              We look forward to your active participation at iCORE 2024 in
              National University-MOA!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
