import {useEffect, useState} from "react";
import {getAlbums} from "../../services/Service";
import AlbumComponent from "./AlbumComponent";

function AlbumsComponent() {
    let [albums, setAlbums] = useState([]);
    useEffect(()=>{
        getAlbums().then(value => setAlbums([...value]))
    },[])
    return (
        <div>
            {
                albums.map(value=> <AlbumComponent item={value} key={value.id}/>)
            }

        </div>
    );
}

export default AlbumsComponent;