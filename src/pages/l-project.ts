import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import "../components/l-card-project";
import { Project } from '../type/project';
import { PROJECT } from '../data/project';

@customElement('l-project')
export default class LProject extends LitElement{

    static override get styles(): CSSResult{
        return css`
            h1, p{
                margin: 0;
                padding: 0;
            }

            .project{
                display: flex;
                flex-direction: column; 
                align-items: center;
                gap: 10px;
                padding: 5rem 1rem 2rem 1rem;
                background-color: var(--dark-blue);
                color: #fff;
                height: auto;
            }
            
            .project h1{
                font-size: 40px;
                margin: 0;
                font-family: PoppinsBlack;
                align-self: flex-start;
            }

            .project__cards{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }

            .project__button{
                font-family: PoppinsBold;
                font-size: 20px;
                background-color: var(--dark-orange);
                border: none;
                padding: 0.5rem;
                width: 100%;
                border-radius: 6px;
                color: #fff;
                cursor: pointer;
            }

            .project__button:hover{
                background-color: var(--light-orange);
            }

            @media (min-width: 1024px){
                .project{
                    padding: 5rem 1rem 2rem 1rem;
                }

                .project__button{
                    width: 500px;
                }

                .project__introduction p{
                    max-width: 80%;
                    font-size: 18px;
                }
            }

            @media (min-width: 1256px){

                .project__cards{
                    margin-top: 4rem;
                }

                .project__button{
                    margin-top: 5rem;
                }
            }
        `;
    }

    @state()
    private _projects: Array<Project> = PROJECT;

    private generateCardProject(): Array<TemplateResult> {
        return this._projects.map((project: Project) => html`<l-card-project .project=${project}></l-card-project>`)
    }

    private goToAllProjects(): void{
        window.open("https://github.com/LeonardoLAraujo", "_blank");
    }

    protected override render(): TemplateResult{
        return html`
            <div class="project">
                <h1>Projetos</h1>
                <div class="project__introduction">
                    <p>Aqui estão dois dos meus projetos mais recentes, 
                        escolhidos para manter esta seção objetiva e agradável de visualizar.
                        Se quiser conhecer todos os meus outros projetos, incluindo estudos 
                        e experimentos que compartilho, clique no botão abaixo e explore 
                        meu GitHub.
                    </p>
                </div>
                <div class="project__cards">
                   ${this.generateCardProject()}
                </div>
                <button class="project__button" @click=${this.goToAllProjects}>Ver Todos Projetos</button>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-project': LProject
   }
}