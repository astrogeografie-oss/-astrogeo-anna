export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://astrogeo-anna.de/#anna",
        name: "Anna Thoma",
        jobTitle: "Astrogeografie-Expertin & Astrologin",
        description:
          "Deutschlands führende Expertin für Astrogeografie und Astrocartography. Ich helfe dir, deinen Kraftort auf der Erde zu finden — durch präzise astrologische Analyse.",
        email: "astrogeografie@gmail.com",
        url: "https://astrogeo-anna.de",
        sameAs: ["https://calendly.com/astrogeo"],
        knowsAbout: [
          "Astrogeografie",
          "Astrocartography",
          "Lokale Astrologie",
          "Orts-Astrologie",
          "Kipperkarten",
          "Skatkarten",
        ],
        image:
          "https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/13003380/2c870fde.jpg",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://astrogeo-anna.de/#business",
        name: "Anna Thoma – Astrogeografie",
        description:
          "Astrogeografie- und Astrologie-Beratung. Finde deinen Kraftort auf der Erde.",
        url: "https://astrogeo-anna.de",
        email: "astrogeografie@gmail.com",
        image:
          "https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/13003380/2c870fde.jpg",
        priceRange: "€€",
        founder: { "@id": "https://astrogeo-anna.de/#anna" },
        areaServed: {
          "@type": "Country",
          name: "Germany",
        },
        serviceType: [
          "Astrogeografie-Reading",
          "Astrologisches Reading",
          "Kipperkarten Reading",
          "Skatkarten Orakel",
          "Astrocartography",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Astrogeografie Angebote",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Astrogeografie (Orts-Horoskop)",
                description:
                  "Die vollständige Astrocartography-Analyse: Finde deinen idealen Ort für Liebe, Karriere und inneres Wachstum.",
                url: "https://calendly.com/astrogeo/60",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Astrogeografie für Paare",
                description:
                  "Gemeinsame Astrocartography-Analyse für Paare — der perfekte Ort für euren nächsten Lebensabschnitt.",
                url: "https://calendly.com/astrogeo/astrogeografie-fur-paare",
              },
            },
            {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Orientierungs-Call",
                description:
                  "Kostenloser 30-minütiger Kennenlern-Call über Zoom.",
                url: "https://calendly.com/astrogeo/orientierungs-call",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://astrogeo-anna.de/#website",
        url: "https://astrogeo-anna.de",
        name: "Anna Astrogeografie",
        description:
          "Finde deinen Kraftort auf der Erde. Deutschlands führende Astrogeografie-Expertin.",
        inLanguage: "de-DE",
        publisher: { "@id": "https://astrogeo-anna.de/#anna" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Was ist Astrogeografie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Astrogeografie (auch Astrocartography) verbindet dein persönliches Horoskop mit Google Maps und zeigt dir, welche Orte auf der Welt ideal für Liebe, Karriere oder inneren Ausgleich sind.",
            },
          },
          {
            "@type": "Question",
            name: "Was kostet eine Astrogeografie-Session?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Die vollständige Astrogeografie-Session dauert 120 Minuten per Zoom. Es gibt auch einen kostenlosen Orientierungs-Call (30 Min.) zum Kennenlernen.",
            },
          },
          {
            "@type": "Question",
            name: "Wo kann ich einen Termin buchen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Termine können direkt über Calendly gebucht werden: https://calendly.com/astrogeo",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
