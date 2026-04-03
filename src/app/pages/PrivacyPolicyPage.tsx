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

const dividerClass = "border-t border-[#3a3028]/8 my-10";

export function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p style={lastUpdatedStyle} className="mb-10">
          Last updated: 1 April 2025
        </p>

        {/* Introduction */}
        <section>
          <h2 style={sectionHeadingStyle}>Introduction</h2>
          <p style={bodyStyle}>
            Amare5 Exclusive Villas ("we", "our", or "us") operates from Limenaria, Thassos, Greece,
            and is committed to protecting the personal data of every guest, enquirer, and visitor to
            our website. This Privacy Policy explains what personal information we collect, how we use
            it, the legal grounds on which we rely, and the rights you hold under Regulation (EU)
            2016/679 (the General Data Protection Regulation — GDPR) and applicable Greek data
            protection law.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            By visiting{" "}
            <a
              href="https://www.amare5.gr"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              www.amare5.gr
            </a>{" "}
            or making an enquiry or reservation with us, you acknowledge the practices described in
            this policy. If you do not agree, please refrain from submitting personal information
            through our website.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Data We Collect */}
        <section>
          <h2 style={sectionHeadingStyle}>Data We Collect</h2>
          <p style={bodyStyle}>
            We collect information in the following categories:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Identity & Contact Data:</strong> your full name, email address, telephone
              number, nationality, and passport or ID details where required for legal registration
              (as required under Greek Law 4276/2014 for tourist accommodation operators).
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Reservation Data:</strong> arrival and departure dates, villa selected, number
              and ages of guests, special requests, and dietary or accessibility requirements you
              choose to share.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Payment Data:</strong> billing address and, where applicable, partial card
              details transmitted through our PCI-DSS-compliant payment processor. We do not store
              full card numbers on our systems.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Communications Data:</strong> the content of emails, enquiry forms, and any
              other correspondence you send to us.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Technical & Usage Data:</strong> IP address, browser type and version, time
              zone, operating system, pages visited, referral source, and session duration, collected
              automatically when you browse our website.
            </li>
            <li>
              <strong>Marketing Preferences:</strong> your choices regarding receiving promotional
              communications from us.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            We do not knowingly collect personal data from children under 16. If you believe a child
            has provided us with information without parental consent, please contact us immediately.
          </p>
        </section>

        <div className={dividerClass} />

        {/* How We Use Your Data */}
        <section>
          <h2 style={sectionHeadingStyle}>How We Use Your Data</h2>
          <p style={bodyStyle}>
            We use the personal information we collect for the following purposes:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              To process, confirm, and manage your villa reservation and any ancillary services you
              request (transfers, concierge, catering).
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              To communicate with you before, during, and after your stay regarding your booking,
              arrival instructions, and any changes to services.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              To fulfil our legal obligations, including the registration of guests with the Greek
              Tourism Authorities (MITAT) and the submission of accommodation data to the Greek
              Independent Authority for Public Revenue (AADE).
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              To process payments and prevent fraud.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              To improve our website experience through aggregated analytics (see the Cookies section
              below).
            </li>
            <li>
              To send you occasional promotional communications about our villas and offers, only
              where you have given us explicit consent or where we have a legitimate interest in doing
              so and you have not opted out.
            </li>
          </ul>
        </section>

        <div className={dividerClass} />

        {/* Legal Basis */}
        <section>
          <h2 style={sectionHeadingStyle}>Legal Basis for Processing</h2>
          <p style={bodyStyle}>
            Under the GDPR, we rely on the following legal bases:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Performance of a contract</strong> (Article 6(1)(b)): processing necessary to
              fulfil a reservation you have made or to take pre-contractual steps at your request.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Legal obligation</strong> (Article 6(1)(c)): processing required by Greek
              tourist accommodation law, tax law, and EU payment regulations.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Legitimate interests</strong> (Article 6(1)(f)): fraud prevention, IT security,
              improving our services, and direct marketing to past guests where a proportionate
              interest exists and your rights are not overridden.
            </li>
            <li>
              <strong>Consent</strong> (Article 6(1)(a)): newsletter subscriptions, non-essential
              cookies, and any other processing for which we expressly ask your agreement. You may
              withdraw consent at any time without affecting the lawfulness of prior processing.
            </li>
          </ul>
        </section>

        <div className={dividerClass} />

        {/* Data Retention */}
        <section>
          <h2 style={sectionHeadingStyle}>Data Retention</h2>
          <p style={bodyStyle}>
            We retain personal data only for as long as necessary to fulfil the purposes for which
            it was collected, including satisfying any legal, accounting, or reporting requirements:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Reservation & guest records:</strong> 5 years from the end of the tax year in
              which the stay occurred, in accordance with Greek tax legislation.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Guest registration data submitted to MITAT:</strong> retained for the period
              mandated by the relevant authority.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Marketing consent records:</strong> until you withdraw consent or 3 years of
              inactivity, whichever is sooner.
            </li>
            <li>
              <strong>Website analytics data:</strong> in anonymised or aggregated form
              indefinitely; identifiable technical data for no more than 26 months.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            When data is no longer needed, we delete it securely or anonymise it so that it can no
            longer be associated with you.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Your Rights */}
        <section>
          <h2 style={sectionHeadingStyle}>Your Rights</h2>
          <p style={bodyStyle}>
            As a data subject under the GDPR, you have the following rights, exercisable free of
            charge:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Right of access:</strong> to obtain a copy of the personal data we hold about you.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Right to rectification:</strong> to have inaccurate data corrected or incomplete
              data completed.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Right to erasure ("right to be forgotten"):</strong> to request deletion of your
              data where there is no overriding legal obligation to retain it.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Right to restriction of processing:</strong> to ask us to pause processing
              while a dispute is resolved.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Right to data portability:</strong> to receive your data in a structured,
              machine-readable format where technically feasible.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Right to object:</strong> to processing based on legitimate interests or for
              direct marketing purposes.
            </li>
            <li>
              <strong>Right to lodge a complaint:</strong> with the Hellenic Data Protection Authority
              (HDPA — Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα), Kifissias 1–3, 11523 Athens,
              Greece,{" "}
              <a
                href="https://www.dpa.gr"
                className="underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                www.dpa.gr
              </a>
              .
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:privacy@amare5.gr"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              privacy@amare5.gr
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Cookies */}
        <section>
          <h2 style={sectionHeadingStyle}>Cookies</h2>
          <p style={bodyStyle}>
            Our website uses cookies and similar tracking technologies. Essential cookies are placed
            automatically to ensure the site functions correctly. All other cookies — including
            analytics and marketing cookies — are placed only with your explicit consent, which you
            can provide or withdraw at any time via the cookie preference panel accessible in the
            site footer. For full details, please read our{" "}
            <a
              href="/cookies"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <div className={dividerClass} />

        {/* Third Parties */}
        <section>
          <h2 style={sectionHeadingStyle}>Third Parties &amp; Transfers</h2>
          <p style={bodyStyle}>
            We may share your personal data with carefully selected third parties in the following
            circumstances:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Payment processors:</strong> Stripe or equivalent PCI-DSS Level 1 certified
              providers, who process card transactions on our behalf.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Property management software:</strong> cloud-based booking and channel
              management platforms bound by GDPR-compliant data processing agreements.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Greek regulatory authorities:</strong> MITAT (tourist accommodation register)
              and AADE (tax authority), as required by law.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Email marketing platforms:</strong> only where you have consented to receive
              communications and the platform is covered by a Data Processing Agreement.
            </li>
            <li>
              <strong>Analytics providers:</strong> such as Google Analytics, operating under
              anonymisation and, where applicable, Standard Contractual Clauses for transfers to
              third countries.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            We do not sell your personal data to third parties. Any transfer of personal data
            outside the European Economic Area (EEA) is governed by appropriate safeguards, such as
            Standard Contractual Clauses approved by the European Commission.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Contact */}
        <section>
          <h2 style={sectionHeadingStyle}>Contact</h2>
          <p style={bodyStyle}>
            If you have any questions about this Privacy Policy or wish to exercise your rights,
            please contact our data controller at:
          </p>
          <div style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            <p>
              <strong>Amare5 Exclusive Villas</strong>
            </p>
            <p>Limenaria, Thassos, 64002, Greece</p>
            <p>
              Email:{" "}
              <a
                href="mailto:privacy@amare5.gr"
                className="underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                privacy@amare5.gr
              </a>
            </p>
            <p>Tel: +30 2593 000000</p>
          </div>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            We reserve the right to update this Privacy Policy periodically to reflect changes in
            our practices or applicable law. Material changes will be communicated via a notice on
            our website. We encourage you to review this page whenever you visit.
          </p>
        </section>
      </div>
    </div>
  );
}
