export interface PlanetBox {
  planet: string;
  keywords: string[];
  energy: string;
  symbol: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  date: string;
  readingTime: string;
  intro: string;
  sections: {
    heading?: string;
    body: string;
    highlight?: boolean;
    definitionBox?: boolean;
    keywords?: string[];
    bullets?: string[];
    cta?: boolean;
    planetBox?: PlanetBox;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sonnenlinie",
    title: "Mein Leben auf der Sonnenlinie",
    subtitle: "Nürnberg & Zürich — Sichtbarkeit, Business und was die Sonne wirklich mit dir macht",
    label: "Sonnenlinie",
    date: "2026-05-11",
    readingTime: "5 Min.",
    intro:
      "Es gibt Orte, die sich anfühlen, als wärst du endlich angekommen. Als würde das Leben dort leichter fließen — als ob du dort einfach mehr du selbst bist. In der Astrokartografie hat das einen Namen: die Sonnenlinie.",
    sections: [
      {
        heading: "Die Sonnenlinie auf einen Blick",
        body: "Die Sonnenlinie verbindet all jene Punkte auf der Erde, an denen die Sonne zum Zeitpunkt deiner Geburt einen bestimmten Winkel einnahm. Wo sie verläuft, ist deine Löwen-Energie zuhause. Bei jedem Menschen liegt sie woanders — errechnet aus Geburtsdatum, Uhrzeit und Geburtsort.",
        definitionBox: true,
        keywords: ["Lebensfreude", "Vitalität", "Männliche Energie"],
      },
      {
        heading: "Die Sonne — was diese Energie bedeutet",
        body: "",
        planetBox: {
          planet: "Sonne",
          symbol: "☼",
          energy: "Männliche Energie · Die eigene Bühne",
          keywords: [
            "Vitalität",
            "Lebenskraft",
            "Lebensfreude",
            "Sichtbarkeit",
            "Identität",
            "Selbstausdruck",
          ],
        },
      },
      {
        heading: "Was die Sonnenlinie bedeutet",
        body: "In der Astrogeografie steht die Sonne für Identität, Sichtbarkeit und Lebenskraft. Sie ist die Energie, die dich zeigt — die aus dir herausleuchtet und andere anzieht. Auf deiner Sonnenlinie wirst du nicht zu jemand anderem. Du wirst mehr du selbst.\n\nDas klingt simpel — und ist es doch nicht. Denn sichtbar zu sein bedeutet auch, wirklich gesehen zu werden. Mit allem, was du bist. Die Sonnenlinie fordert dich heraus, dich zu zeigen. Und genau darin liegt ihre Kraft.",
        bullets: [
          "Sichtbarkeit wächst auf natürliche Weise — du strahlst, wirst wahrgenommen",
          "Selbstbewusstsein entfaltet sich, ohne dass du daran arbeiten musst",
          "Business und Karriere bekommen einen echten Schub",
          "Das Leben fühlt sich leichter an — Dinge fließen, Türen öffnen sich",
        ],
      },
      {
        heading: "Meine Erfahrung — Nürnberg",
        body: "Über zehn Jahre habe ich in Nürnberg gelebt. Meine Kinder sind hier zur Schule gegangen, hier war mein Lebensmittelpunkt. Und ja — es war meine Sonnenlinie.\n\nIch habe viel gearbeitet, war ständig unterwegs, habe Projekte angeschoben und umgesetzt. Die Sonnenenergie zeigte sich kraftvoll, klar, fast schon fordernd — Leistung, Zielstrebigkeit, Machen. Männliche Energie pur. Ich war sichtbar. Aber selten weich.\n\nSie trägt dich, die Sonnenlinie. Und sie fordert auch. Sie gibt dir eine Bühne — und wenn du draufstehst, wirst du gesehen. Komplett.",
        highlight: true,
      },
      {
        heading: "Und dann kam Zürich",
        body: "Zürich war nochmal eine andere Qualität. Gleiche Energie — aber mit mehr Leichtigkeit. Ich hatte dort einen extremen Boost in Sachen Selbstverwirklichung. Schneller, klarer, intensiver.\n\nOh, wie viel habe ich hier gelacht! Es war, als würde die Sonne direkt mein Herz erwärmen. Das Leben fühlte sich wie ein Sommerfest an. Dinge, die woanders mühsam waren, gingen dort einfach. Türen öffneten sich. Menschen kamen auf mich zu. Ideen flossen.",
        highlight: true,
      },
      {
        heading: "Was ich daraus gelernt habe",
        body: "Nicht jeder Ort passt zu jedem Lebenskapitel. Manchmal brauchen wir die Mondlinie, um zu fühlen. Manchmal die Jupiterlinie, um Glück anzuziehen. Und manchmal brauchen wir genau das: die Sonne.\n\nDen Ort, an dem wir wachsen, sichtbar werden, unser Ding machen dürfen. Der richtige Ort verstärkt das, was in dir steckt — er zieht es nach oben, gibt ihm Raum. Der falsche Ort blockiert, erschöpft, kostet Energie ohne Gegenleistung.",
      },
      {
        heading: "Ist die Sonnenlinie die richtige für dich?",
        body: "Die Sonnenlinie ist kraftvoll — aber nicht automatisch für alle gleich. Wie jede Linie muss sie im Kontext deines gesamten Geburtshoroskops gelesen werden. Eine Sonne unter schwierigen Aspekten kann auf ihrer Linie auch Druck oder das Gefühl erzeugen, ständig performen zu müssen.\n\nDeshalb: Schau nie nur auf die Linie — schau auf das ganze Bild.\n\nWo sich deine persönliche Sonnenlinie befindet, kann nur durch dein individuelles Geburtsbild erkannt werden — denn jede Astro-Landkarte ist einzigartig. Du lernst das bei mir im Mini-Kurs oder im 1:1 und entdeckst, welche Orte dich wirklich tragen.",
        cta: true,
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
