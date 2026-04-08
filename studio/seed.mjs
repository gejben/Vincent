import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "w81cq9r8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// ── Tour Dates ──
const tourDates = [
  { date: "2026-01-24T19:00:00Z", venue: "Dickens", city: "Fagersta", note: "FAIKdagen" },
  { date: "2026-03-21T19:00:00Z", venue: "Makeriet", city: "Örebro" },
  { date: "2026-04-11T19:00:00Z", venue: "Rökbacken", city: "Falun" },
  { date: "2026-05-15T19:00:00Z", venue: "Våryran", city: "Fagersta" },
  { date: "2026-07-25T19:00:00Z", venue: "Dan Andersson-veckan", city: "Ludvika" },
  { date: "2026-07-30T19:00:00Z", venue: "TBA", city: "" },
  { date: "2026-07-31T19:00:00Z", venue: "John Scotts", city: "Kopparberg" },
  { date: "2026-08-01T19:00:00Z", venue: "Borgärdets Café", city: "Svärdsjö" },
  { date: "2026-08-02T19:00:00Z", venue: "TBA", city: "" },
  { date: "2026-08-03T19:00:00Z", venue: "TBA", city: "" },
  { date: "2026-08-04T19:00:00Z", venue: "Västervåla kyrka", city: "Västervåla" },
];

// ── Discography ──
const releases = [
  { title: "66AN", spotifyUrl: "https://open.spotify.com/track/6HYADUN0TCZmzuymd8wvwJ" },
  { title: "Bergslagen", spotifyUrl: "https://open.spotify.com/track/0w7uWvMi9KUHfFf00Gtj08" },
  { title: "Ahlbäck", spotifyUrl: "https://open.spotify.com/track/7omQZAr6KZoVrqRw1guy2b" },
  { title: "Kom Fattigdom", spotifyUrl: "https://open.spotify.com/track/2M1C1UgDBbCUbPdesgJJCg" },
  { title: "Åmänningen", spotifyUrl: "https://open.spotify.com/track/4HwCeYaGEoDLfjujuYXrS8" },
  { title: "Åka tåg för lånade pengar", spotifyUrl: "https://open.spotify.com/album/72V3S6286fdOIB3ykPP9Ff" },
  { title: "Första", spotifyUrl: "https://open.spotify.com/album/4KIdygXmd2xm5vsuAq8Jq7" },
  { title: "Webcam Stories", spotifyUrl: "https://open.spotify.com/album/0tdwzfPhnhTWz3NHXLXTQZ" },
];

// ── Biography ──
const biography = [
  {
    _type: "block",
    _key: "bio1",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "bio1s",
        text: "Där den amerikanska södern har sina vidsträckta prärier, har Vincent Jedselius Bergslagens spruckna asfalt och tystnaden från nedlagda fabriker. Under nästan 15 år som soloartist har han karvat ut en helt egen nisch i det svenska musiklandskapet: en röst för det glömda rostbältet.",
        marks: [],
      },
    ],
    markDefs: [],
  },
  {
    _type: "block",
    _key: "bio2",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "bio2s",
        text: "Att kalla Vincent Jedselius för en countryartist är en sanning med modifikation. Hans sound vilar lika tungt i en tidlös blues-anda som i outlaw-genrens råa uppriktighet. Han byter ut cowboyhatten mot arbetshandskar och Nashville-glamouren mot en kantnött, svensk realism. Det är musik som doftar utflyttning, bryggkaffe och fuktig barrskog. En röst för de platser som sällan får plats i storstädernas lite glättigare popmaskineri.",
        marks: [],
      },
    ],
    markDefs: [],
  },
  {
    _type: "block",
    _key: "bio3",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "bio3s",
        text: "Med en karriär som sträcker sig över ett decennium har Vincent etablerat sig som en av de mest autentiska rösterna inom svensk americana. Genom åren har han byggt ett gediget CV på vägarna och spelat på allt från pizzerior i Bergslagen till fullstora festivalscener ute i landet.",
        marks: [],
      },
    ],
    markDefs: [],
  },
  {
    _type: "block",
    _key: "bio4",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "bio4s",
        text: "Hans artisteri vilar på en unik kontrastverkan. Genom träffsäker satir och svart humor skildrar han vardagen i våra svenska småstäder. Men under ytan av lokala referenser bultar bluesens bottenlösa allvar om stolthet, slit och den melankoli som uppstår när industrins hammarslag tystnar.",
        marks: [],
      },
    ],
    markDefs: [],
  },
  {
    _type: "block",
    _key: "bio5",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "bio5s",
        text: "Vincent Jedselius är inte bara en musiker; han är en krönikör över ett Sverige som ofta glöms bort, levererat med en röst som bär på både tyngden av många års erfarenhet och en orubblig kärlek till ursprunget.",
        marks: [],
      },
    ],
    markDefs: [],
  },
];

async function seed() {
  console.log("Seeding tour dates...");
  for (const gig of tourDates) {
    await client.create({
      _type: "tourDate",
      date: gig.date,
      venue: gig.venue,
      city: gig.city,
      isSoldOut: false,
      status: "Upcoming",
    });
    console.log(`  ✓ ${gig.venue}, ${gig.city || "TBA"}`);
  }

  console.log("\nSeeding releases...");
  for (const release of releases) {
    await client.create({
      _type: "discography",
      title: release.title,
      spotifyUrl: release.spotifyUrl,
    });
    console.log(`  ✓ ${release.title}`);
  }

  console.log("\nSeeding site settings...");
  await client.create({
    _type: "siteSettings",
    biography,
    contactEmail: "booking@bridgefieldbookings.se",
  });
  console.log("  ✓ Biography & contact email");

  console.log("\n✅ Done! All content is now in Sanity.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
