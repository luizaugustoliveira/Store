"use client"

import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";
import { VtexLogo } from "./icons/vtex-logo";

/*    useFilter(): Este hook é responsável por gerenciar o estado de filtragem, retornando valores como setSearch e search que são usados na barra de pesquisa.
    <Logo>: Renderiza o logotipo como um link que redireciona para a página inicial.
    <PrimaryInputWSearchIcon>: Renderiza a barra de pesquisa com um ícone de busca, permitindo que os usuários pesquisem por produtos específicos.
    <CartControl>: Renderiza o controle de carrinho de compras. */

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
});

interface HeaderProps {}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; 
`;

const Logo = styled.a`
    color: var(--pink-low);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media(min-width: ${props => props.theme.tableBreakpoint}){
        font-size: 24px;
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }
`;

export function Header(props : HeaderProps){
    const {setSearch, search} = useFilter();

    return(
        <TagHeader>
            <LogoContainer>
                <VtexLogo/>
                <Logo className={sairaStencil.className} href="/">Vtex Store</Logo>
            </LogoContainer>
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"
                />
                <CartControl/>
            </div>
        </TagHeader>
    )
}
