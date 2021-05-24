import React, { useEffect, useState } from "react";
import List from "components/List"
import { getData, Song } from "api/getData";
import { useParams } from "react-router-dom";
import { LIST_TYPE, CTA_EVENT } from "const";

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

    return <List event={CTA_EVENT.ADD_TO_LIST} type={LIST_TYPE.CTA} data={data} />
}

export default Track;