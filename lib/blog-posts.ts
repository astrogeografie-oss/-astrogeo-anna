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
  {
    slug: "marslinie-muenchen",
    title: "Mars am MC & Mars am DC — München",
    subtitle: "Sommer 2026 auf der Doppellinie — Wille, Hitze und was Mars wirklich mit dir macht",
    label: "Marslinie",
    date: "2026-08-05",
    readingTime: "4 Min.",
    intro:
      "Sommer 2026. Fünf Wochen München. Und zwar nicht irgendwo — sondern auf meiner Doppellinie: Mars am MC und Mars am Deszendenten. Zwei Marslinien, die sich gleichzeitig auf mich legen. Stell dir das mal vor.",
    sections: [
      {
        heading: "Die Marslinie auf einen Blick",
        body: "Die Marslinie verbindet all jene Punkte auf der Erde, an denen der Planet Mars zum Zeitpunkt deiner Geburt einen bestimmten Winkel einnahm — etwa am Meridian (MC) oder am Deszendenten (DC). Wo sie verläuft, wird Willenskraft spürbar: Antrieb, Mut, Durchsetzungsvermögen. Aber auch die rohe Seite dieser Energie — Aggression, Eroberung, dieser Drang, sich zu nehmen, was einem zusteht.",
        definitionBox: true,
        keywords: ["Willenskraft", "Durchsetzungsvermögen", "Männliche Energie"],
      },
      {
        heading: "Der Mars — was diese Energie bedeutet",
        body: "",
        planetBox: {
          planet: "Mars",
          symbol: "♂",
          energy: "Männliche Energie · Wille und Durchsetzungskraft",
          keywords: [
            "Willenskraft",
            "Mut",
            "Durchsetzungsvermögen",
            "Pioniergeist",
            "Aggression",
            "Eroberung",
          ],
        },
      },
      {
        heading: "Was eine Doppellinie bedeutet",
        body: "Wer schon einmal doppelt auf einer Linie stand, weiß: Da diskutiert die Energie nicht. Da wirkt sie.\n\nDer MC steht für dein Wirken in der Welt — Karriere, Sichtbarkeit, das, wofür du stehst. Der Deszendent steht für die Begegnung, für das Du, für alles, was dir in Beziehungen entgegenkommt. Legen sich zwei Marslinien gleichzeitig auf einen Ort, wirkt diese Energie nicht nur einmal, sondern doppelt — im Außen wie in der Begegnung.",
      },
      {
        heading: "Die Kulisse — zwei Schlangen und Mäuse im Tiefkühler",
        body: "Ich kam als House-Sitterin dorthin, und schon die Kulisse hätte kaum marsischer sein können: Zum Haus gehörten tatsächlich zwei Schlangen. Füttern sollte ich sie — aber das war so nicht vereinbart, also habe ich klar Nein gesagt. Auch das ist Mars: Grenzen ziehen, sich nicht überfahren lassen, dabei bleiben. Jeden Donnerstag kam stattdessen der Sohn vorbei und gab den beiden ihr Wasser. Der Kühlschrank war voll — und im zweiten lagen die eingefrorenen weißen Mäuse als Schlangenfutter. Ich musste lachen: Deutlicher konnte mir ein Ort seine Energie kaum ins Gesicht schreiben.",
      },
      {
        heading: "Der Körper zahlt Tribut",
        body: "Und diese Energie blieb nicht in der Kulisse — sie ging in den Körper. Zweiter Stock, volle Hitze, und ab da zahlte ich Mars seinen Tribut, immer im Doppelpack, ganz so, wie es sich für eine Doppellinie gehört. Ich stieß mir zweimal den Fuß, schnitt mich zweimal, holte mir zweimal eine Lebensmittelvergiftung — und zweimal Herpes, das ja nichts anderes ist als Feuer, das sich seinen Weg nach außen bahnt. Blut, kleine Unfälle, Hitze im Gewebe: All das schrieb sich in diesen Wochen direkt in mich ein. Kein Ort zum Runterkommen, sondern einer, der dich spüren lässt, dass du lebst.",
        highlight: true,
      },
      {
        heading: "Mars am Deszendenten — Dating in zehn Tagen",
        body: "Auch beim Dating ging es sofort heiß her — zehn Tage lang. Das ist der Deszendent, das Du, die Begegnung: Auf Mars am DC wird alles im Handumdrehen intensiv, leidenschaftlich, konfrontativ. Zu intensiv. Ich habe es bewusst wieder sein lassen, weil es einfach zu viel wurde — und genau das ist die Lektion dieser Achse: Mars zieht dich in die Reibung, doch du entscheidest, wie lange du mitgehst.",
      },
      {
        heading: "Mars am MC — der tägliche Kampf im Garten",
        body: "Mars am MC zeigte sich derweil ganz woanders — im täglichen Kampf. Zum Haus gehörte ein riesiger Garten, brütend heiß, und so stand ich jeden einzelnen Tag rund anderthalb Stunden da und goss. Eine echte körperliche Herausforderung, nicht ums Überleben, aber kämpfen musste ich täglich: anpacken, dranbleiben, durchziehen. Das ist Mars am MC in seiner ehrlichsten Form — Leistung, Körper, Wille. Kein Ort, an dem dir etwas geschenkt wird. Und trotzdem hatte all die Hitze auch ihre weichen Momente: Mit den Kätzchen lief es wunderbar, warm und verbindend — ein Beweis, dass selbst die kriegerische Energie ihre Zärtlichkeit kennt.",
        highlight: true,
      },
      {
        heading: "Was ich daraus gelernt habe",
        body: "Wenn du also wissen willst, wie kraftvoll, wie kämpferisch eine Marslinie wirklich ist, dann hast du hier einen kleinen, sehr lebendigen Impuls davon. Bayreuth war meine Marslinie als Schicksal — ich wurde hineingeboren, ohne Wahl. München war meine Marslinie als Forscherin: bewusst gewählt, bewusst erlebt, bewusst gedeutet.\n\nGenau darum geht es — nicht die Linie zu erleiden, sondern sie zu lesen. Wo sich deine persönliche Marslinie befindet, kann nur durch dein individuelles Geburtsbild erkannt werden. Du lernst das bei mir im Mini-Kurs oder im 1:1 und entdeckst, welche Orte dich wirklich tragen.",
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
