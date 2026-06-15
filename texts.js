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
        month: "December 2025",
        name: "Ställ för träsnidarsats",
        description: trim(`Slöjdläraren hade som måtto att man ska
        bygga sina egna verktyg så gott man kunde, kanske inte kniv då
        men klubba, huggstubbe, eller varför inte ställ för träsnidarsats.
        Kul miniprojekt över jul, fick verktygen av fina dottern i julklapp`),
    },
    {
        number: 5,
        month: "Januari 2025",
        name: "Fejkkniv",
        description: trim(`
        Hade lite furu (tall) brasvirke över, och fick för mig att
        nörda till det lite och tillverka an look-alike till täljkniven
        själv. Inte superlikt, men i handen känns den, förutom vikten/balansen
        väldigt likt faktiskt!
        `),
    },
    {
        number: 6,
        month: "Mars-April 2025",
        name: "Saltkar",
        description: trim(`
        Idén att bygga ett saltkar kom ifrån irritation med de vanliga
        plastkaren man köper i affären, som antingen saltar väldigt kraftigt,
        eller med sådana pyttehål att de lätt korkar igen över en kokande
        pasta t.ex.
        Så jag tänkte "detta är ju ett kul projekt" och satte igång!
        Helt klart svårast hittills, dels att gröpa ur karet ordentligt
        (gjordes med en mix av borrstorlekar och ett dremmelset till
        skruvdragaren) men framförallt att tillverka en icke-läckande
        lucka. Var på väg att ge upp projektet pga svårigheten att tillverka
        en tät lucka. En dag kom jag på det: magneter! Det var efter försök
        med både skumgummilucka inprägad i det oregelbunda hålet, pilligt och
        otätt, som tog mig till idé med gummiband som drog igen en övertäckande
        botten, och att magneter kan ses som "osynliga gummiband". Detta
        fungerar utmärkt, och saltkaren används numera dagligen i hemmet.
        `),
    },
];
