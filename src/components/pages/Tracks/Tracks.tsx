import React, { useEffect, useState } from "react";
import List from "components/List"
import { getData, Song } from "api/getData";
import { useParams } from "react-router-dom";
import { CTA } from "const";

function Track(): JSX.Element {
    const [data, setData] = useState<Song[] | null>(null);
    const { artist } = useParams<{ artist: string }>();
    const getTracks = async () => {
        const songs = await getData("songs", artist);
        setData(songs);
    };

    useEffect(() => {
        getTracks();
    }, []);

    return <List type={CTA} data={data} />
}

export default Track;