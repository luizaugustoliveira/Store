import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import {  mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL,{ query })
}

export function useProducts(){
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
      queryFn: () => fetcher(query),
      queryKey: ['products', type, priority],
      staleTime: 1000 * 60 * 1
    })

    const products =  data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
      data: filteredProducts
    }
}

/*
    API_URL: Esta constante armazena a URL da API, que é obtida a partir de uma variável de ambiente NEXT_PUBLIC_API_URL.

    fetcher: Esta função é responsável por fazer a requisição à API GraphQL utilizando o Axios. Ela recebe uma string contendo a consulta GraphQL como parâmetro e retorna uma Promise que, quando resolvida, contém a resposta da requisição.

    useFilter: Este é um hook customizado que retorna os filtros definidos pelo usuário, como tipo, prioridade e termo de pesquisa.

    useDeferredValue: Este é um hook do React que retorna um valor "atrasado" (deferred value) que representa um valor que está prestes a ser atualizado. Ele é usado aqui para atrasar a atualização do termo de pesquisa, o que ajuda a evitar atrasos durante a digitação do usuário.

    mountQuery: Esta função é responsável por montar a consulta GraphQL com base nos filtros definidos pelo usuário. Ela recebe o tipo e a prioridade dos produtos e retorna uma string contendo a consulta GraphQL correspondente.

    useQuery: Este é um hook fornecido pela biblioteca React Query. Ele é utilizado para realizar consultas de dados e gerenciar o estado do cache. Neste caso, useQuery é usado para executar a função fetcher e recuperar a lista de produtos com base na consulta montada.

    queryFn: Esta propriedade define a função a ser executada para realizar a consulta de dados. No caso, é a função fetcher que recebe a consulta GraphQL como argumento.

    queryKey: Esta propriedade define a chave única para identificar esta consulta. Ela é composta por uma string 'products', o tipo e a prioridade dos produtos.

    staleTime: Esta propriedade define por quanto tempo os dados em cache devem ser considerados válidos antes de uma nova requisição ser feita. No caso, os dados serão considerados válidos por 1 minuto (1000 * 60 * 1 milissegundos).

    Retorno: O hook retorna um objeto com os produtos filtrados recuperados da API GraphQL. Esses produtos podem ser acessados através da propriedade data, que contém a resposta da requisição.
*/