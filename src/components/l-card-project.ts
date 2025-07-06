import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import "./l-modal-project";
import { Project } from '../type/project';
import LModalProject from './l-modal-project';

@customElement('l-card-project')
export default class LCardProject extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .card{
                width: calc(100% - 32px);
                border: 2px solid var(--light-blue);
                border-radius: 10px;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: var(--white);
                color: #000;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
            }

            p{
                margin: 0;
                padding: 0;
            }

            .card__title{
                align-self: flex-start;
                font-family: PoppinsBold;
                font-size: 20px;
            }

            .card__image{
                width: 200px;
            }

            .card__description{
                width: 100%;
                text-align: left;
                margin-bottom: 1rem;
                font-size: 15px;
            }

            .card__button{
                width: 100%;
                font-size: 18px;
                border: none;
                background-color: var(--dark-orange);
                color: #fff;
                font-family: PoppinsLight;
                text-transform: uppercase;
                padding: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
            }

            .card__button:hover{
                background-color: var(--light-orange);
            }

            @media (min-width: 655px){
                .card{
                    width: 560px;
                }
            }
        `;
    }

    private _body = document.querySelector("body");

    @query("l-modal-project")
    lModalProject!: LModalProject;

    @property({attribute: false})
    project!: Project;

    private openModalProject(): void{
        this._body!.style!.overflow = "hidden";
        this.lModalProject.style.display = "flex";
    }

    protected override render(): TemplateResult{
        return html`
            <div class="card">
                <p class="card__title">${this.project.title}</p>
                <img class="card__image" src=${this.project.image}> 
                <p class="card__description">
                    ${this.project.descriptionCard}
                </p>
                <button class="card__button" @click=${this.openModalProject}>Abrir</button>
            </div>

            <l-modal-project .project=${this.project}></l-modal-project>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-card-project': LCardProject
   }
}