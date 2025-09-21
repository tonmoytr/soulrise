// app/components/TopBar.jsx
export default function TopBar() {
  return (
    <div className="top-bar-section">
      <div className="container w-container">
        <div className="top-bar-wrap">
          <div className="w-layout-grid top-bar-grid">
            <div className="top-bar-contact-wrap">
              <div className="top-contact-item">
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2a72b1a32f364a212326a_top-bar-contact-icon-01%20.svg"
                  alt="Phone"
                />
                <a href="tel:+01569896654" className="top-bar-contact-link">
                  +44 20 7946 095
                </a>
              </div>
              <div className="top-contact-item">
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2a72b4fdd0370058950cb_top-bar-contact-icon-02.svg"
                  alt="Mail"
                />
                <a
                  href="mailto:info@charity.com"
                  className="top-bar-contact-link"
                >
                  team@soulrise.org
                </a>
              </div>
            </div>

            <div className="top-bar-social-wrap">
              <div className="top-social-link-wrap">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="top-social-link-item w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2a99a76761f7fd6a82801_top-bar-social-icon-01.svg"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="top-social-link-item w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2a72b9b6d6f3a34cf4a16_top-bar-social-icon-02.svg"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="top-social-link-item w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/656ec5fb58fabc4e070f2e0f_top-bar-social-icon-03.svg"
                    alt="Twitter/X"
                  />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  className="top-social-link-item w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2a72ed79e454807c027e7_top-bar-social-icon-04%20.svg"
                    alt="Pinterest"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
