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
  ],
})
