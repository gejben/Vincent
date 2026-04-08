export default {
  name: "tourDate",
  title: "Tour Date",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "venue",
      title: "Venue",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
    },
    {
      name: "isSoldOut",
      title: "Sold Out",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Upcoming", value: "Upcoming" },
          { title: "Cancelled", value: "Cancelled" },
          { title: "Postponed", value: "Postponed" },
        ],
      },
      initialValue: "Upcoming",
    },
  ],
  orderings: [
    {
      title: "Date, Ascending",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
