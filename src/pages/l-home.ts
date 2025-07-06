import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import ME from "../image/me.jpg";
import GITHUB_LOGO from "../image/github-mark-white.png";
import LINKEDIN from "../image/LI-Logo.png";
import NPM from "../image/npm-logo.svg";

@customElement('l-home')
export default class LHome extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .home{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                padding: 9rem 1rem 4rem 1rem;
                gap: 30px;
                background-color: var(--dark-blue);
                color: #fff;
            }

            .home__image{
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                box-shadow: 2px 1px 134px -48px rgba(0,0,0,0.68);
            }

            .home__detail{
                display: flex;
                flex-direction: column;
                gap: 38px;
            }

            .detail__title{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .detail__title h1{
                margin: 0;
                font-family: PoppinsBlack;
                text-align: center;
            }

            .detail__title p{
                text-align: center;
                margin: 0;
                padding: 0;
                max-width: 700px;
            }

            .detail__assets{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 20px;
            }

            .assets__logo{
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                width: fit-content;
                padding: 8px;
                border-radius: 7px;
                transition: transform 1s;
                border: 1px solid var(--dark-blue);
            }

            .assets__logo:hover{
                transform: scale(1.1);
            }

            .assets__logo img{
                width: 55px;
                object-fit: cover;
            }

            @media (min-width: 1024px){
                .home{
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-evenly;
                    gap: 30px;
                    padding: 1rem;
                    height: calc(100% + 75px);
                }

                .home__image{
                    width: 400px;
                    height: 400px;
                }
                
                .home__detail{
                    gap: 86px;
                }

                .detail__assets{
                    justify-content: flex-start;
                }
                
                .detail__title{
                    align-items: flex-start;
                }

                .detail__title h1{
                    font-family: PoppinsBlack;
                    font-size: 50px;
                }

                .detail__title p{
                    text-align: left;
                    font-size: 18px;
                }
            }

            @media (min-width: 1200px){
                .home{
                    gap: 0px;
                }
            }
        `;
    }

    private goToPage(url: string): void{
        window.open(url, "_blank");
    }

    private generateAssets(logo: string, background: string, size: string, url: string ,image?: string){
        return html`
            <div class="assets__logo" style="background-color: ${background}" @click=${() => {this.goToPage(url)}}>
                ${image != undefined ? html`<img src=${image as string}>` : ``}
                <img src=${logo} style="width: ${size}">
            </div>
        `;
    }

    protected override render(): TemplateResult{
        return html`        
            <style>
                .home__image{
                    background-image: url(${ME});
                }
            </style>
            <div class="home">  
                <!-- <div class="home__image"></div> -->
                 <img class="home__image" src=${ME}> 
                <div class="home__detail">
                    <div class="detail__title">
                        <h1>Desenvolvedor Web</h1>
                        <p>Construo interfaces modernas, rápidas e intuitivas, sempre focadas em performance, acessibilidade e boas práticas. Transformo ideias em projetos reais com código limpo, organização e atenção aos detalhes que fazem a diferença na experiência do usuário.</p>
                    </div>
                    <div class="detail__assets">
                        ${this.generateAssets(GITHUB_LOGO, "#000", "43px", "https://github.com/LeonardoLAraujo")}
                        ${this.generateAssets(LINKEDIN, "#fff", "123px", "https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo-2653b91b9/")}
                        ${this.generateAssets(NPM, "#fff", "50px", "https://www.npmjs.com/~leonardo_leal")}
                    </div>
                </div>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'l-home': LHome
   }
}
