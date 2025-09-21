export default function VolunteerForm({
  subtitle = "Help The People With us",
  title = "Need Your Heartful Help",
  paras = [
    "The single funds allow you to advise a smaller number of grants, on a schedule or as desired to charitable organization, cause, country, or region.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  ],
  steps = [
    {
      no: "01",
      h: "Create a personal profile",
      p: "We aspire to be like helpers. So we serve all people. No matter their religion, ethnicity, or gender.",
    },
    {
      no: "02",
      h: "Add your organization",
      p: "Going after poverty’s symptoms is temporary. Going after its causes is permanent for everyone.",
    },
    {
      no: "03",
      h: "Add volunteer opportunities",
      p: "In an effort to ensure volunteering at Foundation events is fulfilling experience for you.",
    },
    {
      no: "04",
      h: "You are ready to recruit!",
      p: "Doing the most good is hard. We recommend some of the best charities in the world.",
      last: true,
    },
  ],
  cta = { label: "Get Started", href: "/causes" },
  formAction = "#",
}) {
  return (
    <section className="volunteer-form" data-component="VolunteerForm">
      <div className="container w-container">
        <div className="w-layout-grid volunteer-grid">
          {/* LEFT: copy + steps */}
          <div className="voluteer-content-wrap">
            <div className="section-title-wrap">
              <p className="sub-title pink">{subtitle}</p>
              <h2 className="section-title">{title}</h2>
              {paras.map((t, i) => (
                <p key={i} className="section-content">
                  {t}
                </p>
              ))}
            </div>

            <div className="volunteer-valid-points-wrap">
              {steps.map((s, i) => (
                <div key={i} className="volunteer-points-flex">
                  <div className="valid-points-count-flex">
                    <h3 className="valid-points-count">{s.no}</h3>
                  </div>
                  <div
                    className={`valid-points-content-wrap${
                      s.last ? " last-point" : ""
                    }`}
                  >
                    <div className="section-title-wrap">
                      <h4 className="points-heading">{s.h}</h4>
                      <p className="points-content">{s.p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="volunteer-button-wrap volunteer-page">
              <a href={cta.href} className="white-button large w-button">
                {cta.label}
              </a>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="volunteer-form-content">
            <div className="volunteer-form-flex">
              <div className="volunteer-form-title">
                <h4 className="volunteer-title">Complete the Form</h4>
                <p className="volunteer-sub-title">
                  Fill Form and Become Volunteer in Humanity
                </p>
              </div>

              <div className="w-form">
                <form
                  method="get"
                  action={formAction}
                  className="volunteer-page-form"
                  noValidate
                >
                  <input
                    className="volunteer-form-label w-input"
                    name="name"
                    placeholder="Enter Your Name*"
                    type="text"
                    required
                  />
                  <input
                    className="volunteer-form-label w-input"
                    name="phone"
                    placeholder="Phone Number*"
                    type="tel"
                    required
                  />
                  <input
                    className="volunteer-form-label w-input"
                    name="email"
                    placeholder="Email Address*"
                    type="email"
                    required
                  />
                  <input
                    className="volunteer-form-label w-input"
                    name="address"
                    placeholder="Address*"
                    type="text"
                    required
                  />
                  <textarea
                    className="volunteer-form-label volunteer-message-box w-input"
                    name="occupation"
                    placeholder="About Occupation*"
                    maxLength={5000}
                  />
                  <input
                    type="submit"
                    className="black-button extra-large w-button"
                    value="Submit "
                  />
                </form>

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
