import { Album } from "./utils/mockdata";

export interface User {
    id: number;
    username: string;
    password: string;
    role: 'user' | 'admin';
  }
  
  export interface Song {
    id: number;
    title: string;
    artist: string;
    genre: string;
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => boolean;
    logout: () => void;
  }
  
  export interface MusicContextType {
    albums: Album[];
    addSong: (song: Song, albumId: string) => void;
    removeSong: (id: number) => void;
    addAlbum:(album:Album) => void
  }
  