import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Inställningar',
  type: 'document',
  fields: [
    defineField({
      name: 'biography',
      title: 'Biografi',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero-bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt-email',
      type: 'string',
    }),
    defineField({
      name: 'pressImages',
      title: 'Pressbilder',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Högupplösta bilder för press.',
    }),
    defineField({
      name: 'documentaryVideo',
      title: 'Dokumentärvideo (Länk till YouTube)',
      type: 'url',
      description: 'Ditt huvudklipp (tex. Till Bergslagen) under "Om"-sektionen.',
    }),
    defineField({
      name: 'youtubeVideos',
      title: 'Utvalda YouTube-klipp (Titta-sektionen)',
      type: 'array',
      description: 'Lägg till de videor som ska synas i ett rutnät under "Titta".',
      of: [
        {
          type: 'object',
          name: 'youtubeClip',
          title: 'YouTube-klipp',
          fields: [
            {name: 'url', title: 'YouTube-länk', type: 'url'},
            {name: 'title', title: 'Titel (Videonamn)', type: 'string'},
            {name: 'description', title: 'Kort beskrivning (t.ex. Live i Halvarsviken)', type: 'string'}
          ],
        },
      ],
    }),
  ],
})
