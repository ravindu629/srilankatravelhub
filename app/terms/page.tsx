import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Sri Lanka Travel Hub - Rules and guidelines for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16 mb-12">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl">
            Last updated: December 27, 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 prose prose-lg max-w-none">
          
          <h2>Agreement to Terms</h2>
          <p>
            Welcome to Sri Lanka Travel Hub ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website located at srilankatravelhub.com (the "Website").
          </p>
          <p>
            By accessing or using our Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our Website.
          </p>

          <h2>Use of Our Website</h2>
          
          <h3>Permitted Use</h3>
          <p>You may use our Website for lawful purposes only. You agree to use our Website in accordance with these Terms and all applicable laws and regulations.</p>

          <h3>Prohibited Activities</h3>
          <p>You agree NOT to:</p>
          <ul>
            <li>Use the Website in any way that violates any applicable national or international law or regulation</li>
            <li>Transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
            <li>Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
            <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
            <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose</li>
            <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
            <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website</li>
            <li>Use the Website in any manner that could disable, overburden, damage, or impair the Website</li>
          </ul>

          <h2>Intellectual Property Rights</h2>
          
          <h3>Our Content</h3>
          <p>
            The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Sri Lanka Travel Hub, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h3>Your Use of Our Content</h3>
          <p>You may:</p>
          <ul>
            <li>View and access content on the Website for your personal, non-commercial use</li>
            <li>Share links to our blog posts and pages on social media</li>
            <li>Quote short excerpts from our articles with proper attribution</li>
          </ul>

          <p>You may NOT:</p>
          <ul>
            <li>Reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as permitted above</li>
            <li>Copy or reproduce our articles, photos, or content without written permission</li>
            <li>Use our content for commercial purposes without authorization</li>
            <li>Remove any copyright or proprietary notices from content</li>
          </ul>

          <h2>User-Generated Content</h2>
          
          <h3>Content You Submit</h3>
          <p>
            When you submit content through our contact forms, comments, or other features (collectively, "User Content"), you grant us a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, adapt, publish, translate, create derivative works from, and display such content.
          </p>

          <h3>Responsibility for User Content</h3>
          <p>You are solely responsible for your User Content. You represent and warrant that:</p>
          <ul>
            <li>You own or have the necessary rights to submit the User Content</li>
            <li>Your User Content does not violate the privacy rights, publicity rights, copyrights, or other rights of any person</li>
            <li>Your User Content does not contain offensive, defamatory, or illegal material</li>
          </ul>

          <h2>Third-Party Links and Content</h2>
          <p>
            Our Website may contain links to third-party websites or services that are not owned or controlled by Sri Lanka Travel Hub. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
          <p>
            You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party content or services.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            <strong>THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.</strong> We make no warranties, expressed or implied, regarding the Website, including:
          </p>
          <ul>
            <li>The accuracy, completeness, or reliability of content</li>
            <li>That the Website will be uninterrupted, timely, secure, or error-free</li>
            <li>That defects will be corrected</li>
            <li>That the Website is free of viruses or other harmful components</li>
          </ul>

          <h2>Travel Information Disclaimer</h2>
          <p>
            <strong>Important:</strong> All travel information, recommendations, and advice on this Website are for general informational purposes only. We make no guarantees about:
          </p>
          <ul>
            <li>The accuracy of travel information, prices, or availability</li>
            <li>Current travel restrictions, visa requirements, or health recommendations</li>
            <li>Safety conditions at destinations</li>
            <li>Quality of accommodations, tours, or services mentioned</li>
          </ul>
          <p>
            Always verify information with official sources, embassies, tour operators, and local authorities before making travel decisions. Travel conditions can change rapidly.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, SRI LANKA TRAVEL HUB SHALL NOT BE LIABLE FOR:
          </p>
          <ul>
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenues, data, or use</li>
            <li>Any damages arising from your use of or inability to use the Website</li>
            <li>Any damages arising from travel decisions made based on Website content</li>
          </ul>
          <p>
            In no event shall our total liability to you for all damages exceed one hundred dollars ($100).
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Sri Lanka Travel Hub and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
          </p>
          <ul>
            <li>Your use of and access to the Website</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any User Content you submit</li>
          </ul>

          <h2>Affiliate Disclosure</h2>
          <p>
            Our Website may contain affiliate links. This means we may earn a commission if you click through and make a purchase, at no additional cost to you. We only recommend products and services we believe will add value to our readers.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Your use of the Website is also governed by our Privacy Policy. Please review our <a href="/privacy">Privacy Policy</a> to understand our practices.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by:
          </p>
          <ul>
            <li>Posting the new Terms on this page</li>
            <li>Updating the "Last updated" date</li>
          </ul>
          <p>
            Your continued use of the Website after any changes constitutes your acceptance of the new Terms.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to our Website immediately, without prior notice or liability, for any reason, including:
          </p>
          <ul>
            <li>Breach of these Terms</li>
            <li>Violation of applicable laws</li>
            <li>Abusive or harmful behavior</li>
            <li>At our sole discretion</li>
          </ul>
          <p>
            Upon termination, your right to use the Website will immediately cease.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            Any dispute arising from these Terms or your use of the Website will be resolved through:
          </p>
          <ol>
            <li><strong>Informal Negotiation:</strong> Contact us first to resolve the issue informally</li>
            <li><strong>Mediation:</strong> If informal negotiation fails, we agree to attempt mediation</li>
            <li><strong>Arbitration:</strong> If mediation fails, disputes will be resolved through binding arbitration</li>
          </ol>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
          </p>

          <h2>Waiver</h2>
          <p>
            No waiver by the Company of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and Sri Lanka Travel Hub regarding your use of the Website and supersede all prior agreements and understandings.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:ravinduwjerathne@gmail.com">ravinduwjerathne@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="https://srilankatravelhub.com">srilankatravelhub.com</a></li>
            <li><strong>Contact Form:</strong> <a href="/contact">srilankatravelhub.com/contact</a></li>
          </ul>

          <h2>Acknowledgment</h2>
          <p>
            BY USING OUR WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
          </p>

          <div className="bg-accent-50 border-l-4 border-accent-600 p-6 rounded-r-lg mt-8">
            <p className="text-sm text-neutral-700 mb-0">
              <strong>Note:</strong> These terms were last updated on December 27, 2024. 
              We recommend reviewing these terms periodically for any changes.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
