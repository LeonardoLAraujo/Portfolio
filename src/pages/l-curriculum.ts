import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, query } from 'lit/decorators.js';
import PDF from "../image/pdf_icon.png";
import CURRICULUM from "../archives/curriculum.pdf";
import { IconTypes } from 'ecv-component';

@customElement('l-curriculum')
export default class LCurriculum extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .curriculum{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                gap: 20px;
            }

            .curriculum h1{
                color: #000;
                font-family: PoppinsBold;
            }

            .curriculum img{
                width: 180px;
                transition: transform 300ms;
            }

            .curriculum img:hover{
                transform: scale(1.05);
            }

            .curriculum__buttons{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }

            button{
                width: 200px;
                font-family: PoppinsLight;
                border: none;
                font-size: 22px;
                padding: 5px 1.2rem 5px 1.2rem;
                cursor: pointer;
                color: #fff;
                border-radius: 4px;
                box-shadow: 2px 1px 119px 2px rgba(0,0,0,0.48);
            }

            .buttons__view{
                background-color: var(--dark-orange);
            }

            .buttons__view:hover{
                background-color: var(--light-orange);
            }

            .buttons__download{
                background-color: var(--light-blue);
            }

            .buttons__download:hover{
                background-color: var(--blue);
            }

            .modal{
                position: fixed;
                top: 0;
                background-color: #0000009d;
                height: 100%;
                width: calc(100% - 64px);
                display: none;
                flex-direction: column;
                gap: 10px;
                align-items: center;
                padding: 1rem 2rem 2rem 2rem;
                z-index: 3;
            }

            .modal__close{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                background-color: var(--light-blue);
                border-radius: 50%;
                cursor: pointer;
                align-self: flex-end;
                box-shadow: 2px 1px 134px -48px rgba(0,0,0,0.68);
            }

            .modal__close:hover{
                background-color: var(--dark-blue);
            }

            iframe{
                width: 90%;
                height: 90%;
                padding-bottom: 1rem;
            }

            @media (min-width: 1024px){
                .curriculum{
                    height: calc(100% + 75px);
                }

                .curriculum h1{
                    font-size: 50px;
                }
            }
        `;
    }

    private body = document.querySelector("body");

    @query(".modal")
    modal!: HTMLDivElement;

    private openModalView(): void{
        this.body!.style!.overflow = "hidden";
        this.modal.style.display = "flex";
    }

    private closeModalView(): void{
         this.body!.style!.overflowY = "auto";
        this.modal.style.display = "none";
    }

    private viewCurriculum(): TemplateResult{
        return html`
            <div class="modal">
                <div class="modal__close" @click=${this.closeModalView}>
                    <ecv-icon .icon=${IconTypes.Close} .iconStyle=${{color: "#fff", size: "30px"}}></ecv-icon>
                </div>
                <iframe src=${CURRICULUM} frameborder="0" scrolling="no" marginheight="0"></iframe>
            </div>
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="curriculum" id="curriculum">
                <h1>Currículo</h1>
                <img src=${PDF}>
                <div class="curriculum__buttons">
                    <button class="buttons__view" @click=${this.openModalView}>Visualizar</button>
                    <a href=${CURRICULUM} download="Curriculo-Leonardo-Leal.pdf">
                        <button class="buttons__download">Baixar</button>
                    </a>
                </div>
            </div>

            ${this.viewCurriculum()}
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-curriculum': LCurriculum
   }
}