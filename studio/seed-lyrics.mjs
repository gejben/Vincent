// Lägger in texter-releaserna i Sanity. Körs från studio-mappen med:
//   npx sanity exec seed-lyrics.mjs --with-user-token
// Använder createOrReplace med fasta _id:n, så scriptet kan köras om utan dubbletter
// — men observera att det då skriver över ev. ändringar gjorda i Studio.
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2024-01-01'})

const song = (title, slug, lyrics = null) => ({
  _type: 'song',
  _key: slug,
  title,
  slug: {_type: 'slug', current: slug},
  ...(lyrics ? {lyrics} : {}),
})

const lyrics66an = `Fem spänn för en fimp och ett handslag
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
skippar du tutan så kommer nog satan`

const releases = [
  {
    _id: 'lyricsRelease-singlar',
    title: 'Singlar',
    sortOrder: 1,
    songs: [
      song('66an', '66an', lyrics66an),
      song('Bergslagen', 'bergslagen'),
      song('Ahlbäck', 'ahlback'),
      song('Kom Fattigdom', 'kom-fattigdom'),
      song('Åmänningen', 'amanningen'),
      song('Strömsholms kanal', 'stromsholms-kanal'),
      song('Akuten', 'akuten'),
    ],
  },
  {
    _id: 'lyricsRelease-aka-tag-for-lanade-pengar',
    title: 'Åka Tåg För Lånade Pengar',
    sortOrder: 2,
    songs: [
      song('365 Dagar', '365-dagar'),
      song('Krama Taggtråd', 'krama-taggtrad'),
      song('Kokar Mina Nudlar', 'kokar-mina-nudlar'),
      song('Jag Behöver Lite Andrum', 'jag-behover-lite-andrum'),
      song('Du', 'du'),
      song('Fattiglapp Forever', 'fattiglapp-forever'),
      song('Världens Sämsta Pojkvän', 'varldens-samsta-pojkvan'),
      song('Kaviarmacka Boogie-Woogie', 'kaviarmacka-boogie-woogie'),
      song('Till Vilket Pris', 'till-vilket-pris'),
      song('Ja Ba Kör', 'ja-ba-kor'),
      song('Miljonär', 'miljonar'),
      song('Mamma Knöt Min Sko', 'mamma-knot-min-sko'),
      song('Knoddvisan', 'knoddvisan'),
    ],
  },
  {
    _id: 'lyricsRelease-forsta',
    title: 'Första',
    sortOrder: 3,
    songs: [
      song('Gary Moore', 'gary-moore'),
      song('Vilhelminaparkens kung', 'vilhelminaparkens-kung'),
      song('Små händer', 'sma-hander'),
      song('Rum 25', 'rum-25'),
    ],
  },
  {
    _id: 'lyricsRelease-webcam-stories',
    title: 'Webcam Stories',
    sortOrder: 4,
    songs: [
      song("I'm Perfectly Stupid", 'im-perfectly-stupid'),
      song('Fast Food, Cigarettes and Small Things', 'fast-food-cigarettes-and-small-things'),
      song("Wobblin' Home Blues", 'wobblin-home-blues'),
      song("I Name My Songs After Girls Who I've Slept With", 'i-name-my-songs-after-girls'),
      song('Walkers Delight', 'walkers-delight'),
      song("Let's Call Her Whiskey", 'lets-call-her-whiskey'),
      song('Law of the Mountains', 'law-of-the-mountains'),
      song('Hiking Through Griefwood Valley', 'hiking-through-griefwood-valley'),
      song('Letter to a Close Stranger', 'letter-to-a-close-stranger'),
      song('Towards the Horizon', 'towards-the-horizon'),
    ],
  },
]

const tx = client.transaction()
for (const release of releases) {
  tx.createOrReplace({_type: 'lyricsRelease', ...release})
}
const result = await tx.commit()
console.log(`Klart! ${result.results.length} texter-releaser inlagda/uppdaterade.`)
