# vspace.one - Website

Dies ist das Repository mit dem Quellcode der vspace.one Webseite.

## Strukturierung

```/web``` - Die Webseite - "Frontend"
```/api``` - API für dynamische Inhalte wie Events und die SpaceApi

## Tech-Stack

Das Projekt nutzt als Basis das [Astro]("https://astro.build") Framework.

Zum Entwickeln muss auf deinem System Node.JS installiert sein, sowie PNPM als Paketmanager.
Die Ausführung unter anderen Laufzeiten (Bun, Deno etc.) sollte auch möglich sein, wird allerdings nicht von uns getestet.

### Wieso nicht React, Vue oder XYZ...?

Ziel ist es die Seite so vielen Menschen wie möglich zugänglich zu machen.
Deshalb nutzt die Seite bisher eine Kombination von Astro-Komponenten und Markdown/MDX. Bei Astro-Komponenten handelt es sich vom Prinzip her um eine Abstraktion über HTML, die sehr nah am Web-Standard ist, im Vergleich zu vielen anderen Frameworks. 

Der Astro Syntax ähnelt JSX (Bekannt durch React) ist allerdings näher an typischem HTML dran (Bsp: React - ```className```, Astro - ```class```).

Das bedeutet, wenn jemand nur HTML beherrscht, ist es ihm trotzdem möglich, etwas zur Seite beizutragen.

Um dies weiter zu erleichtern, macht die Seite starken Gebrauch von wiederverwendbaren Komponenten. Siehe: [Komponenten](#komponenten)

Allerdings ist es in Astro auch problemlos möglich, mit bspw. React zu arbeiten. Dies funktioniert über [Islands/Inseln]("https://docs.astro.build/de/concepts/islands/").
Hierbei handelt es sich um Inseln, die in dem Projekt eingebettet werden (sinnbildlich, nicht zu verwechseln mit iframes). In diesen Islands können React, Vue.js sowie viele weitere Bibliotheken verwendet werden.

Wir versuchen, soweit wie möglich mit Astro auszukommen, da wir hierdurch zu großen Teilen auf clientseitiges JavaScript verzichten können, was die Bundle Size klein hält und die Ladezeiten schnell macht.

Für dynamische oder interaktive Inhalte wird derzeit [SolidJS]("https://www.solidjs.com/") genutzt.

Grundsätzlich bleibt es euch offen, eure Lieblingsbibliothek zu verwenden. Allerdings wäre es sinnvoll, dies auf der Startseite auf SolidJS zu beschränken, sodass nur eine Bibliothek für clientseitiges Rendering geladen werden muss.

## Entwickeln des Frontends

### Installieren der Abhängigkeiten

```pnpm install```

### Starten des Entwicklungsservers

Die folgenden Befehle müssen im /web Unterordner ausgeführt werden

```pnpm dev```

### Kompilieren

```pnpm install```

### Vorschau der kompilierten Seite

Hinweis: Hierfür muss die Seite erst kompiliert werden.

```pnpm preview```

## Komponenten

Unter ```/web/src/components``` findest du unsere Komponenten die quasi die Bausteine der Website bilden.

### Beispiel Seitenaufbau

Eine Normale Site ist so aufgebaut:

````astro
---
import Heading from "@/components/Heading/Heading.astro";

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
