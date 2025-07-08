import { IconTypes } from 'ecv-component';
import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import "lit-player-youtube";
import { Project } from '../type/project';
import { LitPlayerYoutube } from 'lit-player-youtube';

@customElement('l-modal-project')
export default class LModalProject extends LitElement{


    static override get styles(): CSSResult{
        return css`
            :host{
                display: none;
                height: 100%;
                width: 100%;
            }

            p{
                margin: 0;
                padding: 0;
            }
            
            .fade{
                position: fixed;
                background-color: #000000d8;
                width: calc(100% - 32px);
                height: 100%;
                top: 0;
                z-index: 40;
                left: 0;
                padding: 1rem 1rem 3rem 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
                overflow: auto;
            }

            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                width: fit-content;
            }

            .fade__close{
                background-color: var(--dark-blue);
                border-radius: 50%;
                padding: 0.5rem;
                cursor: pointer; 
                align-self: flex-end;
            }

            .fade__close:hover{
                background-color: var(--light-blue);
            }

            .fade__content{
                display: flex;
                flex-direction: column;
                gap: 20px;
                background-color: #fff;
                color: #000;
                padding: 1rem;
            }

            .content__button{
                display: flex;
                gap: 5px;
                flex-wrap: wrap;
            }

            button{
                width: 100%;
                font-size: 18px;
                border: none;
                background-color: var(--dark-blue);
                color: #fff;
                font-family: PoppinsLight;
                text-transform: uppercase;
                padding: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
            }

            button:hover{
                background-color: var(--light-blue);
            }

            button[actual]{
                background-color: var(--light-blue);
            }

            .content__title{
                font-size: 23px;
                font-family: PoppinsBold;
            }

            .content__about{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .about__description{
                text-align: left;
            }

            .about__links{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            .links__title{
                font-size: 18px;
            }

            .about__links div{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }

            .about__links div a{
                color: var(--dark-orange);
                font-family: PoppinsBlack;
            }

            .about__links div a:hover{
                 color: var(--light-orange);
            }

            .content__video{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            lit-player-youtube{
                width: 100%;
                height: 300px;
            }

            @media (min-width: 1024px){
                .fade__content{
                    width: 590px;
                }

                .content__button{
                    flex-wrap: nowrap;
                }

                lit-player-youtube{
                    height: 450px;
                }
            }
        `;
    }

    private _body = document.querySelector("body");

    @state()
    private _isAbout: boolean = false;

    @query("lit-player-youtube")
    playerYoutube!: LitPlayerYoutube;

    @queryAll("button")
    private _containerButton!: NodeListOf<HTMLButtonElement>;

    @property({attribute: false})
    project!: Project;

    private generateAbout(): TemplateResult {
        return html`
            <div class="content__about">
                <p class="about__description">
                    ${this.project.descriptionProject}
                </p>
                <div class="about__links">
                    <p class="links__title">Links</p>
                    <div>
                        <a href=${this.project.links[0]} target="_blank">Documentação</a>
                        <a href=${this.project.links[1]} target="_blank">NPM</a>
                        <a href=${this.project.links[2]} target="_blank">Repositório</a>
                    </div>
                </div>
            </div>
        `;
    }

    private generateVideo(): TemplateResult{
        return html`
            <div class="content__video">
                <p class="about__description">
                    ${this.project.descriptionVideo}
                </p>
            </div>
        `;
    }

    private close(): void{
        this._body!.style!.overflow = "auto";
        this.style.display = "none";

        this._isAbout = false;
        this._containerButton[0].setAttribute("actual", "");
        this._containerButton[1].removeAttribute("actual");

        this.playerYoutube.stopVideo();
    }

    private alterCurrentButton(e: MouseEvent): void{
        const button: HTMLButtonElement = e.target as HTMLButtonElement;

        this._isAbout = !this._isAbout;

        this._containerButton.forEach((button) => {
            button.removeAttribute("actual");
        });

        button.setAttribute("actual", "");

    }

    protected override render(): TemplateResult{
        return html`
            <div class="fade">
                <div class="container">
                    <div class="fade__close" @click=${this.close}>
                        <ecv-icon .icon=${IconTypes.Close}></ecv-icon>
                    </div>
                    <div class="fade__content">
                        <div class="content__button">
                            <button actual @click=${this.alterCurrentButton}>Sobre</button>
                            <button @click=${this.alterCurrentButton}>Vídeo</button>
                        </div>
                        <p class="content__title">${this.project.title}</p>
                        <lit-player-youtube video=${this.project.sourceVideo} style="display: ${this._isAbout ? "block" : "none"}"></lit-player-youtube>
                        ${this._isAbout ? html`${this.generateVideo()}` :  html`${this.generateAbout()}`}
                    </div>
                </div>
            </div>
        `;
    }



}

declare global{
   interface HTMLElementTagNameMap{
    'l-modal-project': LModalProject
   }
}