# vspace.one - Website

Dies ist das Repository mit dem Quellcode der vspace.one Webseite.

## Strukturierung

```/web``` - Derzeit Großteil des Codes - "Frontend"

## Tech-Stack

Das Projekt nutzt als Basis die [Astro]("https://astro.build") Framework.

Als Laufzeit empfehlen wir [Bun]("https://bun.sh"), es bestehen derzeit allerdings keine Laufzeit Abhängigkeiten, weshalb die Entwicklung auch mit Node.js möglich sein sollte.

### Wieso nicht React, Vue oder XYZ...?

Ziel ist es die Seite so vielen Menschen wie möglich zugänglich zu machen.
Deshalb nutzt die Seite bisher eine Kombination von Astro Komponenten und Markdown/MDX. Bei Astro Komponenten handelt es sich vom Prinzip her um eine Abstraktion über HTML, die sehr nah am Web-Standard ist, im Vergleich zu vielen anderen Frameworks. 

Der Astro Syntax ähnelt JSX (Bekannt durch React) ist allerdings näher an typischem HTML dran (Bsp: React - ```className```, Astro - ```class```).

Das bedeutet wenn jemand nur HTML beherrscht ist es ihm trotzdem möglich etwas zur Seite beizutragen.

Um dies weiter zu erleichtern macht die Seite starken gebrauch von wiederverwendbaren Komponenten. Siehe: [Komponenten](#komponenten)

Allerdings ist es in Astro auch problemlos möglich mit bspw. React zu arbeiten. Dies funktioniert über [Islands/Inseln]("https://docs.astro.build/de/concepts/islands/").
Hierbei handelt es sich um Inseln die in dem Projekt eingebetteten werden (Sinnbildlich, nicht zu verwechseln mit iframes). In diesen Islands können React, Vue.js sowie viele weitere libraries verwendet werden.

Ziel ist es soweit wie möglich mit Astro auszukommen, da wir hierdurch zu großen Teilen auf Client-Seitiges JavaScript verzichten können, was die Bundle Size klein hält und die Ladezeiten schnell.

Grundsätzlich bleibt es euch aber offen eure Lieblings-Library zu verwenden, solange es nicht auf der Startseite ist.

## Entwickeln des Frontends

Die Befehle müssen im Unterordner /web ausgeführt werden.

### Installieren der Abhängigkeiten

Bun:
```bun install```
Node.js/NPM:
```npm install```

### Starten des Entwicklungsservers

Bun:
```bun dev```
Node.js/NPM:
```npm start```

### Kompilieren

Bun:
```bun run build```
Node.js/NPM:
```npm run build```

### Kompilieren

Hinweis: Hierfür muss erst die Seite kompiliert werden.

Bun:
```bun preview```
Node.js/NPM:
```npm preview```


## Komponenten

Unter ```/web/src/components``` findest du unsere Komponenten die quasi die Bausteine der Website bilden.

### Beispiel Seitenaufbau

Eine Normale Site ist so aufgebaut:

````

---
import Heading from "@/components/Heading.astro";
import Section from "@/components/Section.astro";
import MainLayout from "@/layouts/MainLayout.astro";
import RootLayout from "@/layouts/RootLayout.astro";
---

<RootLayout title="Seitentitel">
  <MainLayout>
    <Section>
      <Heading main>Haupt-Überschrift</Heading>
    </Section>
    <Section>
        <!-- Ab hier kannst du normales HTML schreiben. -->
    </Section>
  </MainLayout>
</RootLayout>