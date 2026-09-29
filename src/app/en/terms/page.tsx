import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalList,
  Mail,
} from "@/components/legal/LegalPage";
import { LEGAL_UPDATED_EN, PRIVACY_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use | AgentFlow",
  description:
    "AgentFlow terms of use. The conditions for using our website and our service.",
  alternates: {
    canonical: "/en/terms",
    languages: {
      "es-AR": "/terms",
      en: "/en/terms",
    },
  },
  openGraph: {
    url: "https://agentflow.casa/en/terms",
    title: "Terms of Use | AgentFlow",
    locale: "en_US",
  },
};

export default function TermsPageEn() {
  return (
    <LegalPage
      lang="en"
      title="Terms of Use"
      updated={LEGAL_UPDATED_EN}
      esHref="/terms"
      enHref="/en/terms"
      notice="This is an English translation provided for convenience. For users in Argentina, the Spanish version prevails."
    >
      <LegalSection>
        <p>
          These Terms of Use govern access to and use of the agentflow.casa
          website and the AgentFlow service, provided by MS Group Ventures LLC
          (AgentFlow). By accessing or using the website or the service, you
          accept these terms in full. If you do not agree with any part of
          them, please do not use them.
        </p>
      </LegalSection>

      <LegalSection id="service" title="Description of the service">
        <p>
          AgentFlow is an artificial intelligence assistant for real estate
          agents that works mainly over WhatsApp. It coordinates showings,
          generates documents, tracks transactions and integrates with Google
          Calendar. The service is currently offered in beta to RE/MAX agents
          in Argentina.
        </p>
      </LegalSection>

      <LegalSection id="user-responsibility" title="User responsibility">
        <LegalList
          items={[
            "You are responsible for the accuracy of the data you enter and for having a legitimate basis to process your clients' and contacts' data.",
            "AI-generated documents and responses may contain errors. Review every document before sending or signing it.",
            "AgentFlow does not provide legal, accounting or tax advice.",
          ]}
        />
      </LegalSection>

      <LegalSection id="beta" title="Beta">
        <p>
          During the beta the service may change, be interrupted or contain
          errors. We may modify or discontinue features with reasonable notice.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="Acceptable use">
        <p>When using the website or the service, you agree to:</p>
        <LegalList
          items={[
            "Provide accurate and up-to-date information.",
            "Not use the website or the service for illegal or unauthorized purposes.",
            "Not attempt to gain unauthorized access to our systems, servers or databases.",
            "Not reproduce, duplicate or exploit any part of the website for commercial purposes without our prior written consent.",
            "Not transmit viruses, malware or any destructive code.",
          ]}
        />
        <p>
          We reserve the right to restrict access to any user who breaches
          these conditions.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual property">
        <p>
          All content on the AgentFlow website — including text, designs,
          logos, graphics, icons and software — is owned by MS Group Ventures
          LLC or its licensors and is protected by applicable intellectual
          property laws and international treaties. No license or right to
          that content is granted except for personal, non-commercial browsing
          of the website.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="Limitation of liability">
        <p>
          The website, the service and their content are provided &quot;as
          is&quot; and &quot;as available&quot;, without warranties of any
          kind, express or implied.
        </p>
        <p>
          To the extent permitted by applicable law, AgentFlow will not be
          liable for any direct, indirect, incidental, consequential or special
          damages arising from the use of, or inability to use, the website or
          the service. This includes, without limitation, loss of data, service
          interruptions or errors in content.
        </p>
      </LegalSection>

      <LegalSection id="privacy" title="Privacy">
        <p>
          The processing of personal data is governed by our{" "}
          <Link href="/en/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="trademarks" title="Trademarks">
        <p>
          RE/MAX, WhatsApp, Google and Google Calendar are trademarks of their
          respective owners. AgentFlow is an independent product and is not
          affiliated with, sponsored by or endorsed by them.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing law">
        <p>
          These terms are governed by the laws of the State of Wyoming, United
          States. Personal data of users in Argentina is also processed in
          accordance with Argentine Personal Data Protection Law 25,326.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to these terms">
        <p>
          We may modify these Terms of Use at any time. Changes take effect
          when posted on this page with the corresponding update date.
          Continued use of the website or the service after any change means
          you accept the new terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>
          MS Group Ventures LLC — 30 N Gould St, Sheridan, WY 82801, USA —{" "}
          <Mail address={PRIVACY_EMAIL} />.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
