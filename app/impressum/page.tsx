import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum | Anna Astrogeografie",
  description: "Impressum von Anna Thoma – Astrogeografie & Astrologische Readings",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <address>
        <p>
          <strong>Anna Thoma</strong>
          <br />
          Kapuzinerstraße 15<br />
          55411 Bingen am Rhein
          <br />
          Deutschland
        </p>
      </address>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:astrogeografie@gmail.com">astrogeografie@gmail.com</a>
        <br />
        Terminbuchung:{" "}
        <a href="https://calendly.com/astrogeo" target="_blank" rel="noopener noreferrer">
          calendly.com/astrogeo
        </a>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Gemäß § 19 UStG wird keine Umsatzsteuer erhoben (Kleinunternehmerregelung).
        {/* TODO: Falls du eine USt-IdNr. hast, diese hier eintragen und den obigen Satz ersetzen: */}
        {/* Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE000000000 */}
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Astrologin & Astrogeografie-Beraterin (freiberuflich). Die Tätigkeit
        unterliegt keiner staatlichen Zulassung oder gesetzlich geregelten
        Berufsbezeichnung. Die angebotenen Leistungen dienen der persönlichen
        Orientierung und ersetzen keine medizinische, psychologische,
        juristische oder finanzielle Beratung.
      </p>

      <h2>Redaktionell Verantwortliche</h2>
      <p>
        Anna Thoma (Adresse wie oben)
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Meine E-Mail-Adresse finden Sie oben im Impressum. Ich bin nicht
        bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
        8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
        entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Mein Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch mich erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der
        jeweiligen Autorin.
      </p>
    </LegalLayout>
  );
}
