import { useMemo } from "react";
import { useMusic } from "@/context/MusicContext";
import { Song } from "@/types";

// Define the return type for grouped songs
type GroupedSongs = Record<string, Song[]>;

export const useFilteredSongs = (filter: string, sortBy: keyof Song, groupBy: keyof Song | ""): GroupedSongs => {
  const { albums } = useMusic();

  const tracks = useMemo(() => {
    return albums.flatMap(album =>
      album.tracks.map(track => ({
        ...track,
        albumTitle: album.title,
        artist: album.artist,
        coverUrl: album.coverUrl
      }))
    );
  }, [albums]);

  const filteredTracks = useMemo(() => {
    const lowerFilter = filter.toLowerCase();
    return tracks.filter(track =>
      track.title.toLowerCase().includes(lowerFilter) ||
      track.artist.toLowerCase().includes(lowerFilter) ||
      track.albumTitle.toLowerCase().includes(lowerFilter)
    );
  }, [tracks, filter]);

  const sortedTracks = useMemo(() => {
    return [...filteredTracks].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [filteredTracks, sortBy]);

  const groupedTracks = useMemo(() => {
    if (!groupBy) return { 'All Tracks': sortedTracks };
    return sortedTracks.reduce((groups, track) => {
      const groupKey = track[groupBy];
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(track);
      return groups;
    }, {});
  }, [sortedTracks, groupBy]);

  return groupedTracks;
};
