import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutz | Anna Astrogeografie",
  description: "Datenschutzerklärung von Anna Thoma – Astrogeografie & Astrologische Readings",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Verantwortliche Person</h2>
      <p>
        Verantwortliche im Sinne der Datenschutzgesetze, insbesondere der
        EU-Datenschutzgrundverordnung (DSGVO), ist:
      </p>
      <p>
        <strong>Anna Thoma</strong>
        <br />
        E-Mail:{" "}
        <a href="mailto:astrogeografie@gmail.com">astrogeografie@gmail.com</a>
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Der Schutz deiner persönlichen Daten ist mir ein wichtiges Anliegen.
        Ich verarbeite deine Daten ausschließlich auf Grundlage der gesetzlichen
        Bestimmungen (DSGVO, BDSG). Diese Datenschutzerklärung informiert dich
        über die wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner
        Website.
      </p>
      <p>
        Diese Website verwendet <strong>keine</strong> Tracking-Tools, keine
        Analyse-Software (wie Google Analytics) und setzt <strong>keine</strong>{" "}
        Werbe-Cookies. Es werden keine personenbezogenen Daten ohne dein Wissen
        gespeichert oder weitergegeben.
      </p>

      <h2>3. Hosting & technischer Betrieb</h2>
      <p>
        Diese Website wird über{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Vercel Inc.
        </a>{" "}
        (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet.
        Bei jedem Aufruf der Website werden automatisch Verbindungsdaten
        (sog. Server-Log-Files) erhoben, die dein Browser übermittelt:
      </p>
      <ul>
        <li>IP-Adresse (anonymisiert)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Browsertyp und -version</li>
        <li>Betriebssystem</li>
      </ul>
      <p>
        Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und
        nach spätestens 30 Tagen automatisch gelöscht. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am störungsfreien
        Betrieb).
      </p>
      <p>
        Vercel hat sich dem EU-U.S. Data Privacy Framework verpflichtet. Weitere
        Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Datenschutzerklärung
        </a>
        .
      </p>

      <h2>4. Schriftarten (Google Fonts)</h2>
      <p>
        Diese Website verwendet Schriftarten der Google LLC über das
        Next.js-Framework. Die Schriftarten werden dabei <strong>beim Build-Vorgang</strong>{" "}
        heruntergeladen und auf meinem Server (Vercel) gespeichert. Beim Besuch
        dieser Website werden <strong>keine Verbindungen zu Google-Servern</strong>{" "}
        hergestellt. Es werden keine Daten an Google übertragen.
      </p>

      <h2>5. Terminbuchung via Calendly</h2>
      <p>
        Für die Buchung von Terminen nutze ich den Dienst{" "}
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
          Calendly
        </a>{" "}
        (Calendly LLC, 115 E. Main St., Atlanta, GA 30213, USA). Wenn du auf
        einen Buchungs-Link klickst, wirst du auf die Website von Calendly
        weitergeleitet. Dort gelten die Datenschutzbestimmungen von Calendly:
      </p>
      <p>
        <a
          href="https://calendly.com/legal/privacy-notice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calendly Datenschutzerklärung
        </a>
      </p>
      <p>
        Bei der Buchung eines Termins verarbeitest du folgende Daten bei
        Calendly: Name, E-Mail-Adresse, gewählter Termin sowie alle freiwilligen
        Angaben im Buchungsformular. Diese Daten werden an mich weitergeleitet,
        damit ich die Session vorbereiten kann.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
        Calendly ist im EU-U.S. Data Privacy Framework zertifiziert.
      </p>

      <h2>6. Kontakt per E-Mail</h2>
      <p>
        Wenn du mir eine E-Mail schreibst, werden deine Anfrage und alle
        mitgeteilten persönlichen Daten (Name, E-Mail-Adresse, Inhalt der
        Nachricht) zum Zweck der Bearbeitung deiner Anfrage und für eventuelle
        Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne deine
        Einwilligung weiter.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
        bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        Beantwortung von Anfragen). Die Daten werden gelöscht, sobald deine
        Anfrage abschließend bearbeitet wurde und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>7. Deine Rechte als betroffene Person</h2>
      <p>
        Du hast gemäß DSGVO folgende Rechte:
      </p>
      <ul>
        <li>
          <strong>Auskunft</strong> (Art. 15 DSGVO): Du kannst Auskunft über
          deine gespeicherten Daten verlangen.
        </li>
        <li>
          <strong>Berichtigung</strong> (Art. 16 DSGVO): Du kannst die
          Berichtigung unrichtiger Daten verlangen.
        </li>
        <li>
          <strong>Löschung</strong> (Art. 17 DSGVO): Du kannst die Löschung
          deiner Daten verlangen, soweit keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </li>
        <li>
          <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
        </li>
        <li>
          <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
        </li>
        <li>
          <strong>Widerspruch</strong> (Art. 21 DSGVO): Du kannst jederzeit der
          Verarbeitung deiner Daten widersprechen.
        </li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte wende dich an:{" "}
        <a href="mailto:astrogeografie@gmail.com">astrogeografie@gmail.com</a>
      </p>
      <p>
        Du hast außerdem das Recht, dich bei der zuständigen
        Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige
        Aufsichtsbehörde für Deutschland findest du unter:{" "}
        <a
          href="https://www.bfdi.bund.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.bfdi.bund.de
        </a>
        .
      </p>

      <h2>8. Keine Cookies</h2>
      <p>
        Diese Website setzt <strong>keine</strong> eigenen Cookies. Es werden
        keine Tracking-Cookies, Analyse-Cookies oder Marketing-Cookies
        verwendet. Ein Cookie-Banner ist daher nicht erforderlich.
      </p>

      <h2>9. Aktualität dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
        <strong>Mai 2026</strong>. Durch die Weiterentwicklung meiner Website
        oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
        Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
      </p>
    </LegalLayout>
  );
}
