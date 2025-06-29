import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Notice</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This Privacy Notice for Aeteau College describes how and why we might access, collect, store, use, and/or share your personal information when you use our services.
            </p>
          </div>

          {/* Key Points Summary */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary of Key Points</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>What personal information do we process?</strong> We may process personal information depending on how you interact with our Services, including names, email addresses, contact preferences, and application data.</p>
              <p><strong>Do we process sensitive information?</strong> We do not process sensitive personal information.</p>
              <p><strong>Do we collect information from third parties?</strong> We do not collect any information from third parties.</p>
              <p><strong>How do we keep your information safe?</strong> We have organizational and technical processes in place to protect your personal information, though no system can be 100% secure.</p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2 text-blue-600">
              <a href="#section-1" className="hover:underline">1. What Information Do We Collect?</a>
              <a href="#section-2" className="hover:underline">2. How Do We Process Your Information?</a>
              <a href="#section-3" className="hover:underline">3. What Legal Bases Do We Rely On?</a>
              <a href="#section-4" className="hover:underline">4. When Do We Share Information?</a>
              <a href="#section-5" className="hover:underline">5. International Transfers</a>
              <a href="#section-6" className="hover:underline">6. How Long Do We Keep Information?</a>
              <a href="#section-7" className="hover:underline">7. How Do We Keep Information Safe?</a>
              <a href="#section-8" className="hover:underline">8. What Are Your Privacy Rights?</a>
              <a href="#section-9" className="hover:underline">9. Do-Not-Track Features</a>
              <a href="#section-10" className="hover:underline">10. US Residents' Privacy Rights</a>
              <a href="#section-11" className="hover:underline">11. Updates to This Notice</a>
              <a href="#section-12" className="hover:underline">12. Contact Information</a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. What Information Do We Collect?</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information You Disclose to Us</h3>
              <p className="text-gray-700 mb-4">We collect personal information that you voluntarily provide to us when you express interest in our services or contact us. This may include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Contact preferences</li>
                <li>Application data</li>
              </ul>
              <p className="text-gray-700 mt-4"><strong>Note:</strong> We do not process sensitive information such as racial origins, sexual orientation, or religious beliefs.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information Automatically Collected</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our services, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>IP address and device characteristics</li>
                <li>Browser type and settings</li>
                <li>Operating system and language preferences</li>
                <li>Usage data and activity logs</li>
                <li>Date/time stamps and pages viewed</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How Do We Process Your Information?</h2>
            <p className="text-gray-700 mb-4">We process your personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To provide, improve, and administer our Services</li>
              <li>To communicate with you</li>
              <li>For security and fraud prevention</li>
              <li>To comply with legal obligations</li>
              <li>To send marketing and promotional communications (with your consent)</li>
              <li>To protect our Services and users</li>
              <li>To save or protect vital interests when necessary</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. What Legal Bases Do We Rely On?</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For EU/UK Residents</h3>
              <p className="text-gray-700 mb-4">Under GDPR and UK GDPR, we rely on the following legal bases:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Consent:</strong> When you give us permission for specific purposes</li>
                <li><strong>Legitimate Interests:</strong> For business operations that don't override your rights</li>
                <li><strong>Legal Obligations:</strong> To comply with laws and regulations</li>
                <li><strong>Vital Interests:</strong> To protect safety when necessary</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Canadian Residents</h3>
              <p className="text-gray-700">We process information based on express or implied consent, with exceptions for legitimate purposes such as fraud prevention, legal compliance, and safety protection.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. When and With Whom Do We Share Information?</h2>
            <p className="text-gray-700 mb-4">We may share your personal information in the following limited situations:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our services</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. International Information Transfers</h2>
            <p className="text-gray-700 mb-4">Our servers are located in the United States. If you're accessing our services from outside the US, your information may be transferred, stored, and processed in the United States.</p>
            <p className="text-gray-700">For EU/UK residents, we use Standard Contractual Clauses and other appropriate safeguards to protect your information during international transfers.</p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. How Long Do We Keep Your Information?</h2>
            <p className="text-gray-700 mb-4">We retain your personal information only as long as necessary for the purposes outlined in this notice, with a maximum retention period of 1 year unless required by law.</p>
            <p className="text-gray-700">When no longer needed, we will delete or anonymize your information, or securely store it until deletion is possible.</p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. How Do We Keep Your Information Safe?</h2>
            <p className="text-gray-700 mb-4">We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission or storage system can be guaranteed to be 100% secure.</p>
            <p className="text-gray-700">While we strive to protect your information, you access our services at your own risk and should only do so in secure environments.</p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. What Are Your Privacy Rights?</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of your information</li>
              <li>Restrict processing of your information</li>
              <li>Data portability (where applicable)</li>
              <li>Object to automated decision-making</li>
              <li>Withdraw consent at any time</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="text-gray-700 mt-4">To exercise your rights, contact us at <a href="mailto:info@aeteau.college" className="text-blue-600 hover:underline">info@aeteau.college</a>.</p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Do-Not-Track Features</h2>
            <p className="text-gray-700">Most browsers include Do-Not-Track (DNT) features. Since no uniform technology standard exists for DNT signals, we do not currently respond to DNT browser signals or similar mechanisms.</p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. US Residents' Specific Privacy Rights</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories of Information We Collect</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">A. Identifiers</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Name, email, IP address, account name</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">B. Personal Information</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Contact info, education, employment</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">J. Education Information</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Student records, directory information</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">All Other Categories</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Protected characteristics, biometric, commercial, etc.</td>
                      <td className="px-6 py-4 text-sm text-red-600 font-semibold">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Rights</h3>
              <p className="text-gray-700 mb-4">US residents may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Right to know what personal data is being processed</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies</li>
                <li>Right to request deletion</li>
                <li>Right to obtain a copy of your data</li>
                <li>Right to non-discrimination</li>
                <li>Right to opt out of targeted advertising or profiling</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Updates to This Notice</h2>
            <p className="text-gray-700">We may update this Privacy Notice from time to time. The updated version will be indicated by a revised date. We may notify you of material changes by posting a notice or sending a direct notification.</p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. How Can You Contact Us?</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">If you have questions or comments about this notice, you can contact us:</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:info@aeteau.college" className="text-blue-600 hover:underline">info@aeteau.college</a></p>
                <p><strong>Alternative Email:</strong> <a href="mailto:info@aeteau.edu" className="text-blue-600 hover:underline">info@aeteau.edu</a></p>
                <p><strong>Website:</strong> <a href="http://www.aeteau.edu/contact" className="text-blue-600 hover:underline">www.aeteau.edu/contact</a></p>
              </div>
            </div>
          </section>

          {/* Data Rights Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Review, Update, or Delete Your Data</h2>
            <p className="text-gray-700 mb-4">You have the right to request access to, correct, or delete your personal information. You may also withdraw consent to our processing of your information.</p>
            <p className="text-gray-700">To make such requests, please visit: <a href="mailto:info@aeteau.edu" className="text-blue-600 hover:underline">info@aeteau.edu</a></p>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600">© 2024 Aeteau College. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: 6/29/2025. Please check with the college for the most current version</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;