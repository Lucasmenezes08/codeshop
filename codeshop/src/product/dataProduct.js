import cpp from '../assets/cpp.png';
import golang from '../assets/golang.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import rust from '../assets/rust.png';
import typescript from '../assets/typescript.png';


export const ProductData = [
    {
        id: 'cpp',
        imagem: cpp,
        titulo: 'Aprenda tudo sobre C ++',
        preco: 97.50,
        descricao: 
            'C++ é uma linguagem de programação de alto desempenho, criada como uma evolução da linguagem C.',
        tags: ['Todos', 'BackEnd'],
    },

    {
        id: 'golang',
        imagem: golang,
        titulo: 'Inicie o aprendizado em Golang',
        preco: 85.75,
        descricao: 
            'É compilada, rápida e ideal para serviços de backend e infraestrutura de nuvem, sendo a linguagem por trás de ferramentas como Docker e Kubernetes.',
        tags: ['Todos', 'BackEnd'],
    },

    {
        id: 'javascript',
        imagem: javascript,
        titulo: 'Adentre o desenvolvimento Web com Javascript',
        preco: 49.75,
        descricao: 
            'JavaScript é a linguagem de programação essencial da web, usada para criar páginas dinâmicas e interativas que rodam diretamente no navegador do usuário.',
        tags: ['Todos', 'FrontEnd' , 'FullStack', 'BackEnd'],
    },

    {
        id: 'java',
        imagem: java,
        titulo: 'Domine o mercado com Java',
        preco: 99.00,
        descricao: 
            'Java é uma linguagem de programação orientada a objetos, famosa pelo lema "escreva uma vez, rode em qualquer lugar" (Write Once, Run Anywhere).',
        tags: ['Todos','FullStack', 'BackEnd'],
    },

    {
        id: 'python',
        imagem: python,
        titulo: 'Fundamentos de programação com python',
        preco: 88.70,
        descricao: 
            'Java é uma linguagem de programação orientada a objetos, famosa pelo lema "escreva uma vez, rode em qualquer lugar" (Write Once, Run Anywhere).',
        tags: ['Todos' , 'FullStack', 'BackEnd' , 'DataScience'],
    },

    {
        id: 'rust',
        imagem: rust,
        titulo: 'Aprenda a linguagem Rust',
        preco: 120.00,
        descricao: 
            'Rust é uma linguagem de programação focada em segurança e velocidade, que oferece o desempenho de C++ sem os riscos de falhas de memória.',
        tags: ['Todos' , 'BackEnd'],
    },

    {
        id: 'typescript',
        imagem: typescript,
        titulo: 'Aprenda tipagem com typescript',
        preco: 45.00,
        descricao: 
            'TypeScript é uma linguagem criada pela Microsoft que expande o JavaScript, adicionando um sistema de tipagem estática opcional.',
        tags: ['Todos', 'FrontEnd' , 'FullStack', 'BackEnd'],
    },
] 