import { useEffect, useState } from "react";
import axios from "axios";
import { Artist, Song } from "types";

interface FavouriteData {
  type: "artists" | "songs";
  query?: string;
}

//TODO: What is the convention to name return types
interface ReturnState {
  isLoading: boolean;
  data: Song[] | Artist[] | null;
  error: boolean;
}

export default function useFetchData(props: FavouriteData): ReturnState {
  //TODO: In regarding to seperation of concerns, do we need to remove props from here and implemetend in a different way?
  const { type, query } = props;

  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: false,
  });

  const fetchUrl = query
    ? `http://localhost:3005/${type}?artist=${query}`
    : `http://localhost:3005/${type}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(fetchUrl);
        if (data) {
          setState({ data: data, error: false, isLoading: false });
        }
      } catch (error) {
        console.error(
          `something went wrong while fetching the content: ${error}`
        );
        setState({ data: null, error: true, isLoading: false });
      }
    };

    fetchData();
  }, [query, type]);

  return state;
}
