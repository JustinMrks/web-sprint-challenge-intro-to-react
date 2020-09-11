import React from 'react';
import styled from 'styled-components'

const Footer = styled.div`
    height:5vh;
    width: 100%;
    background-color:#e89ac7;
    display:flex;
    justify-content:space-around;
    align-items:center;
    button{
        height: 50%;
        width:10%;
        border: none;
        border-radius: 5px;
        transition: 0.1s ease-in-out;
        &:hover{
            background-color:#97ce4c;
            color:white;
            transition: 0.1s ease-in-out;
        }
    }
    p{
        color:white;
    }
`



const PageChange = ({page, setPage, totalPages}) => {
    
    const nextPage = () => {
        if (page < totalPages){
            return (page + 1)
        }
        else{
            return page
        }
    }

    const back = () => {
        if (page > 1){
            return (page - 1)
        }
        else{
            return page
        }
    }

    return(
        <Footer>
            <button onClick={()=> setPage(1)}>First</button>
            <button onClick={()=> setPage(back)}>Back</button>
    <p>{page}/{totalPages}</p>
            <button onClick={()=> setPage(nextPage)}>Next</button>
            <button onClick={()=> setPage(totalPages)}>Last</button>
        </Footer>
    )
}

export default PageChange