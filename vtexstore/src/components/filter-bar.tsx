"use client"

import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: center;
`

export function FilterBar() {
    return (
        <FilterContainer>
            <FilterByType />
        </FilterContainer>
    );
}

// Container para se acaso eu queira colocar filtros exemplo: Todos os produtos | Camisas | Canecas