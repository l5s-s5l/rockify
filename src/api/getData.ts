import axios from "axios";

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

type DataType = "artists" | "songs";

export const getData = async (type: DataType): Promise<Artist[] | Song[]> => {
  try {
    const { data } = await axios.get(`http://localhost:3004/${type}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
