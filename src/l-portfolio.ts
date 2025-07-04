import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, query } from 'lit/decorators.js';
import "./components/l-menu";
import "./components/l-home";
import "./components/l-curriculum";
import "./components/l-about";
import LCurriculum from './components/l-curriculum';
import LHome from './components/l-home';
import LAbout from './components/l-about';

@customElement('l-portfolio')
export default class LPortfolio extends LitElement{

    static override get styles(): CSSResult{
        return css``;
    }

    @query("l-curriculum")
    public lCurriculum!: LCurriculum;

    @query("l-home")
    public lHome!: LHome;

    @query("l-about")
    lAbout!: LAbout;

    protected override render(): TemplateResult{
        return html`
            <l-menu .referencePortfolio=${this}></l-menu>
            <l-home></l-home>
            <l-curriculum></l-curriculum>
            <l-about></l-about>
        `;
    }
}

declare global{
   interface HTMLElementTagNameMap{
        'l-portfolio': LPortfolio
   }
}