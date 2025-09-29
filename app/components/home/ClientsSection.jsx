// components/SoulRise/ClientsSection.jsx
export default function ClientsSection() {
  return (
    <section className="clients-section" id="clients">
      <div className="container w-container">
        {/* Counters */}
        <div className="counter-content-wrap">
          <div className="w-layout-grid counter-grid">
            <div className="counter-content">
              <h2 className="section-title counter">200k</h2>
              <p className="section-content">
                Received Donations From Our People
              </p>
            </div>

            <div className="counter-content">
              <h3 className="section-title counter">99K</h3>
              <p className="section-content">
                Projects Done With The Help Of Donators
              </p>
            </div>

            <div className="counter-content">
              <h3 className="section-title counter">20k</h3>
              <p className="section-content">
                People We Helped till the is year
              </p>
            </div>

            <div className="counter-content">
              <h3 className="section-title counter">10.7K</h3>
              <p className="section-content">
                Number of Solved Causes till now
              </p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="counter-border" />

        {/* Client logos */}
        {/* <div className="clients-image-wrap">
          <div className="w-layout-grid clients-grid">
            <div className="clients-image-content">
              <img
                className="clients-image"
                loading="lazy"
                alt="Image For The Clients Content"
                src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f57ccd845705c513371c_Client%20Image%201.svg"
              />
            </div>
            <div className="clients-image-content">
              <img
                className="clients-image"
                loading="lazy"
                alt="Image For The Clients Content"
                src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f57ccd8457464313371f_Client%20Image%202.svg"
              />
            </div>
            <div className="clients-image-content">
              <img
                className="clients-image"
                loading="lazy"
                alt="Image For The Clients Content"
                src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f57ccd8457277a13371d_Client%20Image%203.svg"
              />
            </div>
            <div className="clients-image-content">
              <img
                className="clients-image"
                loading="lazy"
                alt="Image For The Clients Content"
                src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f57ccd8457aca913371e_Client%20Image%204.svg"
              />
            </div>
            <div className="clients-image-content">
              <img
                className="clients-image"
                loading="lazy"
                alt="Image For The Clients Content"
                src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f57ccd8457b3bd133720_Client%20Image%205.svg"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
