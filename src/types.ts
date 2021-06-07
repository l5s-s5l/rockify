//TODO: check how d.ts works and if that is needed here

export interface Artist {
  id?: number;
  name?: string;
}

export interface Song {
  id?: number;
  name?: string;
  year?: number;
  artist?: string;
  shortname?: string;
  bpm?: number;
  duration?: number;
  genre?: string;
  spotifyId?: string;
  album?: string;
}
