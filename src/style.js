import style from 'styled-components';

export const Container = style.div `
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = style.div `
    background-color: #FFFFFF;
    width: 50%;
`

export const Row = style.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`