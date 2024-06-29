# vspace.one - Website

Dies ist das Repository mit dem Quellcode der vspace.one Webseite.

## Tech-Stack

Das Projekt nutzt als Basis die ["Astro"]("https://astro.build") Framework.

Als Laufzeit empfehlen wir ["Bun"]("https://bun.sh"), es sollte allerdings auch möglich sein Node.js zu verwenden.

### Wieso nicht React, Vue oder XYZ...?

Ziel ist es die Seite vielen Menschen zugänglich zu machen.
Bisher nutzt die Seite ausschließlich Astro Komponenten, welche vom Prinzip her eine Abstraktion über HTML sind, und sehr nah am Web-Standard im Vergleich zu vielen anderen Frameworks.

Allerdings ist es in Astro auch problemlos möglich mit bspw. React zu arbeiten. Dies funktioniert über ["Islands/Inseln"]("https://docs.astro.build/de/concepts/islands/").
Hierbei handelt es sich um Inseln die in dem Projekt eingebetteten werden (Sinnbildlich, nicht zu verwechseln mit iframes). In diesen Islands können React, Vue.js sowie viele weitere libraries verwendet werden.

Ziel ist es soweit wie möglich mit Astro auszukommen, da wir hierdurch zu großen Teilen auf Client-Seitiges JavaScript verzichten können, was die Bundle Size klein hält und die Ladezeiten schnell.

Grundsätzlich bleibt es euch aber offen eure Lieblings-Library zu verwenden, solange es nicht auf der Startseite ist.

## Entwickeln des frontends

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