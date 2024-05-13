import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const publicKey = '1696a8618d854e1bf4293311c9afd5f7';
        const hash = 'a0a8675b9fb284af5358ab2c89d1a7ac';
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setCharacters(response.data.data.results);
            })
    }, []);

    return (
        <div className='character-list'>
            <NavBar />
            <h2>Marvel Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                            <span>{character.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;

