export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton: only one document of this type should exist
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "biography",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "pressImages",
      title: "Press Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "High-resolution images for press downloads.",
    },
  ],
};
