import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'discography',
  title: 'Släpp',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Releasedatum',
      type: 'date',
    }),
    defineField({
      name: 'coverArt',
      title: 'Omslag',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify-länk',
      type: 'url',
    }),
    defineField({
      name: 'appleMusicUrl',
      title: 'Apple Music-länk',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube-länk',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: 'Releasedatum, fallande',
      name: 'releaseDateDesc',
      by: [{field: 'releaseDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'coverArt',
    },
    prepare({title, date, media}) {
      const year = date ? new Date(date).getFullYear() : ''
      return {
        title,
        subtitle: year ? `${year}` : '',
        media,
      }
    },
  },
})
