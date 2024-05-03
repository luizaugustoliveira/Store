"use client"

import { styled } from "styled-components";

/*
Cria e estiliza um componente de filtro de tipo. É usado styled-components para aplicar estilos. Se mais opções de filtro forem necessárias, este código pode ser expandido.
*/

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const FilterItem = styled.li`
    font-family: inherit;
    font-weight: 600; // Todas as camisas sempre selecionado
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--text-dark);
    border-bottom: 4px solid var(--pink-low);

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export function FilterByType() {
    return (
        <FilterList>
            <FilterItem>
                Todas as camisas
            </FilterItem>
        </FilterList>
    );
}

