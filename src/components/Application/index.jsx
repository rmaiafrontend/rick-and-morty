import { useEffect, useState } from "react";
import axios from "axios";

import { CardCharacter } from "../CardCharacter";

import IconLoader from "../../assets/loader.gif";

import { ContainerApp, HeaderApp, ContentCharacters, Loader} from "./styles";


export function Application() {

    const [characters, setcharacters] = useState([])
    const [page, setPage] = useState(1);
    const [countPage, setcountPage] = useState('');
    const [qtdCharecters, setqtdCharacters] = useState('');
    const [isLoader, setLoader] = useState(true);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            const array = [...characters, ...response.data.results]
            setcharacters(array)
            setcountPage(response.data.info.pages)
            setqtdCharacters(response.data.info.count)
            setLoader(false)
        })
    }, [page])


    return (
        <>
            {
                isLoader && (
                    <Loader>
                        <img src={IconLoader} alt="" />
                    </Loader>
                    
                )
            }      
        
        <ContainerApp>
            <HeaderApp>
                <h1>Ricky and Morty</h1>
                <span>{`N de Personangens: ${qtdCharecters}`}</span>
            </HeaderApp>
            <ContentCharacters>
                <div>
                    {
                        characters && characters.map(({image, name, species, gender}) => {
                            return ( 
                                <CardCharacter
                                image= {image} 
                                name= {name}
                                genre= {gender}
                                specie= {species}
                            />
                            )           
                        })        
                    }
                </div>
                {
                    (!(page == countPage)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
                }
                
            </ContentCharacters>
        </ContainerApp>
        </>
    )
}