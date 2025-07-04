import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('l-about')
export default class LAbout extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .about{
                display: flex;
                flex-direction: column;
                padding: 5rem 1rem 2rem 3rem;
                gap: 20px;
            }

            .about h1{
                font-size: 40px;
                margin: 0;
                font-family: PoppinsBlack;
            }

            .about__me p{
                max-width: 68%;
            }

            .about h2, .about h3{
                margin: 0;
                
                font-family: PoppinsBold;
            }

            .about h2{
                font-size: 30px;
            }

            .about h3{
                font-size: 20px;
            }

            p{
                margin: 0;
                margin: 0;
            }

            ul{
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-family: PoppinsLight;
            }
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="about">
                <h1>Sobre Mim</h1>
                <div class="about__me">
                    <p>Profissional com graduação em Ciência da Computação e em Análise e Desenvolvimento de Sistemas, 
                        atualmente cursando pós-graduação em Data Science e Analytics. Possuo 2 anos de experiência em 
                        desenvolvimento web, sempre atuando com comprometimento, foco em resultados e constante busca
                        por atualização e aprimoramento técnico para entregar soluções de qualidade.</p>
                </div>
                <div class="about__education">
                    <h2>Formação</h2>
                    <div class="education">
                        <ul>
                            <h3>Pós Graduação</h3>
                            <li>
                                <p>Data Science e Analytics - Cursando</p>
                            </li>
                            <h3>Graduação</h3>
                            <li>
                                Tecnólogo em Análise e Desenvolvimento de Sistemas – Concluído em Abril de 2024
                            </li>
                            <li>
                                <p>Bacharelado em Ciência da Computação – Concluído em Dezembro de 2023</p>
                            </li>
                            <li>
                                <p>Técnico Em Manutenção E Suporte Em Informática – Concluído em junho de 2021</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="about__work">
                    <h2>Experiência</h2>
                    <div>
                        <ul>
                            <h3>Atualmente</h3>
                            <li>
                                <p>Julho 2024 - O Momento</p>
                                <p>Desenvolvedor Web</p>
                            </li>
                            <h3>Estagio</h3>
                            <li>
                                <p>Fevereiro 2023 – Julho 2024</p>
                                <p>Desenvolvimento Web - Front End</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}

declare global{
   interface HTMLElementTagNameMap{
    'l-about': LAbout
   }
}