import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import "ecv-component";
import { IconTypes } from 'ecv-component';
import LPortfolio from '../l-portfolio';

@customElement('l-menu')
export default class LMenu extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .container{
                display: flex;
                flex-direction: column;
                position: fixed;
                width: 100%;
                z-index: 2;
            }

            .menu,
            .menu__links{
                display: flex;
                align-items: center;
            }

            .menu{
                justify-content: space-evenly;
                background-color: var(--light-blue);
                border-bottom: 2px solid #fff;
            }

            h1{
                color: #fff;
                transition: transform 1s;
                font-family: PoppinsBold;
            }

            h1:hover{
                transform: scale(1.1);
            }

            .menu__icon{
                cursor: pointer;
            }

            .menu__links{
                display: none;
                gap: 20px;
            }

            .animation{
                width: 100%;
                clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0);
                height: 179px;
                position: absolute;
                top: 77px;
            }

            .animation__links{
                display: flex;
                width: calc(100% - 14px);
                position: absolute;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                transform: translateY(-200px);
                background-color: var(--light-blue);
                margin: 0;
                padding: 7px;
                z-index: 1;
            }

            @keyframes openMenuMobileAnimation{
                0%{
                    transform: translateY(-200px);
                }
                100%{
                    transform: translateY(0px);
                }
            }

            @keyframes closeMenuMobileAnimation{
                0%{
                    transform: translateY(0px);
                }
                10%{
                    transform: translateY(-20px);
                }
                100%{
                    transform: translateY(-200px);
                }
            }

            li{
                list-style: none;
            }

            a{
                color: #fff;
                text-decoration: none;
                cursor: pointer;
            }

            a:hover{
                color: var(--dark-blue);
            }

            @media (min-width: 1024px){
                .menu__icon{
                    display: none;
                }

                .menu__links{
                    display: flex;
                }
            }

        `;
    }

    @state()
    isOpenMenu: boolean = false;

    @query(".animation__links")
    private _containerAnimationLinks!: HTMLDivElement;

    @property({attribute: false})
    referencePortfolio!: LPortfolio;

    private generateLinkMenu(text: string, onPressed?: Function){
        return html`<li>
                        <a @click=${onPressed}>${text}</a>
                    </li>`;
    }

    private openMenu(): void{
        this.isOpenMenu = !this.isOpenMenu;

        if(this.isOpenMenu){
            this._containerAnimationLinks.style.animation = "openMenuMobileAnimation 700ms cubic-bezier(0, 0, 0.04, 1) forwards";
        }else{
            this._containerAnimationLinks.style.animation = "closeMenuMobileAnimation 700ms cubic-bezier(0, 0, 0.04, 1) forwards";
        }
    }

    protected override render(): TemplateResult{
        return html`
            <div class="container">
                <nav class="menu">
                    <h1>Leonardo Leal</h1>
                    <div class="menu__icon" @click=${this.openMenu}>
                        <ecv-icon .icon=${IconTypes.Menu} .iconStyle=${{color: "#fff", size: "40px"}}></ecv-icon>
                    </div>
                    <ul class="menu__links">
                        ${this.generateLinkMenu("Home", () => {this.referencePortfolio.lHome?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this.generateLinkMenu("About Me", () => {this.referencePortfolio.lAbout?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this.generateLinkMenu("Projects", () => {this.referencePortfolio.lProject?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this.generateLinkMenu("Curriculum", () => {this.referencePortfolio.lCurriculum?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this.generateLinkMenu("Contact", () => {this.referencePortfolio.lContact?.scrollIntoView({ behavior: 'smooth' })})}
                    </ul>
                </nav>

                <div class="animation">
                    <ul class="animation__links">
                        ${this.generateLinkMenu("Home", () => {this.referencePortfolio.lHome?.scrollIntoView({ behavior: 'smooth' }); this.openMenu()})}
                        ${this.generateLinkMenu("About Me", () => {this.referencePortfolio.lAbout?.scrollIntoView({ behavior: 'smooth' }); this.openMenu()})}
                        ${this.generateLinkMenu("Projects", () => {this.referencePortfolio.lProject?.scrollIntoView({ behavior: 'smooth' }); this.openMenu()})}
                        ${this.generateLinkMenu("Curriculum",  () => {this.referencePortfolio.lCurriculum?.scrollIntoView({ behavior: 'smooth' }); this.openMenu()})}
                        ${this.generateLinkMenu("Contact", () => {this.referencePortfolio.lContact?.scrollIntoView({ behavior: 'smooth' }); this.openMenu()})}
                    </ul>
                </div>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-menu': LMenu
   }
}