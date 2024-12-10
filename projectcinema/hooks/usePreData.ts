import React, {useEffect, useState} from 'react'

import { Apiurl } from '@/redux/services/tmdb_Api/tmdb_API';
import { ACCES_TOKEN } from '@/secret/accesToken';

function usePreData() {
    const [lastMovie, setLastMovie] = useState({});
    const [errorLastMovie, setErrorLastMovie] = useState('');
    const [loadingLastMovie, setLoadingLastMovie] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoadingLastMovie(true);
            try{
                const response = await fetch(`${Apiurl}/latest`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${ACCES_TOKEN}`
                    }
                });
                const data = await response.json();
                setLastMovie(data);
                //console.log(data);
            } catch (error){
                setErrorLastMovie('Error loading movie');
            }
            finally {
                setLoadingLastMovie(false);
            }
        };
        
        fetchData();
    }, []);

    return {
        lastMovie,
        errorLastMovie,
        loadingLastMovie,
    }
}

export {usePreData}
