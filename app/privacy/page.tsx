import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Sri Lanka Travel Hub - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16 mb-12">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl">
            Last updated: December 27, 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 prose prose-lg max-w-none">
          
          <h2>Introduction</h2>
          <p>
            Welcome to Sri Lanka Travel Hub ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website srilankatravelhub.com.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Personal Information You Provide</h3>
          <p>We collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Subscribe to our newsletter</li>
            <li>Fill out our contact form</li>
            <li>Engage with our website</li>
            <li>Otherwise contact us</li>
          </ul>
          
          <p>The personal information we collect may include:</p>
          <ul>
            <li><strong>Name:</strong> Your full name</li>
            <li><strong>Email Address:</strong> Your email for communication</li>
            <li><strong>Contact Information:</strong> Subject and message content from contact forms</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Time zone setting</li>
            <li>Operating system</li>
            <li>Pages you visit on our site</li>
            <li>Time and date of your visit</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect in the following ways:</p>
          <ul>
            <li><strong>Communication:</strong> To respond to your inquiries and send you newsletters (if subscribed)</li>
            <li><strong>Improve Our Website:</strong> To understand how visitors use our site and improve user experience</li>
            <li><strong>Analytics:</strong> To analyze usage patterns and optimize content</li>
            <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website (e.g., hosting, email services, analytics)</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.</p>
          
          <h3>Types of Cookies We Use:</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
          </ul>
          
          <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>

          <h2>Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>

          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
          <ul>
            <li>Secure Socket Layer (SSL) encryption</li>
            <li>Secure database storage with MongoDB Atlas</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
          </ul>
          <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>

          <h2>Data Retention</h2>
          <p>We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.</p>

          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Objection:</strong> Object to processing of your personal information</li>
            <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
            <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for newsletter subscriptions at any time</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:ravinduwjerathne@gmail.com">ravinduwjerathne@gmail.com</a></p>

          <h2>Newsletter Subscriptions</h2>
          <p>If you subscribe to our newsletter, we will use your email address to send you updates about Sri Lankan travel, destinations, and tips. You can unsubscribe at any time by:</p>
          <ul>
            <li>Clicking the "unsubscribe" link at the bottom of any newsletter email</li>
            <li>Contacting us directly at <a href="mailto:ravinduwjerathne@gmail.com">ravinduwjerathne@gmail.com</a></li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our records.</p>

          <h2>International Data Transfers</h2>
          <p>Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our website, you consent to the transfer of your information to our facilities and service providers.</p>

          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:</p>
          <ul>
            <li>Posting the new privacy policy on this page</li>
            <li>Updating the "Last updated" date at the top of this policy</li>
            <li>Sending an email notification to subscribers (for significant changes)</li>
          </ul>
          <p>We encourage you to review this privacy policy periodically to stay informed about how we protect your information.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:ravinduwjerathne@gmail.com">ravinduwjerathne@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="https://srilankatravelhub.com">srilankatravelhub.com</a></li>
            <li><strong>Contact Form:</strong> <a href="/contact">srilankatravelhub.com/contact</a></li>
          </ul>

          <h2>Compliance</h2>
          <p>We are committed to complying with applicable data protection laws, including:</p>
          <ul>
            <li>General Data Protection Regulation (GDPR) for EU visitors</li>
            <li>California Consumer Privacy Act (CCPA) for California residents</li>
            <li>Other applicable local data protection regulations</li>
          </ul>

          <h2>Your Consent</h2>
          <p>By using our website, you consent to our privacy policy and agree to its terms. If you do not agree with this policy, please do not use our website.</p>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mt-8">
            <p className="text-sm text-neutral-700 mb-0">
              <strong>Note:</strong> This privacy policy was last updated on December 27, 2024. 
              Please check back regularly for any updates or changes to our privacy practices.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
