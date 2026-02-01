export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface/30 to-bg">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 font-serif">
              Professional Accountability &amp; Client Rights
            </h1>

            <div className="space-y-8 text-fg/80 leading-relaxed">
              <p>
                This page provides important information regarding your rights
                as a client, professional accountability standards, access to
                health care records, and how to contact regulatory and consumer
                protection agencies. All therapists and counselors at Erin
                Williams Counseling, LLC are licensed, supervised, and regulated
                by the Texas Behavioral Health Executive Council (BHEC).
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-fg mb-3">
                  Requesting Your Health Care Records
                </h2>
                <p>
                  Clients have the right to access and request copies of their
                  health care records in accordance with Texas law and HIPAA
                  regulations. To request records, please submit a written
                  request to Erin Williams Counseling, LLC. Requests may include
                  a completed records request form or a written request clearly
                  specifying the records being requested. All requests are
                  processed within the timeframes permitted by law. Requests for
                  access to records are reviewed and fulfilled in compliance
                  with applicable state and federal regulations. In certain
                  circumstances, access may be limited or modified if disclosure
                  is determined to be clinically harmful, as allowed by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-fg mb-3">
                  Texas Behavioral Health Executive Council (BHEC)
                </h2>
                <p className="mb-4">
                  The Texas Behavioral Health Executive Council (BHEC) is
                  responsible for licensing, regulating, investigating, and
                  prosecuting professional misconduct involving licensed mental
                  health professionals in the state of Texas.
                </p>
                <address className="not-italic space-y-1">
                  <div>Texas Behavioral Health Executive Council</div>
                  <div>George H.W. Bush State Office Building</div>
                  <div>1801 Congress Ave., Suite 7.300</div>
                  <div>Austin, TX 78701</div>
                  <div>Main Line: (512) 305-7700</div>
                  <div>Complaints (Toll-Free): (800) 821-3205</div>
                  <div>
                    Website:{" "}
                    <a
                      href="https://www.bhec.texas.gov"
                      className="text-accent underline hover:text-accent/80"
                    >
                      https://www.bhec.texas.gov
                    </a>
                  </div>
                  <div>
                    Contact Page:{" "}
                    <a
                      href="https://www.bhec.texas.gov/contact-us/"
                      className="text-accent underline hover:text-accent/80"
                    >
                      https://www.bhec.texas.gov/contact-us/
                    </a>
                  </div>
                </address>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-fg mb-3">
                  Office of the Texas Attorney General – Consumer Protection
                </h2>
                <p>
                  Clients also have the right to file a consumer complaint with
                  the Texas Office of the Attorney General – Consumer Protection
                  Division if they believe their consumer rights have been
                  violated. To file a complaint, please visit:{" "}
                  <a
                    href="https://www.texasattorneygeneral.gov/consumer-protection"
                    className="text-accent underline hover:text-accent/80"
                  >
                    https://www.texasattorneygeneral.gov/consumer-protection
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

