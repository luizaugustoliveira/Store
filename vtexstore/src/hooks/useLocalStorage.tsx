import { useEffect, useState } from "react";

/*
    useState: Este hook do React é utilizado para gerenciar o estado local do hook useLocalStorage. Ele retorna um estado atual e uma função para atualizá-lo.

    useEffect: Este hook é utilizado para executar efeitos colaterais em componentes funcionais. Ele é utilizado aqui para verificar se o item já está armazenado no localStorage quando o componente é montado.

    localStorage: Esta é a API do navegador que permite armazenar dados localmente. Ela fornece métodos para armazenar e recuperar dados no formato chave-valor.

    updateLocalStorage: Esta função é responsável por atualizar o valor armazenado no localStorage e no estado local sempre que o valor é alterado.

    Retorno: O hook retorna um objeto contendo o valor atual armazenado no localStorage e a função updateLocalStorage para atualizar esse valor.
*/

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if(value) setValue(JSON.parse(value))
    }, [window])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}