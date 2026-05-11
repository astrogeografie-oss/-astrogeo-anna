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
    bullets?: string[];
    cta?: boolean;
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
      "Nürnberg. Auch eine Sonnenlinie. Sichtbarkeit, Klarheit, Fokus. Ich wurde mutiger, habe mehr gezeigt, wer ich bin. Und ich war dort lange — über zehn Jahre. Hier sind meine Kinder zur Schule gegangen, hier war mein Lebensmittelpunkt. Nürnberg stand für Struktur, Alltag, Verantwortung — aber auch für Business, Präsenz und erste echte Erfolge.",
    sections: [
      {
        heading: "Was die Sonnenlinie in der Astrogeografie bedeutet",
        body: "In der Astrokartografie verbindet die Sonnenlinie all jene Orte der Welt, an denen die Sonne zum Zeitpunkt deiner Geburt in einem bestimmten Winkel am Himmel stand. Energetisch ist sie die Linie der Sichtbarkeit, der Identität und der Lebendigkeit. Hier wirst du nicht zu jemand anderem — du wirst mehr du selbst.",
        bullets: [
          "Du wirst sichtbarer — du strahlst, wirst wahrgenommen",
          "Selbstbewusstsein wächst auf natürliche Weise",
          "Business und Karriere entfalten sich fast wie von selbst",
          "Sonne Local Space ist nichts für Undercover-Leben — du willst raus, leuchten, Menschen erreichen",
        ],
      },
      {
        heading: "Meine persönliche Erfahrung — Nürnberg",
        body: "Ich habe viel gearbeitet, war ständig unterwegs, habe Projekte angeschoben und umgesetzt. Es war eine Zeit, in der vor allem männliche Energie dominant war — Leistung, Zielstrebigkeit, Machen. Ich war sichtbar — aber selten weich.\n\nDie Sonnenenergie zeigte sich hier kraftvoll, klar, fast schon fordernd. Und genau das ist die Wahrheit über die Sonnenlinie, die kaum jemand ausspricht: Sie trägt dich — aber sie fordert auch. Sie gibt dir eine Bühne. Und wenn du draufstehst, wirst du gesehen. Komplett.",
        highlight: true,
      },
      {
        heading: "Und dann kam Zürich",
        body: "In Zürich wurde es nochmal krass. Ich hatte dort einen extremen Boost in Sachen Selbstverwirklichung. Die Sonnenenergie verstärkte sich — schneller, klarer, intensiver.\n\nOh, wie viel habe ich hier gelacht! Es war, als ob die Sonne mein Herz erwärmt und mir so viel Leichtigkeit schenkt. Das Leben fühlte sich wie ein Sommerfest an. Dinge, die woanders mühsam waren, gingen dort einfach. Türen öffneten sich. Menschen kamen auf mich zu. Ideen flossen.",
        highlight: true,
      },
      {
        heading: "Was ich daraus gelernt habe",
        body: "Nicht jeder Ort passt zu jedem Lebenskapitel. Manchmal brauchen wir eine Mondlinie, um zu fühlen. Manchmal eine Jupiterlinie, um Glück anzuziehen. Und manchmal brauchen wir genau das: die Sonne. Den Ort, an dem wir wachsen, sichtbar werden und unser Ding machen dürfen.\n\nDie wichtigste Lektion: Der richtige Ort verstärkt das, was in dir steckt. Er zieht es nach oben, gibt ihm Raum. Der falsche Ort blockiert, erschöpft, kostet Energie ohne Gegenleistung.",
      },
      {
        heading: "Ist die Sonnenlinie die richtige für dich?",
        body: "Die Sonnenlinie ist ein kraftvoller Ort — aber nicht automatisch für alle gleich. Wie jede Linie muss sie im Kontext deines gesamten Geburtshoroskops gelesen werden. Eine Sonne unter schwierigen Aspekten kann auf ihrer Linie auch Druck, Überforderung oder das Gefühl erzeugen, ständig performen zu müssen.\n\nDeshalb: Schau nie nur auf die Linie — schau auf das ganze Bild. Wenn du wissen möchtest, was deine Sonnenlinie für dich persönlich bedeutet und wo sie liegt, dann lass uns gemeinsam hineinschauen.",
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
