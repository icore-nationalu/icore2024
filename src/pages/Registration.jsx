import { Fragment } from "react";

const Registration = () => {
  const fees = [
    {
      type: "Student Rate ",
      subType: ["Undergraduate Students"],
      fee: "USD 325.00 / PHP 17,875.00",
    },
    {
      type: "Regular Rate",
      subType: ["Graduate Students", "Faculty", " First Author"],
      fee: "USD 400.00 / PHP 22,000.00",
    },
    {
      type: "Early Bird",
      fee: "USD 350.00 / PHP 19,250.00",
    },
    {
      type: "Listener/Co-Author",
      fee: "USD 20.00 / PHP 1,100.00",
    },
  ];

  const inclusions = [
    "Access to all Conference Sessions",
    "Conference Materials and Proceedings",
    "Keynote Addresses and Special Sessions",
    "Coffee Breaks and Networking Opportunities",
    "Certificate of Paper Presentation/Participation",
  ];

  const bankDetails = {
    acctName: "NATIONAL UNIVERSITY, INC.",
    acctNo: "006750007529",
    swiftCode: "BNORPHMM",
    bankAddress: "BDO SAVEMORE NAGTAHAN",
  };

  return (
    <>
      <section id="registration">
        <div className="header-container">
          <div className="header-wrapper">
            <span>Register</span>
            <h1 className="heading">Conference Registration Details</h1>
            {/* 
            <p className="subheading">
              You will find detailed information regarding registration options
              and associated fees for participants interested in joining this
              dynamic event.
            </p>
             */}
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

            <h3 className="heading">Payment Methods</h3>
            <div className="bank-container">
              <div className="heading">
                <p>BDO Peso Account</p>
              </div>
              <div className="bank-details">
                <div className="bank-detail-item">
                  <div className="label">
                    <p>Account Name</p>
                  </div>
                  <div className="data">
                    <p>{bankDetails.acctName}</p>
                  </div>
                </div>
                <div className="bank-detail-item">
                  <div className="label">
                    <p>Account Number</p>
                  </div>
                  <div className="data">
                    <p>{bankDetails.acctNo}</p>
                  </div>
                </div>
                <div className="bank-detail-item">
                  <div className="label">
                    <p>Swift Code</p>
                  </div>
                  <div className="data">
                    <p>{bankDetails.swiftCode}</p>
                  </div>
                </div>
                <div className="bank-detail-item">
                  <div className="label">
                    <p>Bank Address</p>
                  </div>
                  <div className="data">
                    <p>{bankDetails.bankAddress}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="content">
              {/* 
              Payments can be made online through the secure registration portal
              on the conference website.
              <br /> <br />
              Accepted payment methods include credit cards, bank transfers, and
              other online payment options.
               */}
            </p>

            <h3 className="heading">Important Dates</h3>
            <p className="content">Registration Deadline: July 8, 2024</p>

            {/* 
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
             */}
            <h3 className="heading">Contact Information</h3>
            <p className="content">
              For registration inquiries, please contact the iCORE 2024
              Secreteriat at{" "}
              <a href="mailto:icore2024@national-u.edu.ph." className="link">
                icore2024@national-u.edu.ph
              </a>
              .
              <br /> <br />
              Twitter:{" "}
              <a
                href="https://x.com/iCore2024ph"
                className="link"
                target="_blank"
              >
                @iCORE2024PH
              </a>
              <br /> <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/icore2024"
                className="link"
                target="_blank"
              >
                iCORE 2024
              </a>
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
