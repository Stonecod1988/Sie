import React, {useEffect, useState} from 'react'
import axios from "axios";


const useList = ((url, type) => {
    const [userList, setUserList] = useState([]);
    useEffect(async () => {
        let response = await axios.get(url)
            .then(res => res);
        if (response.status === 200) {
            const List = response.data.reduce((List, currentUser) => {
                let list = {};
                if (type === 'user') {
                    list = {
                        "label": currentUser.username,
                        "value": currentUser.id
                    }
                } else {
                    list = {
                        "label": currentUser.title,
                        "value": currentUser.id
                    }
                }

                List = [...List, list];
                return List
            }, []);
            setUserList(userList => userList = List)
        }
    }, [url, type]);

    return [
        userList
    ]
});
export default useList