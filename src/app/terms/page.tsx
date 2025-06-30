import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These Legal Terms constitute a legally binding agreement between you and Aeteau College concerning your access to and use of our Services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: June 27, 2025</p>
          </div>

          {/* Key Points Summary */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Our Legal Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p>We are Aeteau College ("Company," "we," "us," "our"). We operate the website <a href="https://www.aeteau.college" className="text-blue-600 hover:underline">https://www.aeteau.college</a> and related services.</p>
              <p><strong>Important:</strong> By accessing our Services, you agree to be bound by these Legal Terms. If you do not agree, you must discontinue use immediately.</p>
              <p><strong>Age Requirement:</strong> Services are intended for users at least 13 years of age. Minors must have parental permission and supervision.</p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2 text-blue-600">
              <a href="#section-1" className="hover:underline">1. Our Services</a>
              <a href="#section-2" className="hover:underline">2. Intellectual Property Rights</a>
              <a href="#section-3" className="hover:underline">3. User Representations</a>
              <a href="#section-4" className="hover:underline">4. Prohibited Activities</a>
              <a href="#section-5" className="hover:underline">5. User Generated Contributions</a>
              <a href="#section-6" className="hover:underline">6. Contribution License</a>
              <a href="#section-7" className="hover:underline">7. Third-Party Websites and Content</a>
              <a href="#section-8" className="hover:underline">8. Advertisers</a>
              <a href="#section-9" className="hover:underline">9. Services Management</a>
              <a href="#section-10" className="hover:underline">10. Privacy Policy</a>
              <a href="#section-11" className="hover:underline">11. Term and Termination</a>
              <a href="#section-12" className="hover:underline">12. Modifications and Interruptions</a>
              <a href="#section-13" className="hover:underline">13. Governing Law</a>
              <a href="#section-14" className="hover:underline">14. Dispute Resolution</a>
              <a href="#section-15" className="hover:underline">15. Corrections</a>
              <a href="#section-16" className="hover:underline">16. Disclaimer</a>
              <a href="#section-17" className="hover:underline">17. Limitations of Liability</a>
              <a href="#section-18" className="hover:underline">18. Indemnification</a>
              <a href="#section-19" className="hover:underline">19. User Data</a>
              <a href="#section-20" className="hover:underline">20. Electronic Communications</a>
              <a href="#section-21" className="hover:underline">21. California Users and Residents</a>
              <a href="#section-22" className="hover:underline">22. Miscellaneous</a>
              <a href="#section-23" className="hover:underline">23. Contact Us</a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Our Services</h2>
            <p className="text-gray-700 mb-4">The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.</p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700"><strong>Compliance Notice:</strong> The Services are not tailored to comply with industry-specific regulations (HIPAA, FISMA, etc.). If your interactions would be subject to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Intellectual Property Rights</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Intellectual Property</h3>
              <p className="text-gray-700 mb-4">We are the owner or licensee of all intellectual property rights in our Services, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Source code, databases, and functionality</li>
                <li>Website designs, software, audio, and video</li>
                <li>Text, photographs, and graphics</li>
                <li>Trademarks, service marks, and logos</li>
              </ul>
              <p className="text-gray-700 mt-4">Our Content and Marks are protected by copyright and trademark laws in the United States and around the world.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Use of Our Services</h3>
              <p className="text-gray-700 mb-4">Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access the Services</li>
                <li>Download or print any portion of the Content to which you have properly gained access</li>
              </ul>
              <p className="text-gray-700 mt-4"><strong>Solely for your personal, non-commercial use or internal business purpose.</strong></p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Submissions</h3>
              <p className="text-gray-700 mb-4">By sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission.</p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-gray-700"><strong>Important:</strong> Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Representations</h2>
            <p className="text-gray-700 mb-4">By using the Services, you represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You have the legal capacity and agree to comply with these Legal Terms</li>
              <li>You are not under the age of 13</li>
              <li>You are not a minor in your jurisdiction, or if a minor, you have received parental permission</li>
              <li>You will not access the Services through automated or non-human means</li>
              <li>You will not use the Services for any illegal or unauthorized purpose</li>
              <li>Your use of the Services will not violate any applicable law or regulation</li>
            </ul>
            <p className="text-gray-700 mt-4">If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any current or future use of the Services.</p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Data and Security</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Systematically retrieve data to create compilations</li>
                  <li>Circumvent security-related features</li>
                  <li>Upload viruses or malicious material</li>
                  <li>Engage in automated use of the system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Misuse and Abuse</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Trick, defraud, or mislead users</li>
                  <li>Disparage or harm our Services</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Make improper use of support services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Legal and Ethical</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Use Services inconsistent with laws</li>
                  <li>Engage in unauthorized framing or linking</li>
                  <li>Attempt to impersonate other users</li>
                  <li>Use the platform for anything evil</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Commercial Restrictions</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Use for revenue-generating endeavors</li>
                  <li>Advertise or sell goods and services</li>
                  <li>Use buying or purchasing agents</li>
                  <li>Sell or transfer your profile</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. User Generated Contributions</h2>
            <p className="text-gray-700 mb-4">When you create or make available any Contributions, you represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your Contributions do not infringe proprietary rights of any third party</li>
              <li>You are the creator and owner or have necessary licenses and permissions</li>
              <li>You have written consent for any identifiable individuals in your Contributions</li>
              <li>Your Contributions are not false, inaccurate, or misleading</li>
              <li>Your Contributions are not spam, promotional materials, or unsolicited advertising</li>
              <li>Your Contributions are not obscene, violent, harassing, or otherwise objectionable</li>
              <li>Your Contributions do not violate any applicable law or regulation</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Privacy Policy</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">We care about data privacy and security. Please review our Privacy Policy: <a href="http://www.aeteau.college/privacy" className="text-blue-600 hover:underline">www.aeteau.college/privacy</a></p>
              <p className="text-gray-700">By using the Services, you agree to be bound by our Privacy Policy. The Services are hosted in the United States, and by using them, you consent to have your data transferred to and processed in the United States.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Term and Termination</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
              <p className="text-gray-700 mb-4"><strong>We reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Services to any person for any reason or for no reason.</strong></p>
              <p className="text-gray-700">We may terminate your use or participation in the Services or delete any content or information that you posted at any time, without warning.</p>
            </div>
            <p className="text-gray-700">If we terminate or suspend your account, you are prohibited from registering and creating a new account under your name, a fake name, or the name of any third party.</p>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Dispute Resolution</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informal Negotiations</h3>
              <p className="text-gray-700">To expedite resolution and control costs, the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Binding Arbitration</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 mb-2"><strong>Important:</strong> If informal negotiations fail, disputes will be resolved by binding arbitration under the Commercial Arbitration Rules of the American Arbitration Association (AAA).</p>
                <p className="text-gray-700"><strong>You understand that without this provision, you would have the right to sue in court and have a jury trial.</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Jurisdiction</h3>
              <p className="text-gray-700">These Legal Terms are governed by the laws of the State of Florida. Any disputes will be resolved in Palm Beach County, Florida.</p>
            </div>
          </section>

          {/* Section 16 */}
          <section id="section-16" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">16. Disclaimer</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 mb-4"><strong>THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS.</strong></p>
              <p className="text-gray-700 mb-4">To the fullest extent permitted by law, we disclaim all warranties, express or implied, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties regarding accuracy or completeness of content</li>
                <li>Warranties regarding uninterrupted or error-free operation</li>
                <li>Warranties regarding security of servers or personal information</li>
              </ul>
            </div>
          </section>

          {/* Section 17 */}
          <section id="section-17" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">17. Limitations of Liability</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4"><strong>IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES.</strong></p>
              <p className="text-gray-700">Our liability to you for any cause whatsoever will at all times be limited to the lesser of the amount paid by you to us or $100.00 USD.</p>
            </div>
          </section>

          {/* Section 21 */}
          <section id="section-21" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">21. California Users and Residents</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs:</p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p><strong>Address:</strong> 1625 North Market Blvd., Suite N 112, Sacramento, California 95834</p>
                <p><strong>Phone:</strong> (800) 952-5210 or (916) 445-1254</p>
              </div>
            </div>
          </section>

          {/* Section 23 */}
          <section id="section-23" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">23. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">To resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Aeteau College</strong></p>
                <p><strong>Email:</strong> <a href="mailto:info@aeteau.college" className="text-blue-600 hover:underline">info@aeteau.college</a></p>
                <p><strong>Phone:</strong> N/A</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-gray-700">
                <p><strong>College Address:</strong> Monticello, New York</p>
                <p><strong>Alternative Email:</strong> <a href="mailto:info@aeteau.college" className="text-blue-600 hover:underline">info@aeteau.college</a></p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Hours:</strong> Monday–Friday, 9:00am–5:00pm</p>
                <p><strong>Motto:</strong> "nos nescio quomodo latine loqui"</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600">© 2025 Aeteau College. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: June 27, 2025. Please check with the college for the most current version</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;