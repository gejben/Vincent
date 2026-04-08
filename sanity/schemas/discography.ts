export default {
  name: "discography",
  title: "Discography",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "releaseDate",
      title: "Release Date",
      type: "date",
    },
    {
      name: "coverArt",
      title: "Cover Art",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "spotifyUrl",
      title: "Spotify URL",
      type: "url",
    },
    {
      name: "appleMusicUrl",
      title: "Apple Music URL",
      type: "url",
    },
    {
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    },
  ],
  orderings: [
    {
      title: "Release Date, Descending",
      name: "releaseDateDesc",
      by: [{ field: "releaseDate", direction: "desc" }],
    },
  ],
};
