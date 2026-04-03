import { useLanguage } from "../context/LanguageContext";

const overlineStyle: React.CSSProperties = {
  fontFamily: "'Catamaran', sans-serif",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "#9A8B7A",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "'Noto Serif Display', serif",
  fontSize: "22px",
  fontWeight: 400,
  color: "#3a3028",
  borderLeft: "1px solid #9A8B7A",
  paddingLeft: "1rem",
  marginBottom: "1rem",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Nanum Myeongjo', serif",
  fontSize: "15px",
  color: "#3a3028",
  lineHeight: 2,
  opacity: 0.8,
};

const lastUpdatedStyle: React.CSSProperties = {
  fontFamily: "'Catamaran', sans-serif",
  fontSize: "10px",
  color: "#9A8B7A",
};

const subHeadingStyle: React.CSSProperties = {
  fontFamily: "'Catamaran', sans-serif",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#9A8B7A",
  marginBottom: "0.5rem",
};

const dividerClass = "border-t border-[#3a3028]/8 my-10";

export function CookiePolicyPage() {
  useLanguage();

  return (
    <div style={{ backgroundColor: "#F5F0EB", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="pt-40 pb-16 px-6 text-center"
        style={{ backgroundColor: "#F5F0EB" }}
      >
        <p style={overlineStyle} className="mb-5">
          Legal
        </p>
        <h1
          style={{
            fontFamily: "'Noto Serif Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 400,
            color: "#3a3028",
            lineHeight: 1.15,
          }}
        >
          Cookie Policy
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p style={lastUpdatedStyle} className="mb-10">
          Last updated: 1 April 2025
        </p>

        {/* What Are Cookies */}
        <section>
          <h2 style={sectionHeadingStyle}>What Are Cookies</h2>
          <p style={bodyStyle}>
            Cookies are small text files that a website stores on your device when you visit. They
            are widely used to make websites work, to work more efficiently, and to provide
            information to the owners of the site. Cookies help us recognise your device on your
            next visit, remember your preferences, and understand how you interact with our content.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            Similar technologies — such as pixel tags, web beacons, and local storage — may also be
            used alongside cookies to achieve equivalent results. Any reference to "cookies" in this
            policy includes these related technologies unless stated otherwise.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            This Cookie Policy should be read alongside our{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              Privacy Policy
            </a>
            , which explains more broadly how we handle your personal data.
          </p>
        </section>

        <div className={dividerClass} />

        {/* How We Use Cookies */}
        <section>
          <h2 style={sectionHeadingStyle}>How We Use Cookies</h2>
          <p style={bodyStyle}>
            We use cookies on{" "}
            <a
              href="https://www.amare5.gr"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              www.amare5.gr
            </a>{" "}
            for a number of purposes:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              To ensure the website loads correctly and core functionality operates as intended.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              To remember choices you make, such as language preferences or your cookie consent
              decision, so you are not prompted repeatedly.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              To understand how visitors navigate our site — which pages are most visited, how long
              sessions last, and where visitors come from — so we can continually improve the user
              experience.
            </li>
            <li>
              To deliver relevant promotional content and measure the effectiveness of marketing
              campaigns, where you have given your consent.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            We will only place non-essential cookies on your device after you have provided your
            consent via our cookie consent banner. You may update your preferences at any time.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Types of Cookies */}
        <section>
          <h2 style={sectionHeadingStyle}>Types of Cookies We Use</h2>

          {/* Essential */}
          <div className="mb-8">
            <p style={subHeadingStyle}>Essential Cookies</p>
            <p style={bodyStyle}>
              These cookies are strictly necessary for the website to function and cannot be
              disabled. They do not collect personally identifiable information and are never used
              for marketing purposes. Examples include:
            </p>
            <ul
              style={{
                ...bodyStyle,
                marginTop: "0.75rem",
                paddingLeft: "1.5rem",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Session cookies</strong> — maintain your session state while you navigate
                the site (deleted when you close your browser).
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Cookie consent cookie</strong> — stores your consent choice so the banner
                is not shown repeatedly (expires after 12 months).
              </li>
              <li>
                <strong>Security cookies</strong> — help detect malicious activity and protect the
                integrity of contact forms and booking enquiries.
              </li>
            </ul>
          </div>

          {/* Analytics */}
          <div className="mb-8">
            <p style={subHeadingStyle}>Analytics Cookies</p>
            <p style={bodyStyle}>
              Analytics cookies help us understand how visitors interact with our website by
              collecting aggregated, anonymised information. The data helps us improve layout,
              content, and performance. We currently use:
            </p>
            <ul
              style={{
                ...bodyStyle,
                marginTop: "0.75rem",
                paddingLeft: "1.5rem",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Google Analytics 4 (_ga, _ga_*, _gid)</strong> — tracks page views,
                session duration, traffic sources, and device types. IP addresses are anonymised.
                Data is retained for 26 months.
              </li>
              <li>
                <strong>Internal performance monitoring</strong> — lightweight, first-party data
                used to measure page load times and error rates.
              </li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
              Analytics cookies are only placed with your consent.
            </p>
          </div>

          {/* Marketing */}
          <div>
            <p style={subHeadingStyle}>Marketing Cookies</p>
            <p style={bodyStyle}>
              Marketing cookies track your browsing activity across websites and help us deliver
              advertising and content relevant to your interests. They also allow us to measure the
              effectiveness of advertising campaigns. We may use:
            </p>
            <ul
              style={{
                ...bodyStyle,
                marginTop: "0.75rem",
                paddingLeft: "1.5rem",
                listStyleType: "disc",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Meta Pixel</strong> — used to track conversions from Facebook and Instagram
                advertisements and to build lookalike audiences.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Google Ads conversion tracking</strong> — allows us to measure which
                searches led to villa enquiries or bookings.
              </li>
              <li>
                <strong>Retargeting cookies</strong> — enable our ads to be shown to you on other
                platforms following a visit to our website.
              </li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
              Marketing cookies are only placed with your explicit consent. You can withdraw consent
              at any time by updating your cookie preferences.
            </p>
          </div>
        </section>

        <div className={dividerClass} />

        {/* Managing Cookies */}
        <section>
          <h2 style={sectionHeadingStyle}>Managing Cookies</h2>
          <p style={bodyStyle}>
            You have full control over non-essential cookies. You can manage your preferences in the
            following ways:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Cookie preference panel:</strong> click "Cookie Preferences" in the footer of
              this website at any time to review and update your consent choices.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Browser settings:</strong> most browsers allow you to refuse cookies, delete
              existing cookies, or be notified when cookies are set. Consult your browser's help
              documentation for guidance. Please note that disabling all cookies may affect website
              functionality.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Google Analytics opt-out:</strong> install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Industry opt-outs:</strong> visit{" "}
              <a
                href="https://www.youronlinechoices.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                www.youronlinechoices.eu
              </a>{" "}
              (EU) for personalised advertising opt-outs from participating companies.
            </li>
          </ul>
        </section>

        <div className={dividerClass} />

        {/* Updates */}
        <section>
          <h2 style={sectionHeadingStyle}>Updates to This Policy</h2>
          <p style={bodyStyle}>
            We may update this Cookie Policy from time to time to reflect changes in the cookies we
            use or applicable regulatory requirements. When we make material changes, we will update
            the "Last updated" date at the top of this page and, where appropriate, notify you via
            the cookie consent banner on your next visit.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a
              href="mailto:privacy@amare5.gr"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              privacy@amare5.gr
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
