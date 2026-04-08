import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tourDate',
  title: 'Spelning',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Plats/Scen',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Stad',
      type: 'string',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Biljettlänk',
      type: 'url',
    }),
    defineField({
      name: 'isSoldOut',
      title: 'Slutsålt',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Kommande', value: 'Upcoming'},
          {title: 'Inställt', value: 'Cancelled'},
          {title: 'Uppskjutet', value: 'Postponed'},
        ],
      },
      initialValue: 'Upcoming',
    }),
  ],
  orderings: [
    {
      title: 'Datum, stigande',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'venue',
      subtitle: 'city',
      date: 'date',
    },
    prepare({title, subtitle, date}) {
      const d = date ? new Date(date).toLocaleDateString('sv-SE') : ''
      return {
        title: `${title || 'TBA'}`,
        subtitle: `${d} — ${subtitle || ''}`,
      }
    },
  },
})
