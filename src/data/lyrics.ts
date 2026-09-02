// Fallback-data för texter-sidan, samma struktur som lyricsRelease-dokumenten i Sanity.
// Skiv- och låtnamn hämtade från Spotify 2026-07-26.

import { getLyricsReleases } from "../lib/sanity";

export interface Song {
  title: string;
  slug: string;
  lyrics: string | null;
}

export interface Release {
  title: string;
  slug?: string;
  songs: Song[];
}

// Hämtar texter från Sanity, faller tillbaka på mockdatan nedan om CMS:et
// är tomt eller inte svarar (samma mönster som index-sidan).
export async function getReleases(): Promise<Release[]> {
  try {
    const cms = await getLyricsReleases();
    if (cms?.length > 0) {
      return cms.map((release: any) => ({
        title: release.title,
        songs: (release.songs ?? []).filter((song: any) => song?.title && song?.slug),
      }));
    }
  } catch (e) {
    console.warn("Sanity fetch failed for lyrics — using fallback content.");
  }
  return releases;
}

export const releases: Release[] = [
  {
    title: "Singlar",
    slug: "singlar",
    songs: [
      {
        title: "66an",
        slug: "66an",
        lyrics: `Fem spänn för en fimp och ett handslag
hockeygrabbar kunde slåss det va allvar
om du tutar åt ett träd på 66an vaknar du kanske med någon du älskar

Skinnskalle dricker sprit utan ansvar
han är ensam söker tröst utan gensvar
om han tutar åt ett träd på 66an slipper han kanske få stryk utav farsan

Johansson drog en hoppspark i skolan
knyckte sprit ur ett skåp och så drog han
om han tutar åt ett träd på 66an blir han nog kanske förlåten av polarn

Pang pant huvet föll ner längs gatan
arvstvist det var nog för att hata han
inte långt ifrån ett träd på 66an
skippar du tutan så kommer nog satan`,
      },
      { title: "Bergslagen", slug: "bergslagen", lyrics: null },
      { title: "Ahlbäck", slug: "ahlback", lyrics: null },
      { title: "Kom Fattigdom", slug: "kom-fattigdom", lyrics: null },
      { title: "Åmänningen", slug: "amanningen", lyrics: null },
      { title: "Strömsholms kanal", slug: "stromsholms-kanal", lyrics: null },
      { title: "Akuten", slug: "akuten", lyrics: null },
    ],
  },
  {
    title: "Åka Tåg För Lånade Pengar",
    slug: "aka-tag-for-lanade-pengar",
    songs: [
      { title: "365 Dagar", slug: "365-dagar", lyrics: null },
      { title: "Krama Taggtråd", slug: "krama-taggtrad", lyrics: null },
      { title: "Kokar Mina Nudlar", slug: "kokar-mina-nudlar", lyrics: null },
      { title: "Jag Behöver Lite Andrum", slug: "jag-behover-lite-andrum", lyrics: null },
      { title: "Du", slug: "du", lyrics: null },
      { title: "Fattiglapp Forever", slug: "fattiglapp-forever", lyrics: null },
      { title: "Världens Sämsta Pojkvän", slug: "varldens-samsta-pojkvan", lyrics: null },
      { title: "Kaviarmacka Boogie-Woogie", slug: "kaviarmacka-boogie-woogie", lyrics: null },
      { title: "Till Vilket Pris", slug: "till-vilket-pris", lyrics: null },
      { title: "Ja Ba Kör", slug: "ja-ba-kor", lyrics: null },
      { title: "Miljonär", slug: "miljonar", lyrics: null },
      { title: "Mamma Knöt Min Sko", slug: "mamma-knot-min-sko", lyrics: null },
      { title: "Knoddvisan", slug: "knoddvisan", lyrics: null },
    ],
  },
  {
    title: "Första",
    slug: "forsta",
    songs: [
      { title: "Gary Moore", slug: "gary-moore", lyrics: null },
      { title: "Vilhelminaparkens kung", slug: "vilhelminaparkens-kung", lyrics: null },
      { title: "Små händer", slug: "sma-hander", lyrics: null },
      { title: "Rum 25", slug: "rum-25", lyrics: null },
    ],
  },
  {
    title: "Webcam Stories",
    slug: "webcam-stories",
    songs: [
      { title: "I'm Perfectly Stupid", slug: "im-perfectly-stupid", lyrics: null },
      { title: "Fast Food, Cigarettes and Small Things", slug: "fast-food-cigarettes-and-small-things", lyrics: null },
      { title: "Wobblin' Home Blues", slug: "wobblin-home-blues", lyrics: null },
      { title: "I Name My Songs After Girls Who I've Slept With", slug: "i-name-my-songs-after-girls", lyrics: null },
      { title: "Walkers Delight", slug: "walkers-delight", lyrics: null },
      { title: "Let's Call Her Whiskey", slug: "lets-call-her-whiskey", lyrics: null },
      { title: "Law of the Mountains", slug: "law-of-the-mountains", lyrics: null },
      { title: "Hiking Through Griefwood Valley", slug: "hiking-through-griefwood-valley", lyrics: null },
      { title: "Letter to a Close Stranger", slug: "letter-to-a-close-stranger", lyrics: null },
      { title: "Towards the Horizon", slug: "towards-the-horizon", lyrics: null },
    ],
  },
];
