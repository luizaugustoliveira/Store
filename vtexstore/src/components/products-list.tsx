"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

/*
    useProducts: um hook para buscar produtos.
    ProductCard: um componente para exibir informações individuais do produto.
    styled: função do styled-components para estilização CSS em JavaScript.

    Usa o hook useProducts para obter os dados dos produtos, que inclui uma lista de produtos disponíveis.
    Renderiza o ListContainer, e, dentro dele, mapeia cada produto para um componente ProductCard, passando as propriedades necessárias (id, título, preço e imagem).
    Cada ProductCard é renderizado com uma chave única (key)
*/



const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`;

export function ProductsList(){
    const { data } = useProducts();
    return(
        <ListContainer>
            {data?.map(product => 
            <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
            />
            )}
    </ListContainer>
    )
}