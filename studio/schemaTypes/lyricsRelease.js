import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lyricsRelease',
  title: 'Texter (skiva)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Skiva / grupp',
      type: 'string',
      description: 'T.ex. "Singlar" eller skivans namn.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sortering',
      type: 'number',
      description: 'Lägre tal visas högre upp på texter-sidan.',
    }),
    defineField({
      name: 'songs',
      title: 'Låtar',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'song',
          title: 'Låt',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'Webbadress (slug)',
              type: 'slug',
              description: 'Klicka "Generate" så skapas den från titeln. Blir adressen vincentjedselius.se/texter/<slug>/',
              options: {
                source: (_doc, {parent}) => parent?.title,
                maxLength: 96,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'lyrics',
              title: 'Låttext',
              type: 'text',
              rows: 20,
              description: 'Radbrytningar och tomrader mellan verser bevaras. Lämna tomt så visas låten som "text kommer".',
            }),
          ],
          preview: {
            select: {title: 'title', lyrics: 'lyrics'},
            prepare({title, lyrics}) {
              return {title, subtitle: lyrics ? 'Text inlagd ✓' : 'Text saknas'}
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Sortering',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', songs: 'songs'},
    prepare({title, songs}) {
      const count = songs?.length ?? 0
      const withLyrics = songs?.filter((s) => s.lyrics).length ?? 0
      return {title, subtitle: `${withLyrics} av ${count} låtar har text`}
    },
  },
})
