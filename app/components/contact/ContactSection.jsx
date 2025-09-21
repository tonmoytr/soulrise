export default function ContactSection({
  email = "support@humanity.com",
  phone = "+01 (000) 265 458",
  socials = {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    pinterest: "https://www.pinterest.com",
  },
  formAction = "#", // replace with your handler later
}) {
  return (
    <section className="contact-us-section">
      <div className="container w-container">
        <div className="w-layout-grid contact-us-grid">
          {/* LEFT: copy + contact info */}
          <div className="contact-us-content-wrap">
            <div className="section-title-wrap">
              <p className="sub-title pink">Contact</p>
              <h2 className="section-title">Get in Touch With Us</h2>
              <p className="section-content">
                We are here to help you at any time all over the world so don’t
                hesitate to reach us at any moment. Here we are providing our
                organization address details for easy of your reach.
              </p>
            </div>

            {/* Email */}
            <div className="contact-email-flex">
              <div className="contact-email-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b565bec00a4aa93295490f_contact-us-mail-icon.svg"
                  alt="Mail"
                  loading="lazy"
                />
              </div>
              <div className="contact-email-content">
                <h3 className="contact-email-title">Message</h3>
                <a href={`mailto:${email}`} className="contact-email-link">
                  {email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-phone-flex">
              <div className="contact-phone-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b565be3eba99be2f9761f5_contact-us-phone-icon.svg"
                  alt="Phone"
                  loading="lazy"
                />
              </div>
              <div className="contact-phone-content">
                <h3 className="contact-phone-title">Contact Us</h3>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="contact-phone-link"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="contact-social-media-flex">
              <div className="section-title-wrap">
                <h4 className="section-title">Follow us on social media</h4>
                <p className="social-content">
                  Humanity organization’s process is posted on social media
                  platforms too, so please follow us.
                </p>
              </div>

              <div className="contact-social-link-wrap">
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.instagram}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b568c57b892de91e154b20_contact-social-icon-01.svg"
                    alt="Instagram"
                    loading="lazy"
                  />
                </a>
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.facebook}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b568fcc00c482a21352e65_contact-social-icon-02.svg"
                    alt="Facebook"
                    loading="lazy"
                  />
                </a>
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.twitter}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/656ecac4f15d48f8233f7950_contact-social-icon-03.svg"
                    alt="Twitter"
                    loading="lazy"
                  />
                </a>
                <a
                  className="contact-social-link w-inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={socials.pinterest}
                >
                  <img
                    src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b568fcf60a8e4ab178bdcc_contact-social-icon-04.svg"
                    alt="Pinterest"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="contact-us-form-wrap">
            <div className="contact-us-form-content">
              <div className="contact-us-form w-form">
                <form
                  className="contact-form"
                  method="post"
                  action={formAction}
                  noValidate
                >
                  <input
                    type="text"
                    className="contact-form-label w-input"
                    id="contact-name"
                    name="name"
                    placeholder="Enter Your Name*"
                    required
                  />
                  <input
                    type="tel"
                    className="contact-form-label w-input"
                    id="contact-phone"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                  />
                  <input
                    type="email"
                    className="contact-form-label w-input"
                    id="contact-email"
                    name="email"
                    placeholder="Email Address*"
                    required
                  />
                  <textarea
                    className="contact-form-label message-label w-input"
                    id="contact-message"
                    name="message"
                    placeholder="Your Message*"
                    required
                  />
                  <input
                    type="submit"
                    className="black-button extra-large w-button"
                    value="Submit "
                  />
                </form>

                {/* Webflow-style status blocks (hidden by default in your CSS) */}
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
