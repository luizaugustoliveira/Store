import { ProductFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL,{ query: `
  query {
    Product(id: "${productId}"){
      name
      description
      category
      price_in_cents
      image_url
    }
  }
  ` })
}

export function useProduct(id: string){
    const { data }  = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    });

    return {
        data: data?.data?.data?.Product
    }
}

/*
    API_URL: Esta constante armazena a URL da API, que é obtida a partir de uma variável de ambiente NEXT_PUBLIC_API_URL.

    fetcher: Esta função é responsável por fazer a requisição à API GraphQL utilizando o Axios. Ela recebe o ID do produto como parâmetro e retorna uma Promise que, quando resolvida, contém a resposta da requisição.

    useQuery: Este é um hook fornecido pela biblioteca React Query. Ele é utilizado para realizar consultas de dados e gerenciar o estado do cache. Neste caso, useQuery é usado para executar a função fetcher e recuperar os detalhes do produto com base no ID fornecido.

    queryFn: Esta propriedade define a função a ser executada para realizar a consulta de dados. No caso, é a função fetcher que recebe o ID do produto como argumento.

    queryKey: Esta propriedade define a chave única para identificar esta consulta. Ela é composta por uma string 'product' e o ID do produto.

    enabled: Esta propriedade controla se a consulta deve ser realizada ou não. Neste caso, a consulta só será realizada se o ID do produto estiver definido.

    staleTime: Esta propriedade define por quanto tempo os dados em cache devem ser considerados válidos antes de uma nova requisição ser feita. No caso, os dados serão considerados válidos por 5 minutos (1000 * 60 * 5 milissegundos).

    Retorno: O hook retorna um objeto com os dados do produto recuperados da API GraphQL. Esses dados podem ser acessados através da propriedade data, que contém a resposta da requisição.
*/