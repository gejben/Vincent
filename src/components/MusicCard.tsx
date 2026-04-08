import { Music, Play, ExternalLink } from "lucide-react";
import { urlFor } from "../lib/sanity";

interface Album {
  _id: string;
  title: string;
  releaseDate: string;
  coverArt: any;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
}

export default function MusicCard({ album }: { album: Album }) {
  const year = album.releaseDate
    ? new Date(album.releaseDate).getFullYear()
    : "";

  const coverUrl = album.coverArt
    ? urlFor(album.coverArt).width(400).height(400).format("webp").url()
    : null;

  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-charcoal-800">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`${album.title} cover art`}
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-800">
            <Music className="w-16 h-16 text-charcoal-600" />
          </div>
        )}

        {/* Hover overlay with streaming links */}
        <div className="absolute inset-0 bg-charcoal-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
          {album.spotifyUrl && (
            <a
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lyssna på ${album.title} på Spotify`}
              className="text-forest-500 hover:text-forest-400 transition-colors"
            >
              <Play className="w-8 h-8" />
            </a>
          )}
          {album.appleMusicUrl && (
            <a
              href={album.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lyssna på ${album.title} på Apple Music`}
              className="text-earth-400 hover:text-earth-300 transition-colors"
            >
              <Music className="w-8 h-8" />
            </a>
          )}
          {album.youtubeUrl && (
            <a
              href={album.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Se ${album.title} på YouTube`}
              className="text-rust hover:text-earth-500 transition-colors"
            >
              <ExternalLink className="w-8 h-8" />
            </a>
          )}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-heading text-lg font-semibold text-bone-100">
          {album.title}
        </h3>
        {year && <p className="text-sm text-charcoal-600">{year}</p>}
      </div>
    </div>
  );
}
