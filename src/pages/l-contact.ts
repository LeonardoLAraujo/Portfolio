import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import ICON_WHATS from "../image/whatsapp.png";
import GMAIL from "../image/gmail.png";

@customElement('l-contact')
export default class LContact extends LitElement{

    static override get styles(): CSSResult{
        return css`
            p{
                margin: 0;
                padding: 0;
            }

            .contact{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem 1rem 2rem 1rem;
                gap: 40px;
                background-color: var(--dark-blue);
                color: #fff;
            }

            .contact__information{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }

            .information__data{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
                font-size: 20px;
            }

            .information__data div{
                width: 40px;
                height: 40px;
                background-repeat: no-repeat;
                background-size: contain;
            }

            .data__complement{
               font-family: PoppinsBold;
            }

            .contact__footer{
                text-align: center;
                font-size: 18px;
            }

            @media (min-width: 1024px){
                .contact__information{
                    gap: 50px;
                }
            }

        `;
    }

    private generateInformationData(url: string, text: string, complement: string): TemplateResult {
        return html`
            <div class="information__data">
                <div  style="background-image: url(${url})"></div>
                <p>${text}: <strong class="data__complement">${complement}</strong></p>
            </div>
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="contact">
                <div class="contact__information">
                    ${this.generateInformationData(ICON_WHATS, "Whatsapp", "(55) 11977510233")}
                    ${this.generateInformationData(GMAIL, "E-Mail", "leonardoleal017@gmail.com")}
                </div>
                <div class="contact__footer">
                    <p>&copy; 2025 Leonardo Leal. Todos os direitos reservados.</p>
                </div>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-contact': LContact
   }
}