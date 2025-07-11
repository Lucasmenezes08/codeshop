import { createContext, useState } from "react";

export const TopicContext = createContext();


export function TopicProvider ({children}){

    const [topicSelected , setTopicSelected] = useState('Todos');

    const value = {
        topicoAtual: topicSelected,
        mudarTopico: setTopicSelected,
    };
    
    return (
        <TopicContext.Provider value={value}>
            {children}
        </TopicContext.Provider>
    )
}
