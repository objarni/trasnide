// ============================================================
// DATA — Edit this array with real info for each image.
// Month should be a month name in the creation order.
// Use trim() after template literals to strip leading/trailing whitespace.
// ============================================================
function trim(s) {
    return typeof s === "string" ? s.trim() : s;
}

const items = [
    {
        number: 1,
        month: "September 2025",
        name: "Obligatorisk smörkniv",
        description: trim(`Den obligatoriska smökniven!
        Liksom i skolans träslöjdsal för nästan ett halvt sekel sedan,
        täljde jag denna smörkniv som övning på de grepp vi lärde oss
        på helgkursen denna vackra september 2025. Valde 'chubby style',
        bra grepp, robust och kanske lite smågullig? Kul oavsett!`),
    },
    {
        number: 2,
        month: "September 2025",
        name: "Marmeladsked",
        description: trim(`Rekommenderade projekt nr 2 på kursen var en marmeladsked.
        Detta var pilligare, helt klart, man behövde vara försiktiga
        och noggrannare. Lite nöjd med att jag fick till små onödiga
        detaljer i form av "bollar" på skaftet!`),
    },
    {
        number: 3,
        month: "December 2025",
        name: "Skohorn",
        description: trim(`Detta skohorn var första julklappen jag tillverkade. Hade en
        något längre förlaga att utgå ifrån, men det blev en hel del tälj-prova-tälj-cykler
        för att få den tillräckligt rund och bekväm. Det var också projektet som gjorde
        att jag införskaffade en skedkniv.`),
    },
    {
        number: 4,
        month: "May 2025",
        name: "Saknas — fyll i namn",
        description: "Beskrivningen av detta verk. Berätta vad det är, hur det skapades och vad det betyder för dig.",
    },
];
