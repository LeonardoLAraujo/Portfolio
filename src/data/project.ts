import { Project } from "../type/project";
import LOGO_ECV from "../image/icon_ecv.png";
import LOGO_LIT_PLAYER from "../image/logo_lit_player.png";

export const PROJECT: Array<Project> = [
    {
        title: "ECV Component", 
        descriptionCard: `Biblioteca de Web Components desenvolvida em TypeScript para 
                    facilitar a criação de componentes reutilizáveis em aplicações web.`, 
        descriptionProject: `Biblioteca de Web Components desenvolvida em TypeScript para 
                    facilitar a criação de componentes reutilizáveis em aplicações web. 
                    Criada com foco em otimizar o desenvolvimento de sites, garantindo organização, modularidade e 
                    rapidez na implementação de interfaces padronizadas. Atualmente, já conta com downloads pela 
                    comunidade via npm, demonstrando sua aplicação prática em projetos reais.`,
        descriptionVideo: `Este vídeo demonstra na prática como utilizar a biblioteca ECV Component em 
                        um projeto. Nele, apresento um exemplo de aplicação real utilizando os Web Components criados, 
                        mostrando como implementar, configurar e integrar os componentes de forma rápida e padronizada no 
                        desenvolvimento web.`,
        image: LOGO_ECV,
        links: ["https://leonardolaraujo.github.io/ecv-component/", "https://www.npmjs.com/package/ecv-component", "https://github.com/LeonardoLAraujo/ecv-component"],
        sourceVideo: "https://www.youtube.com/watch?v=tPBbeszlIXw"
    },
    {
        title: "Lit Player Youtube", 
        descriptionCard: `Player de YouTube criado com Lit e Web Components para integrar vídeos de forma rápida, 
                        responsiva e customizável em projetos web.`, 
        descriptionProject: `Biblioteca criada utilizando Lit e Web Components para facilitar a implementação de 
                        players do YouTube em aplicações web. Com este pacote, é possível inserir vídeos de forma rápida, 
                        customizável e responsiva, sem a necessidade de configurar iframes manualmente. Foi desenvolvido 
                        para agilizar o processo de integração de vídeos e garantir compatibilidade com projetos modernos 
                        baseados em Web Components.`,
        descriptionVideo: `Este vídeo demonstra como utilizar o Lit Player YouTube, mostrando na 
                            prática a implementação do player em um projeto web. Nele, apresento como integrar
                            facilmente vídeos do YouTube usando o componente, além de explicar sua configuração
                            e personalização para criar players responsivos de forma rápida.`,
        image: LOGO_LIT_PLAYER,
        links: ["https://leonardolaraujo.github.io/lit-player-youtube/", "https://www.npmjs.com/package/lit-player-youtube", "https://github.com/LeonardoLAraujo/lit-player-youtube"],
        sourceVideo: "https://www.youtube.com/watch?v=L-hQnWvCWpg"
    },
]