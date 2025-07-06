import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import "../components/l-card-about";
import { CardAbout, ObjectCardAboutMe } from '../type/cardAbout';
import { ABOUT_ME } from '../data/aboutMe';

@customElement('l-about')
export default class LAbout extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .about{
                display: flex;
                flex-direction: column;
                padding: 4rem 1rem 2rem 1rem;
                gap: 20px;
            }

            .about h1{
                font-size: 40px;
                margin: 0;
                font-family: PoppinsBlack;
            }

            .about__me p{
                text-align: left;
            }

            p{
                margin: 0;
                margin: 0;
            }

             .about__detail{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .detail__education,
            .detail__experience{
                display: flex;
                flex-direction: column;
                gap: 30px;
            }

            .detail__education h2,
            .detail__experience h2{  
                font-size: 30px;
                margin: 0;
                padding: 0;
            }

            .education__cards,
            .experience__cards{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            @media (min-width: 1024px){
                .about{
                    padding: 5rem 1rem 2rem 1rem;
                }
                .about__detail{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    gap: 20px;
                }

                .about__me{
                    margin-bottom: 1rem;
                }

                .about__me p{
                    max-width: 80%;
                    font-size: 18px;
                }

            }
        `;
    }

    private _dataAboutMe: ObjectCardAboutMe = ABOUT_ME;

    private generateEducationCard(): Array<TemplateResult> {
        return this._dataAboutMe.education.map((card: CardAbout) =>  html`<l-card-about .card=${card}></l-card-about>`);
    }

    private generateExperienceCard(): Array<TemplateResult> {
        return this._dataAboutMe.experience.map((card: CardAbout) => html`<l-card-about .card=${card}></l-card-about>`);
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
                <div class="about__detail">
                    <div class="detail__education">
                        <h2>Formação</h2>
                        <div class="education__cards">
                            ${this.generateEducationCard()}
                        </div>
                    </div>
                    <div class="detail__experience">
                        <h2>Experiência</h2>
                        <div class="experience__cards">
                            ${this.generateExperienceCard()}
                        </div>
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
