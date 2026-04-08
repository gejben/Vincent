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
        text: "Där den amerikanska södern har sina prärier, har Vincent Jedselius Bergslagens spruckna asfalt och tystnaden från nedlagda fabriker. I mer än ett decennium har han karvat ut en egen nisch i det svenska musiklandskapet som en röst för bruksorterna.",
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
        text: "Att kalla Vincent för en renodlad countryartist är en förenkling. Hans sound vilar lika mycket i bluesens enkelhet som i en rå, svensk realism. Här byts Nashville-glamouren ut mot doften av bryggkaffe och fuktig barrskog – musik för de platser som sällan får utrymme i storstädernas popmaskineri.",
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
        text: "Med många mil på vägarna har han byggt sin erfarenhet på allt från lokala pizzerior till festivalscener. Genom träffsäker humor och satir skildrar han vardagen i småstaden, men under ytan finns ett allvar om slit, stolthet och den melankoli som dröjer kvar när industrin tystnat.",
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
        text: "Vincent Jedselius sjunger om det Sverige som ofta glöms bort, levererat med en ärlig röst och en tydlig kärlek till rötterna.",
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
    documentaryVideo: "https://www.youtube.com/embed/B6q9y2d-IBc",
    youtubeVideos: [
      {
        _key: "vid1",
        url: "https://www.youtube.com/embed/ILoNFcOGLMY",
        title: "Kom Fattigdom",
        description: "Bildmaterial från Rune Lindströms film \"Fagersta: Stålets och arbetets stad.\""
      },
      {
        _key: "vid2",
        url: "https://www.youtube.com/embed/YxQ7WmdM3XA",
        title: "\"66AN\"",
        description: "Live från Clarion Örebro"
      },
      {
        _key: "vid3",
        url: "https://www.youtube.com/embed/Kpg47xr6sOw",
        title: "\"Strömsholms Kanal\"",
        description: "Live i Halvarsviken"
      }
    ]
  });
  console.log("  ✓ Biography, contact email & YouTube videos");

  console.log("\n✅ Done! All content is now in Sanity.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
