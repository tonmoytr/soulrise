import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      {/* top footer */}
      <div className="footer-section">
        <div className="container w-container">
          <div className="footer-flex-wrap">
            {/* LEFT: logo + intro + socials */}
            <div className="footer-content-wrap">
              <Link
                href="/"
                className="footer-logo-link w-inline-block w--current"
                aria-current="page"
              >
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62e3c053b9c88d51e60bec37_humanity-footer-logo.svg"
                  alt="Logo Image"
                  loading="lazy"
                />
              </Link>

              <p className="footer-content">
                No one knows what an equitable world looks like. We are working
                together with only hope for raising a better tomorrow.
              </p>

              <div className="footer-social-flex-wrap">
                <a
                  className="footer-social-link w-inline-block"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2cca788eb55f95480dea1_footer-social%20-icon-01.svg"
                    alt="Instagram Footer Social Link"
                    loading="lazy"
                  />
                </a>
                <a
                  className="footer-social-link w-inline-block"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2cca7a6a3d405d342b287_footer-social%20-icon-02.svg"
                    alt="Facebook Footer Social Link"
                    loading="lazy"
                  />
                </a>
                <a
                  className="footer-social-link w-inline-block"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/656ec7e3fe907b32ab31f014_footer-social%20-icon-03.svg"
                    alt="Twitter Footer Social Link"
                    loading="lazy"
                  />
                </a>
                <a
                  className="footer-social-link w-inline-block"
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2cca6e760ef26e7460802_footer-social%20-icon-04.svg"
                    alt="Pinterest Footer Social Link"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT: widgets grid (Get Involved, Utility Page, Contact) */}
            <div className="footer-widget-wrap">
              <div className="w-layout-grid footer-widget-grid">
                {/* Get Involved */}
                <div className="footer-item">
                  <div className="footer-menu-content">
                    <div className="section-title">
                      <h3 className="footer-widget-title">Get Involved</h3>
                    </div>
                    <div className="footer-menu-link-wrap">
                      <Link href="/about-us" className="footer-link">
                        About Us
                      </Link>
                      <Link href="/volunteer" className="footer-link">
                        Volunteer
                      </Link>
                      <Link href="/causes" className="footer-link">
                        Causes
                      </Link>
                      <Link href="/project" className="footer-link">
                        Projects
                      </Link>
                      <Link href="/events" className="footer-link">
                        Events
                      </Link>
                      <Link href="/team" className="footer-link">
                        Team
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Utility Page */}
                <div className="footer-item">
                  <div className="footer-menu-content">
                    <div className="section-title">
                      <h3 className="footer-widget-title">Utility Page</h3>
                    </div>
                    <div className="footer-menu-link-wrap">
                      <Link href="/privacy" className="footer-link">
                        Privacy Policy
                      </Link>
                      <Link href="terms" className="footer-link">
                        Terms & Conditions
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="footer-item">
                  <div className="footer-menu-content">
                    <div className="section-title">
                      <h3 className="footer-widget-title">Contact</h3>
                    </div>

                    <div className="footer-address-wrap">
                      <div className="footer-address-content">
                        <p className="footer-widget-content">
                          42 Camden High Street London NW1 0JH United Kingdom
                        </p>
                      </div>

                      <div className="footer-helpline-wrap">
                        <div className="helpline-content">
                          <p className="footer-widget-content">
                            help: &nbsp;
                            <a href="#" className="footer-mail-link">
                              ‍
                            </a>
                            <a
                              href="mailto:help@soulrise.org"
                              className="footer-mail-link"
                            >
                              help@sourise.org
                            </a>
                          </p>
                          <a
                            href="tel:+44 20 7946 0958"
                            className="footer-phone-link"
                          >
                            +44 20 7946 0958
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Contact */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright bar */}
      <div className="copyright-wrap">
        <p className="footer-widget-content">
          Copyright © Soulrise | Designed & Powered by{" "}
          <a
            href="https://aptecode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="copyright-link"
            style={{ color: "orange" }}
          >
            ApteCode.
          </a>
        </p>
      </div>
    </div>
  );
}
