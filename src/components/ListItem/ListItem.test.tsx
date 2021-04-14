import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ListItem from "./ListItem";

describe("ListItem", () => {
  const song = {
    id: 123,
    name: "mock-name",
    artist: "mock-artist",
    shortname: "mock-shortname",
    bpm: 123,
    duration: 123,
    genre: "mock-genre",
    spotifyId: "mock-spotify-id",
    album: "mock-album",
  };

  const artist = {
    id: 123,
    name: "mock-name",
  };

  it("should render", () => {
    render(<ListItem listItem={artist} type="song" />);
  });

  it("Should render a link list item ", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <ListItem listItem={artist} type="artist" />
      </Router>
    );

    expect(getByText(artist.name)).toBeInTheDocument();
    expect(getByTestId("link-list-item")).toBeInTheDocument();
  });

  it("Should render a CTA list item ", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <ListItem listItem={song} type="song" />
      </Router>
    );

    expect(getByText(song.name)).toBeInTheDocument();
    expect(getByTestId("cta-list-item")).toBeInTheDocument();
  });
});
