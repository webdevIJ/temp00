import type { Metadata } from "next";
import config from "@/lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${config.businessName}`,
  description: `Privacy policy for ${config.businessName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: March 12, 2026</p>

        <div className="prose max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us through our contact form, including your name,
            email address, phone number, and business name. We may also collect usage data automatically through
            analytics tools such as Google Analytics.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide our services</li>
            <li>Send you information about our services (only if you opt in)</li>
            <li>Improve our website and marketing</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your
            information with trusted service providers who assist us in operating our website and conducting our
            business, so long as those parties agree to keep this information confidential.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies
            through your browser settings, though this may affect some functionality of the site.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method
            of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal data we hold about you by
            contacting us at{" "}
            <a href="mailto:hello@apexdigital.com">hello@apexdigital.com</a>.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting
            the new policy on this page with an updated date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{" "}
            <a href="mailto:hello@apexdigital.com">hello@apexdigital.com</a> or by calling{" "}
            <a href="tel:+15120000000">(512) 000-0000</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
