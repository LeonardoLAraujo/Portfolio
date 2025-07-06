import { ObjectCardAboutMe } from "../type/cardAbout";

export const ABOUT_ME: ObjectCardAboutMe = {
    education: [
        {
            title: "Pós-graduação em Data Science e Analytics (Cursando)",
            yearStart: "2025", 
            description: `Pós-graduação voltada para ciência de dados, análise estatística, inteligência artificial, 
                        machine learning, visualização de dados e tomada de decisão baseada em dados.`,
        },
        {
            title: "Tecnólogo em Análise e Desenvolvimento de Sistemas", 
            yearStart: "2020", 
            yearEnd: "2023", 
            description: `Curso superior focado em desenvolvimento de software, 
                        incluindo programação, bancos de dados, engenharia de software e arquitetura de sistemas.`
        },
        {
            title: "Bacharelado em Ciência da Computação", 
            yearStart: "2020", 
            yearEnd: "2023",
            description: `Graduação que aborda fundamentos teóricos e práticos da computação, 
                        como algoritmos, estruturas de dados, programação orientada a objetos,
                        inteligência artificial e banco de dados`
        },
        {
            title: "Técnico Em Manutenção E Suporte Em Informática", 
            yearStart: "2019", 
            yearEnd: "2021",
            description: `Curso técnico que forma profissionais para instalar, configurar e realizar manutenção de computadores e redes, 
                        além de prestar suporte técnico a usuários e empresas.`
        }
    ],
    experience: [
        {
            title: "Desenvolvedor Web", 
            yearStart: "Julho 2024", 
            description: `Atuo no desenvolvimento de sistemas completos, criando dashboards, aplicações web 
            e participando da implementação de projetos de desenvolvimento de jogos. Trabalho com front-end 
            baseado nos designs da equipe de designers e também com back-end e banco de dados, evoluindo 
            como Full Stack. Desenvolvo seguindo os princípios de orientação a objetos para garantir 
            organização e manutenibilidade do código.`, 
            technology: ["Typescript", "Mysql", "Lit Element", "Node JS", "Socket Io", "PHP"]
        },
        {
            title: "Estagiário em Desenvolvimento Web – Front End", 
            yearStart: "Fevereiro 2023", 
            yearEnd: "Julho 2024" ,
            description: `Atuei no desenvolvimento de projetos front-end com foco em Web Components e 
                        TypeScript, aplicando orientação a objetos para garantir modularidade e 
                        manutenibilidade do código. Desenvolvi uma biblioteca própria de Web Components 
                        para padronizar interfaces, otimizar a performance e acelerar o desenvolvimento de 
                        aplicações web.`, 
            technology: ["Javascript", "Typescript", "Babylon", "Lit Element", "Node JS"]
        }
    ]
};