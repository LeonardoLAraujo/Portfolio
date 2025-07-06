import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CardAbout } from '../type/cardAbout';

@customElement('l-card-about')
export default class LCardAbout extends LitElement{

    static override get styles(): CSSResult{
        return css`
            p{
                margin: 0;
            }

            .card,
            .card__detail,
            .detail__information{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .card{
                background-color: var(--dark-blue);
                border-radius: 5px;
                padding: 1rem;
                color: #fff;
                font-family: PoppinsLight;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
            }   

            .card__detail{
                gap: 20px;
            }

            .card__time{
                display: flex;
                gap: 10px;
            
            }

            .card__time p{
                color: #bebebe;
                font-family: PoppinsBold;
            }

            .information__title{
                font-size: 20px;
            }

            .information__description{
                font-size: 15px;
            }
            
            .detail__technology{
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .technology__tag{
                background-color: var(--light-blue);
                padding: 4px;
                border-radius: 10px;
                font-size: 14px;
                cursor: default;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
            }

            .technology__tag:hover{
                background-color: #fff;
                color: var(--dark-blue);
            }

            @media (min-width: 748px){
                .card{
                    width: 542px;
                }
            }

            @media (min-width: 1024px){
                .card{
                    width: 600px;
                    flex-direction: row;
                    gap: 30px;
                    transition: transform 400ms;
                }

                 .card:hover{
                    transform: scale(1.02);
                }
                
                .card__time p{
                    text-align: center;
                }
            }

        `;
    }

    @property({attribute: false})
    card!: CardAbout;

    private generateTechnology(): Array<TemplateResult> | undefined{
        return this.card.technology?.map((tec: string) => html`<div class="technology__tag">${tec}</div>`);
    }

    protected override render(): TemplateResult{
        return html`
            <div class="card">
                <div class="card__time">
                    <p>${this.card.yearStart}</p>
                    <p>-</p>
                    ${this.card.yearEnd == undefined ? html`<p>Atualmente</p>` : html`<p>${this.card.yearEnd}</p>`}
                </div>
                <div class="card__detail">
                    <div class="detail__information">
                        <p class="information__title">${this.card.title}</p>
                        ${this.card.description != undefined ? 
                            html`<p class="information__description">
                                    ${this.card.description}
                                </p>` 
                            : ``}
                    </div>
                    <div class="detail__technology">
                        ${this.generateTechnology()}
                    </div>
                </div>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-card-about': LCardAbout
   }
}