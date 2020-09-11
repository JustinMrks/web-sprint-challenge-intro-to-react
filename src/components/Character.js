import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display:flex;
    width: 80%;
    margin: 10px auto;
    border-radius: 20px;
    background-color:white;
    box-shadow: 3px 3px black;
    img{
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
    }
`

const Text = styled.div`
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    width:100%;
    h2{
        font-size:2rem;
    }
`
const Status = styled.h4`
    color: ${pr => pr.className === 'Alive'
    ? 'green'
    : null};
    color: ${pr => pr.className === 'unknown'
    ? 'orange'
    : null};
    color: ${pr => pr.className === 'Dead'
    ? 'red'
    : null};

`



const Character = ({charData}) => {

    return(
        <Card>
            <img src={charData.image} alt=''/>
                <Text>
                    <h2>{charData.name}</h2>
                    <h3>{charData.location.name}</h3>
                    <h3>{charData.species} - {charData.gender}</h3>
                    <Status className={charData.status}>Status: {charData.status}</Status>
                </Text>
        </Card>
    )
}


export default Character