import styled from "styled-components";

export const Container = styled.section`
    max-width: 800px;
    height: fit-content;
    margin: 0 auto;
    padding: 1rem .5rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: whitesmoke;
`;

export const ClearAll = styled.button`
    padding: .5em 1em;
    font-size: clamp(16px, 1.5vw, 2.5rem);
    font-family: var(--ff-primary);
    letter-spacing: 2px;
    border-radius: 10px;
    box-shadow: 2px 2px 3px 2px black;
    color: blueviolet;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s all;
    :where(:hover, :focus-visible){
        transform: scale(0.98);
        box-shadow: 2px 2px 3px 2px silver;
        color: blueviolet;
    }
`;

export const Title = styled.h1`
    font-size: clamp(36px, 5vw, 6rem);
    font-family: var(--ff-primary);
    letter-spacing: 4px;
    color: blueviolet;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    input{
        width: 80%;
        padding-inline: 1rem;
        font-size: clamp(16px, 1.5vw, 2.5rem);
        font-family: var(--ff-primary);
        border-radius: 100vw;
        box-shadow: 2px 2px 3px 2px black;
        transition: 0.2s all;
        border: none;
        outline: none;
    }
    input::placeholder{
        font-size: clamp(14px, 1.5vw, 2.5rem);
        padding-inline: 1rem;
        opacity: 0.4;
    }
    @media screen and (max-width: 55em){
        input::placeholder{
            padding-inline: 0.5rem;
        }
    }
    input:where(:hover, :focus-visible){
        transform: scale(0.98);
        box-shadow: 2px 2px 3px 2px blueviolet;
    }
    button{
        width: 10%;
        aspect-ratio: 1;
        font-size: clamp(12px, 1.5vw, 2.5rem);
        font-family: var(--ff-primary);
        border-radius: 50%;
        box-shadow: 2px 1px 5px 1px black;
        background: white;
        border: none;
        cursor: pointer;
        transition: 0.2s all;
    }
    button:where(:hover, :focus-visible){
        transform: scale(0.98);
        box-shadow: 2px 1px 5px 1px blueviolet;
        color: blueviolet;
    }
`;

export const List = styled.ul`
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li{
        padding: 0.5rem 4rem;
        font-size: clamp(20px, 1.5vw, 2.5rem);
        font-family: var(--ff-list);
        font-weight: 500;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: silver;
        isolation: isolate;
    }
    @media screen and (max-width: 55em){
        li{
            padding: 0.5rem 2rem;
        }
    }
    li:before{
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        background: linear-gradient(143.58deg, 
        #FFFFFF -5.45%, 
        rgba(255, 255, 255, 0) 46.52%, 
        rgba(255, 255, 255, 0.72) 104.1%);
        backdrop-filter: blur(14.2px);
    }
    li:nth-child(even){
        clip-path: polygon(100% 0, 96% 55%, 100% 100%, 0 100%, 0 0);
    }
    li:nth-child(odd){
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 4% 55%);
    }
    button{
        width: 10%;
        aspect-ratio: 1;
        font-size: clamp(20px, 1.5vw, 2.5rem);
        font-family: var(--ff-primary);
        box-shadow: 2px 1px 5px 2px black;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: 0.2s all;
    }
    button:where(:hover, :focus-visible){
        transform: scale(0.98);
        box-shadow: 2px 1px 5px 2px crimson;
        color: red;
    }
`;