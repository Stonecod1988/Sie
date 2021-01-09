import React, {useCallback, useRef, useState} from 'react'
import useList from "../Hooks/useFetch";
import Trace from "./Trace";
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedSelect from "../Containers/LinkedSelect";
import axios from "axios";


const ThemaProg = () => {
    const [userList] = useList('https://jsonplaceholder.typicode.com/users', 'user');
    const [albumList, setAlbumList] = useState(null);
    const [photoList, setPhotoList] = useState(null);
    const [selectOption, setSelectOption] = useState(null);
    const [selectOption2, setSelectOption2] = useState(null);
    const [selectOption3] = useState(null);
    const inputSelectProg = useRef(null);
    const inputSelectThema = useRef(null);
    const inputSelectProjet = useRef(null);
    const getAlbum = useCallback(async (id) => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + id)
            .then(res => res);
        if (response.status === 200) {
            console.log(response);
            const List = response.data.reduce((List, currentAlbum) => {
                let list = {
                    "label": currentAlbum.title,
                    "value": currentAlbum.id
                };
                return List = [...List, list]
            }, []);
            setAlbumList(albumList => albumList = List)
        }
    }, [selectOption]);
    const getPhoto = useCallback(async (id) => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
            .then(res => res);
        if (response.status === 200) {
            const List = response.data.reduce((List, currentPhoto) => {
                let list = {
                    "label": currentPhoto.title,
                    "value": currentPhoto.id
                };
                return List = [...List, list]
            }, []);
            setPhotoList(photoList => photoList = List)
        }
    }, [selectOption2]);
    const loadSelect = (e) => {
        setSelectOption(selectOption => selectOption = e)
        // getAlbum(e.value)

    };
    const loadSelect2 = (e) => {
        setSelectOption2(e);
        getPhoto(e.value)

    };
    const loadSelect3 = (e) => {
        setSelectOption(e);
        console.log('je viens de selectionner un element du select des projets')

    };

    return (
        <div style={{marginTop: "100px", height: '500px'}}>
            <Trace/>
            <LinkedSelect data={userList} message="Selectionnez un programme" choix={selectOption}
                          handleSelectChange={(loadSelect)} ref={inputSelectProg}/>
            {albumList &&
            <LinkedSelect message="Selectionnez une thématique" data={albumList} selectOption={selectOption2}
                          name="album" id="album" handleSelectChange={loadSelect2} ref={inputSelectThema}/>}
            {photoList && <LinkedSelect message="Selectionnez un Projet" data={photoList} on={selectOption3}
                                        handleSelectChange={loadSelect3} ref={inputSelectProjet}/>}
        </div>
    )
};

export default ThemaProg