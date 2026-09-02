export default {
  name: "lyricsRelease",
  title: "Texter (skiva)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Skiva / grupp",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sortOrder",
      title: "Sortering",
      type: "number",
      description: "Lägre tal visas högre upp på texter-sidan.",
    },
    {
      name: "songs",
      title: "Låtar",
      type: "array",
      of: [
        {
          type: "object",
          name: "song",
          title: "Låt",
          fields: [
            {
              name: "title",
              title: "Titel",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "slug",
              title: "Webbadress (slug)",
              type: "slug",
              options: {
                source: (_doc: any, { parent }: any) => parent?.title,
                maxLength: 96,
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "lyrics",
              title: "Låttext",
              type: "text",
              rows: 20,
            },
          ],
        },
      ],
    },
  ],
};
