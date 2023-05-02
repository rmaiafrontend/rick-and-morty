import { ContainerCard } from "./style";

export function CardCharacter({image, name, genre, specie}) {
    return (
        <>
            <ContainerCard>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <ul>
                        <li>{genre}</li>
                        <li>{specie}</li>
                    </ul>
                </div>

            </ContainerCard>
        </>
    )
}