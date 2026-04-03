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

export function TermsPage() {
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
          Terms &amp; Conditions
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p style={lastUpdatedStyle} className="mb-10">
          Last updated: 1 April 2025
        </p>

        <p style={bodyStyle}>
          These Terms and Conditions ("Terms") govern every reservation made with Amare5 Exclusive
          Villas, operating from Limenaria, Thassos, Greece ("Amare5", "we", "us", or "our"). By
          submitting a reservation request or confirming a booking, the lead guest ("you", "the
          guest") agrees to be bound by these Terms on behalf of all members of their party.
          Please read them carefully before proceeding.
        </p>

        <div className={dividerClass} />

        {/* Reservations & Booking */}
        <section>
          <h2 style={sectionHeadingStyle}>Reservations &amp; Booking</h2>
          <p style={bodyStyle}>
            All reservations are subject to availability and are only confirmed upon receipt of the
            required deposit and issuance of a written booking confirmation by Amare5. An enquiry
            or preliminary availability check does not constitute a binding reservation.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            The lead guest making the reservation must be at least 25 years of age and agrees to
            be responsible for the conduct of all guests occupying the villa during the booked
            period. The maximum occupancy for each villa is as stated on the relevant villa page of
            our website. Exceeding the stated occupancy is not permitted and may result in immediate
            termination of the rental without refund.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            The reservation is personal to the named party. Sub-letting or assigning the booking to
            any third party is strictly prohibited.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            We reserve the right to decline or cancel any reservation at our discretion, in which
            case all payments received will be refunded in full within 14 business days.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Payment */}
        <section>
          <h2 style={sectionHeadingStyle}>Payment</h2>
          <p style={bodyStyle}>
            The following payment schedule applies to all bookings unless otherwise agreed in
            writing:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Deposit (30%):</strong> due within 72 hours of receiving your booking
              confirmation to secure the reservation. Failure to pay within this window may result
              in the dates being released.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Balance (70%):</strong> due no later than 60 days before the arrival date.
              For reservations made within 60 days of arrival, 100% of the rental fee is payable
              at the time of booking.
            </li>
            <li>
              <strong>Security deposit:</strong> a refundable security deposit of €1,500 per villa
              per stay is required and must be paid no later than 14 days before arrival. This will
              be returned within 7 business days of your departure, less any deductions for damage
              or extraordinary cleaning costs.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            All prices are quoted in Euros (EUR) and are inclusive of VAT at the applicable Greek
            rate unless stated otherwise. Payment is accepted by bank transfer or credit/debit card
            via our secure payment portal. Card payments may incur a processing fee of up to 2%.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            All rates include: villa accommodation, daily housekeeping, fresh linen and towels,
            complimentary welcome provisions, heated pool maintenance, private parking, and
            high-speed Wi-Fi. Rates do not include: transfers, catering, concierge services,
            excursions, or city tax (where applicable).
          </p>
        </section>

        <div className={dividerClass} />

        {/* Cancellation Policy */}
        <section>
          <h2 style={sectionHeadingStyle}>Cancellation Policy</h2>
          <p style={bodyStyle}>
            Cancellations must be submitted in writing via email to{" "}
            <a
              href="mailto:info@amare5.gr"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              info@amare5.gr
            </a>
            . The following cancellation charges apply, calculated from the date written notice is
            received:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>More than 90 days before arrival:</strong> loss of deposit (30% of total
              rental fee).
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>60–90 days before arrival:</strong> 50% of the total rental fee is
              non-refundable.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>30–59 days before arrival:</strong> 75% of the total rental fee is
              non-refundable.
            </li>
            <li>
              <strong>Less than 30 days before arrival or no-show:</strong> 100% of the total
              rental fee is non-refundable.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            We strongly recommend that all guests obtain comprehensive travel insurance covering
            cancellation for medical reasons, travel disruption, and personal liability. Amare5
            accepts no liability for costs arising from a guest's failure to secure adequate
            insurance cover.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            In the unlikely event that Amare5 must cancel a confirmed booking due to circumstances
            beyond our control (force majeure, including but not limited to natural disaster,
            government restriction, or structural damage to the property), we will endeavour to
            offer an alternative villa or date at no additional cost, or will refund all payments
            received in full within 14 business days.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Check-in / Check-out */}
        <section>
          <h2 style={sectionHeadingStyle}>Check-In &amp; Check-Out</h2>
          <p style={bodyStyle}>
            Standard check-in is from <strong>15:00</strong> on the arrival date. Standard
            check-out is by <strong>11:00</strong> on the departure date.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            Early check-in and late check-out may be available subject to the reservation schedule
            and must be arranged in advance. Additional charges may apply. The villa will not be
            accessible before the agreed check-in time. Guests who have not vacated the property by
            the agreed check-out time may be charged an additional night's accommodation at the
            prevailing daily rate.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            Upon arrival, you will be greeted by a member of our team who will present a villa
            inventory and condition report. Any discrepancies must be noted and reported within 2
            hours of check-in. Damage reported after this window may be attributed to the departing
            party and deducted from the security deposit.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            In accordance with Greek law, all adult guests (18+) must present a valid passport or
            national identity card at check-in. Guest details will be registered with the relevant
            Greek authorities.
          </p>
        </section>

        <div className={dividerClass} />

        {/* House Rules */}
        <section>
          <h2 style={sectionHeadingStyle}>House Rules</h2>
          <p style={bodyStyle}>
            To preserve the tranquillity of Amare5 and consideration for the local community, the
            following rules apply to all guests:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Quiet hours:</strong> from 23:00 to 09:00. Loud music, amplified sound, and
              disruptive behaviour that may disturb neighbours or other guests is not permitted at
              any time.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>No events or parties:</strong> the villas are reserved for private residential
              use only. Hosting events, parties, or gatherings beyond the stated maximum occupancy
              is strictly prohibited without prior written approval.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Smoking:</strong> smoking and vaping are not permitted inside the villas.
              Designated outdoor areas are available; guests must dispose of cigarette materials
              responsibly.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Pets:</strong> pets may be accommodated by prior written arrangement only and
              are subject to a supplementary cleaning fee. Certain villas may not be suitable for
              pets; please enquire before booking.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Pool safety:</strong> children must be supervised by an adult at all times in
              and around the pool. No glass is permitted in or immediately adjacent to the pool
              area.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Respect for property:</strong> guests are expected to treat the villa, its
              furnishings, artworks, and equipment with care. Wilful or negligent damage will be
              charged in full to the guest.
            </li>
            <li>
              <strong>Waste and recycling:</strong> guests are asked to observe the local recycling
              guidelines provided in the villa information folder.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            Serious or repeated breach of these rules may result in immediate termination of the
            rental, with no refund of any remaining rental fee.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Liability */}
        <section>
          <h2 style={sectionHeadingStyle}>Liability</h2>
          <p style={bodyStyle}>
            Amare5 takes every reasonable step to ensure that the villa is presented in excellent
            condition and that all appliances, facilities, and equipment are in safe working order
            at the time of your arrival. However, we cannot accept responsibility for:
          </p>
          <ul
            style={{ ...bodyStyle, marginTop: "1rem", paddingLeft: "1.5rem", listStyleType: "disc" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              Loss, theft, or damage to guests' personal belongings during their stay.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              Personal injury sustained on the property where this results from a guest's failure
              to exercise reasonable care or to follow safety guidance provided.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              Disruption caused by third parties, including construction activities, local
              festivals, utility interruptions, or adverse weather conditions beyond our control.
            </li>
            <li>
              Any consequential loss arising from the temporary unavailability of facilities such
              as Wi-Fi, pool heating, or electrical systems, where Amare5 takes prompt remedial
              action.
            </li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            To the maximum extent permitted by applicable law, Amare5's total liability to any
            guest arising from or in connection with a booking shall not exceed the total rental
            fee paid for the stay in question.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            Guests accept responsibility for any damage caused to the villa or its contents by
            themselves or members of their party, including children and visitors. The cost of
            repair or replacement will be assessed by Amare5 and charged against the security
            deposit, with any excess invoiced to the lead guest.
          </p>
        </section>

        <div className={dividerClass} />

        {/* Governing Law */}
        <section>
          <h2 style={sectionHeadingStyle}>Governing Law &amp; Disputes</h2>
          <p style={bodyStyle}>
            These Terms and Conditions are governed by and construed in accordance with the laws of
            the Hellenic Republic (Greece). Any dispute arising out of or in connection with a
            reservation or stay at an Amare5 villa shall be subject to the exclusive jurisdiction
            of the courts of Kavala, Greece, unless mandatory consumer protection law in your
            country of habitual residence provides otherwise.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            In the event of a dispute, we encourage you to contact us in the first instance so that
            we may seek a resolution in good faith. EU residents also have the right to use the
            European Commission's Online Dispute Resolution platform at{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            Amare5 reserves the right to amend these Terms at any time. The version published on
            our website at the time of booking confirmation shall apply to that reservation. We
            recommend reviewing the current Terms before making a new reservation.
          </p>
          <p style={{ ...bodyStyle, marginTop: "1.25rem" }}>
            For any questions regarding these Terms, please contact us at{" "}
            <a
              href="mailto:info@amare5.gr"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              info@amare5.gr
            </a>{" "}
            or by post to: Amare5 Exclusive Villas, Limenaria, Thassos, 64002, Greece.
          </p>
        </section>
      </div>
    </div>
  );
}
