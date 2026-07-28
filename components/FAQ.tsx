"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Was genau ist Astrokartographie?",
    a: "Astrokartographie ist eine Methode der Astrologie, die deinen Geburtsmoment auf eine Weltkarte überträgt. Bestimmte Planetenenergien wirken an bestimmten Orten besonders stark — manche Orte unterstützen dich in Liebe, andere in Karriere, Kreativität oder Heilung. Die Methode wurde in den 1970er Jahren von Jim Lewis entwickelt und ist heute weltweit bekannt.",
  },
  {
    q: "Muss ich mich mit Astrologie auskennen?",
    a: "Nein, überhaupt nicht. Ich erkläre dir alles auf eine klare, verständliche Weise. Du brauchst keine Vorkenntnisse — nur dein genaues Geburtsdatum, die Uhrzeit und den Geburtsort. Den Rest übernehme ich.",
  },
  {
    q: "Wozu brauche ich die genaue Geburtszeit?",
    a: "Die Geburtszeit ist entscheidend, weil sich die Aszendenten-Linie (AC) und die MC-Linie (Karriere und öffentlicher Ruf) in nur wenigen Minuten um Hunderte von Kilometern verschieben. Je genauer die Zeit, desto präziser die Analyse. Falls du deine genaue Geburtszeit nicht kennst, arbeite ich mit dir an einem Rektifikationsverfahren.",
  },
  {
    q: "Heißt das, ich muss umziehen?",
    a: "Nein. Astrokartographie zeigt dir Optionen — keine Verpflichtungen. Manchmal reicht eine bewusste Reise an einen bestimmten Ort. Manchmal hilft es einfach zu wissen, welche Orte dir Energie geben und welche sie dir nehmen. Und manchmal führt die Erkenntnis zu einem Umzug. Das ist deine Entscheidung.",
  },
  {
    q: "Was passiert, wenn mein Kraftort weit weg ist?",
    a: "Das ist häufig der Fall — und kein Problem. Kraftorte lassen sich als Reiseziel, für bewusste Arbeitsaufenthalte oder als langfristiges Umzugsziel nutzen. Dazu kommt: Im Reading verrate ich dir eine geheime Methode, mit der du verstehst, wie weit eine Linie wirklich wirkt — also wie groß der Orb ist, in dem du eine Planetenenergie bereits spürst. Das verändert alles. Und wenn du deinen Kraftort erst einmal nicht verlassen kannst, zeigt die Raumastrologie, wie du planetare Energien direkt in deinem Zuhause aktivierst — ganz ohne umzuziehen.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "In der Regel sind Termine innerhalb von 1–2 Wochen verfügbar. Manchmal gibt es kurzfristigere Plätze. Schreib mir einfach — ich melde mich innerhalb von 24 Stunden.",
  },
  {
    q: "Was ist der Unterschied zwischen Cosmic Coordinates und dem astrologischen Reading?",
    a: "Im Mini-Kurs Cosmic Coordinates lernst du alles selbst: die Grundlagen der Astrokartographie, die wichtigsten Planetenlinien und wie du deine eigene Karte liest — in deinem Tempo, eigenständig. Im persönlichen Reading gehen wir gemeinsam in den Deep Dive: Ich analysiere mit dir 7 verschiedene Linienarten, die im Kurs nicht behandelt werden — von Karma-Linien über Destiny-Crossings bis zu sensitiven Punkten. Das ist der Unterschied zwischen Wissen und echter Transformation.",
  },
  {
    q: "Was sind Parans in der Astrokartographie?",
    a: "Parans entstehen, wenn sich zwei ACG-Linien auf der Weltkarte kreuzen. An diesen Kreuzungspunkten überlagern sich zwei Planetenenergien gleichzeitig — das macht sie zu besonders kraftvollen und bedeutsamen Orten. Parans sind ein zentraler Bestandteil jeder Astrokartographie-Session.",
  },
  {
    q: "Was ist Raumastrologie und Local Space Astrology?",
    a: "Raumastrologie (auch Local Space Astrology) ist eine eigenständige Methode. Sie zeigt, wie planetare Energien deinen unmittelbaren Lebensraum prägen: deine Wohnung, deine Stadt, deine täglichen Wege. Während Astrokartographie weltweite Kraftorte analysiert, fokussiert sich die Raumastrologie auf deinen direkten Alltag.",
  },
  {
    q: "Gibt es eine Geld-zurück-Garantie?",
    a: "Ich stehe zu 100% für die Qualität meiner Arbeit. Wenn du nach der Session das Gefühl hast, keinen Mehrwert erhalten zu haben, sprechen wir. Bisher ist das noch nie passiert — aber mein Versprechen steht.",
  },
  {
    q: "Was bekomme ich nach dem Reading?",
    a: "Du erhältst die vollständige Zoom-Aufzeichnung, alle Screenshots deiner astrogeografischen Karte sowie ein PDF mit Einführung und Planeten-Erklärungen — alles zum Nachschlagen und Vertiefen.",
  },
  {
    q: "Wie bereite ich mich am besten auf das Reading vor?",
    a: "Halte dein genaues Geburtsdatum, die Uhrzeit und den Geburtsort bereit — je präziser, desto besser die Analyse. Überlege außerdem, welche Lebensbereiche du besonders beleuchten möchtest: Liebe, Karriere, Neustart? So nutzen wir die Zeit optimal.",
  },
  {
    q: "Kann das Reading auch auf Englisch stattfinden?",
    a: "Ja — Readings sind sowohl auf Deutsch als auch auf Englisch möglich. Wähle beim Buchen einfach den englischsprachigen Termin.",
  },
  {
    q: "Lässt sich ein Reading auch verschenken?",
    a: "Absolut. Du kannst einen Gutschein für jedes Angebot erwerben — einfach beim Buchen die Gutschein-Option wählen, die Person und den gewünschten Betrag angeben. Der Gutschein ist dauerhaft gültig.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-[rgba(184,146,46,0.1)] cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-start gap-6 py-6">
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light text-[#100802] group-hover:text-[#b8922e] transition-colors duration-300 leading-snug">
          {q}
        </h3>
        <div className="text-[#b8922e] flex-shrink-0 mt-1">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      {open && (
        <div className="pb-6 pr-10">
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#1c1008] font-light leading-relaxed">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.4em] text-[#3d2800] uppercase mb-6">
            Häufige Fragen
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#100802] leading-[1.15]">
            Deine Fragen —
            <br />
            <em className="gold-gradient font-medium">meine Antworten</em>
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        {/* More questions */}
        <div className="mt-16 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1008] font-light mb-6">
            Noch eine Frage?
          </p>
          <a
            href="#buchen"
            className="btn-outline-gold inline-block px-10 py-4 text-sm font-[family-name:var(--font-montserrat)] tracking-[0.15em] rounded-sm"
          >
            Schreib mir direkt
          </a>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
