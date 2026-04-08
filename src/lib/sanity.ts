import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

// Only create a real client if a project ID is configured
const isConfigured = projectId && projectId !== "YOUR_PROJECT_ID";

export const client: SanityClient | null = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: any) {
  if (!builder) return { width: () => ({ height: () => ({ format: () => ({ url: () => "" }) }) }) } as any;
  return builder.image(source);
}

// ── GROQ Queries ──

export async function getTourDates() {
  if (!client) return [];
  return client.fetch(`
    *[_type == "tourDate" && date >= now()] | order(date asc) {
      _id,
      date,
      venue,
      city,
      ticketUrl,
      isSoldOut,
      status
    }
  `);
}

export async function getDiscography() {
  if (!client) return [];
  return client.fetch(`
    *[_type == "discography"] | order(releaseDate desc) {
      _id,
      title,
      releaseDate,
      coverArt,
      spotifyUrl,
      appleMusicUrl,
      youtubeUrl
    }
  `);
}

export async function getSiteSettings() {
  if (!client) return null;
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      biography,
      heroImage,
      contactEmail,
      pressImages,
      documentaryVideo,
      youtubeVideos
    }
  `);
}
