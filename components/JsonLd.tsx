export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://astrogeoanna.com/#anna",
        name: "Anna Thoma",
        jobTitle: "Astrokartographie-Expertin & Astrologin",
        description:
          "Deutschlands führende Expertin für Astrokartographie und Astrogeografie. Ich helfe dir, deinen Kraftort auf der Erde zu finden — durch präzise astrologische Analyse mit 7 Linienarten.",
        email: "astrogeografie@gmail.com",
        url: "https://astrogeoanna.com",
        sameAs: [
          "https://calendly.com/astrogeo",
          "https://www.instagram.com/astrogeo.anna",
        ],
        knowsAbout: [
          "Astrokartographie",
          "Astrogeografie",
          "Astrocartography",
          "Local Space Astrology",
          "Raumastrologie",
          "Standortastrologie",
          "Parans",
          "Destiny Crossings",
          "Karma-Linien",
          "Vortex-Punkte",
          "Lokale Astrologie",
          "Orts-Astrologie",
          "Orts-Horoskop",
          "Kipperkarten",
          "Skatkarten",
          "Cosmic Coordinates",
        ],
        image:
          "https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/13003380/2c870fde.jpg",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://astrogeoanna.com/#business",
        name: "Anna Thoma – Astrokartographie & Astrogeografie",
        description:
          "Astrokartographie, Astrogeografie & Astrocartography-Beratung. Finde deinen Kraftort auf der Erde — mit 7 Linienarten, Karma-Linien, Destiny-Crossings und Vortex-Punkten.",
        url: "https://astrogeoanna.com",
        email: "astrogeografie@gmail.com",
        image:
          "https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/13003380/2c870fde.jpg",
        priceRange: "€€€",
        founder: { "@id": "https://astrogeoanna.com/#anna" },
        areaServed: [
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Austria" },
          { "@type": "Country", name: "Switzerland" },
        ],
        serviceType: [
          "Astrokartographie-Reading",
          "Astrogeografie-Beratung",
          "Astrocartography",
          "Orts-Horoskop",
          "Paar-Reading Astrokartographie",
          "Kipperkarten Reading",
          "Skatkarten Orakel",
          "Raumastrologie",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Astrokartographie Angebote",
          itemListElement: [
            {
              "@type": "Offer",
              price: "495",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Astrokartographie (Orts-Horoskop)",
                description:
                  "Die vollständige Astrokartographie-Analyse in 90 Minuten per Zoom: 7 Linienarten, Karma-Linien, Destiny-Crossings, Vortex-Punkte, Progressions-Chart & Solar-Radix.",
                url: "https://calendly.com/astrogeo/60",
              },
            },
            {
              "@type": "Offer",
              price: "777",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Astrokartographie für Paare",
                description:
                  "2 Sessions à 90 Minuten — gemeinsame Astrokartographie-Analyse für Paare: idealer Wohnort, Beziehungsdynamik & Entwicklungspotenziale.",
                url: "https://calendly.com/astrogeo/astrogeografie-fur-paare",
              },
            },
            {
              "@type": "Offer",
              price: "222",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Birthday Astrogeo",
                description:
                  "45 Minuten per Zoom: Der perfekte Geburtstags-Ort für dein nächstes Solarjahr.",
                url: "https://calendly.com/astrogeo/birthday-astrogeo",
              },
            },
            {
              "@type": "Offer",
              price: "197",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Follow-Up Session",
                description:
                  "45 Minuten per Zoom für bestehende Klientinnen: aktuelle Themen & neue astrologische Zyklen.",
                url: "https://calendly.com/astrogeo/astrogeo-follow-up",
              },
            },
            {
              "@type": "Offer",
              price: "147",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Frag Anna – Astro-Session",
                description:
                  "30 Minuten per Zoom: Alle deine Fragen zur Astrokartographie, gezielt & auf den Punkt.",
                url: "https://calendly.com/astrogeo/frag-anna-deine-personliche-astro-session",
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
                  "Kostenloser 30-minütiger Kennenlern-Call per Zoom.",
                url: "https://calendly.com/astrogeo/orientierungs-call",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://astrogeoanna.com/#website",
        url: "https://astrogeoanna.com",
        name: "Anna Thoma – Astrokartographie",
        description:
          "Finde deinen Kraftort auf der Erde. Deutschlands führende Astrokartographie-Expertin Anna Thoma.",
        inLanguage: "de-DE",
        publisher: { "@id": "https://astrogeoanna.com/#anna" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Was genau ist Astrokartographie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Astrokartographie ist eine Methode der Astrologie, die deinen Geburtsmoment auf eine Weltkarte überträgt. Bestimmte Planetenenergien wirken an bestimmten Orten besonders stark — manche Orte unterstützen dich in Liebe, andere in Karriere, Kreativität oder Heilung. Die Methode wurde in den 1970er Jahren von Jim Lewis entwickelt und ist heute weltweit bekannt.",
            },
          },
          {
            "@type": "Question",
            name: "Was kostet eine Astrokartographie-Session bei Anna Thoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Das Flagship-Reading (90 Min. per Zoom) kostet 495 €. Das Paar-Reading (2 × 90 Min.) kostet 777 €. Es gibt außerdem einen kostenlosen Orientierungs-Call (30 Min.) zum Kennenlernen.",
            },
          },
          {
            "@type": "Question",
            name: "Muss ich mich mit Astrologie auskennen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nein, überhaupt nicht. Anna erklärt alles klar und verständlich. Du brauchst nur dein genaues Geburtsdatum, die Uhrzeit und den Geburtsort.",
            },
          },
          {
            "@type": "Question",
            name: "Wozu brauche ich die genaue Geburtszeit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Die Geburtszeit ist entscheidend, weil sich die Aszendenten-Linie (AC) und die MC-Linie in nur wenigen Minuten um Hunderte von Kilometern verschieben. Je genauer die Zeit, desto präziser die Analyse.",
            },
          },
          {
            "@type": "Question",
            name: "Was passiert, wenn mein Kraftort weit weg ist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Das ist häufig der Fall und kein Problem. Im Reading erklärt Anna eine geheime Methode, wie weit eine Linie wirklich wirkt — also wie groß der Orb ist. Kraftorte können für Urlaube, Reisen oder als langfristiges Ziel genutzt werden. Raumastrologie zeigt außerdem, wie du planetare Energien direkt in deinem Zuhause aktivierst.",
            },
          },
          {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen Cosmic Coordinates und dem astrologischen Reading?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Im Mini-Kurs Cosmic Coordinates lernst du Astrokartographie selbst — in deinem Tempo, eigenständig. Im persönlichen Reading gehen Anna und du gemeinsam in den Deep Dive: 7 verschiedene Linienarten, Karma-Linien, Destiny-Crossings und sensitive Punkte, die im Kurs nicht behandelt werden.",
            },
          },
          {
            "@type": "Question",
            name: "Was ist Raumastrologie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Raumastrologie (auch Local Space Astrology) zeigt, wie planetare Energien deinen unmittelbaren Wohnraum prägen — deine Wohnung, deine Stadt, deine täglichen Wege. Während Astrokartographie weltweite Kraftorte analysiert, fokussiert sich die Raumastrologie auf deinen direkten Alltag.",
            },
          },
          {
            "@type": "Question",
            name: "Heißt das, ich muss umziehen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nein. Astrokartographie zeigt dir Optionen — keine Verpflichtungen. Manchmal reicht eine bewusste Reise, manchmal hilft das Wissen allein. Und manchmal führt die Erkenntnis zu einem Umzug. Das ist deine Entscheidung.",
            },
          },
          {
            "@type": "Question",
            name: "Was sind Parans in der Astrokartographie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Parans entstehen, wenn sich zwei Planetenlinien auf der Weltkarte kreuzen. An diesen Kreuzungspunkten überlagern sich zwei Planetenenergien gleichzeitig — das macht sie zu besonders kraftvollen und bedeutsamen Orten.",
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
