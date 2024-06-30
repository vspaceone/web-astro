import vspaceoneGemeinschaft from "../../public/pic/vspaceone_gemeinschaft.jpg"
import vspaceonePrusaMk3s from "../../public/pic/vspaceone_prusa_mk3s_small.jpg";
import vspaceoneBigPsu from "../../public/pic/vspaceone_big_psu_small.jpg";
import vspaceoneDrawerWall from "../../public/pic/vspaceone_drawer_wall_small.jpg";
import vspaceoneHolzUndMetall from "../../public/pic/vspaceone_holzundmetall.jpg";
import vspaceoneMaschinenraum from "../../public/pic/vspaceone_maschinenraum.jpg";


export type InfoSlide = {
    title: string;
    text: string;
    image: ImageMetadata;
    imageAlt: string;
};

export const infoSlides: Array<InfoSlide> = [
    {
        title: "Gemeinsam zum Ziel",
        text: "Sich gegenseitig motivieren, inspirieren, helfen und voneinander lernen. Manches macht gemeinsam einfach mehr Spaß!",
        image: vspaceoneGemeinschaft,
        imageAlt: "Ein verschwommenes Bild auf dem sich eine Gruppe Menschen im vspace.one erkennen lässt."
    },
    {
        title: "3D Druck",
        text: "Unser neuer Prusa i3 MK3s liefert dank zahlreicher Voreinstellungen und ausgeklügelter Features selbst nach kurzen Einweisungen in schnellster Zeit zu Ergebnissen die sich sehen lassen können.",
        image: vspaceonePrusaMk3s,
        imageAlt: "Ein Bild des Prusa i3 MK3s 3D-Druckers"
    },
    {
        title: "Elektronik",
        text: "Der Elektronikarbeitsplatz lädt zum Hacken ein. Stets zur Hand sind Lötkolben, Heißluftstation, Multimeter, Labornetzteile, digitales Oszilloskop sowie ein Haufen Zubehör und natürlich Kabel.",
        image: vspaceoneBigPsu,
        imageAlt: "Das Bild zeigt ein großes Netzteil"
    },
    {
        title: "Reparatur",
        text: "Eine Wand voll mit sortierten Elektronikkomponenten bietet die Qual der Wahl von üblicherweise benötigen Bauteile wie Widerstände oder Kondensatoren.",
        image: vspaceoneDrawerWall,
        imageAlt: "Das Bild zeigt eine Wand mit zahlreichen Elektronikkomponenten"
    },
    {
        title: "Holz und Metall",
        text: "Unsere noch nicht allzu große, aber ständig wachsende, Ausstattung an Werkzeug und Maschinen steht jederzeit für große und kleine Projekte in unseren Räumen bereit.",
        image: vspaceoneHolzUndMetall,
        imageAlt: "Das Bild zeigt einen Werkraum im vspace.one"
    },
    {
        title: "Ausstattung",
        text: "Wir haben drei moderne Räume. In der Brücke stehen bequeme Sofas, ein Beamer und ein Kühlschrank. Im Maschinenraum, kann an dank unserer vieler Maschinen an größeren Projekten gearbeitet werden. Das Labor ist mit einem großzügigen Elektronikarbeitsplatz ausgestattet.",
        image: vspaceoneMaschinenraum,
        imageAlt: "Das Bild zeigt den Maschinenraum des vspace.one"
    },
];
