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
    bullets?: string[];
    cta?: boolean;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sonnenlinie",
    title: "Mein Leben auf der Sonnenlinie",
    subtitle: "Nürnberg, Business und das Gefühl eines ewigen Sommerfests",
    label: "Sonnenlinie",
    date: "2026-05-11",
    readingTime: "5 Min.",
    intro:
      "Wenn ich an Nürnberg denke, denke ich an Licht. Nicht das Licht der Altstadt oder des Christkindlesmarkts — sondern ein inneres Licht, das einfach da war. Selbstverständlich. Leicht. Als wäre es immer schon so gewesen. Nürnberg liegt auf meiner Sonnenlinie — und ich habe dort am längsten gelebt. Was das bedeutet hat? Das erzähle ich dir jetzt.",
    sections: [
      {
        heading: "Was die Sonnenlinie in der Astrogeografie bedeutet",
        body: "In der Astrokartografie verbindet die Sonnenlinie all jene Orte der Welt, an denen die Sonne zum Zeitpunkt deiner Geburt in einem bestimmten Winkel am Himmel stand. Energetisch ist sie die Linie der Sichtbarkeit, der Identität und der Lebendigkeit. Hier wirst du nicht zu jemand anderem — du wirst mehr du selbst.",
        bullets: [
          "Du wirst sichtbarer — du strahlst, wirst wahrgenommen",
          "Selbstbewusstsein wächst auf natürliche Weise",
          "Business und Karriere entfalten sich fast wie von selbst",
          "Das Leben trägt eine tiefe, echte Leichtigkeit in sich",
        ],
      },
      {
        heading: "Meine Zeit in Nürnberg",
        body: "Oh, wie viel habe ich hier gelacht! Es war, als ob die Sonne mein Herz erwärmt und mir so viel Leichtigkeit schenkt. Das Leben fühlte sich wie ein Sommerfest an.\n\nIch habe in Nürnberg viel Business gemacht. Es ist verrückt, wenn ich heute zurückschaue — Dinge, die woanders mühsam waren, gingen dort einfach. Türen öffneten sich. Menschen kamen auf mich zu. Ideen flossen. Ich war produktiv, sichtbar, lebendig.\n\nDie Sonnenlinie gibt dir eine natürliche Bühne. Sie zwingt dich nicht, draufzusteigen — aber wenn du bereit bist, passiert etwas Magisches: Du wirst gesehen. Nicht weil du lauter bist oder mehr machst, sondern weil du strahlst.",
      },
      {
        heading: "Was ich daraus gelernt habe",
        body: "Nicht jeder Ort passt zu jedem Lebenskapitel. Manchmal brauchen wir eine Mondlinie, um zu fühlen. Manchmal eine Jupiterlinie, um Glück anzuziehen. Und manchmal brauchen wir genau das: die Sonne. Den Ort, an dem wir wachsen, sichtbar werden und unser Ding machen dürfen.\n\nNürnberg war für mich dieser Ort.\n\nDie wichtigste Lektion: Der richtige Ort verstärkt das, was in dir steckt. Er zieht es nach oben, gibt ihm Raum. Der falsche Ort blockiert, erschöpft, kostet Energie ohne Gegenleistung.",
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
