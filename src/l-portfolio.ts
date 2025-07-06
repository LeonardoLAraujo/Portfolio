import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, query } from 'lit/decorators.js';
import "./pages/l-menu";
import "./pages/l-home";
import "./pages/l-curriculum";
import "./pages/l-about";
import "./pages/l-project";
import "./pages/l-contact";
import LCurriculum from './pages/l-curriculum';
import LHome from './pages/l-home';
import LAbout from './pages/l-about';
import LProject from './pages/l-project';
import LContact from './pages/l-contact';

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

    @query("l-project")
    lProject!: LProject;

    @query("l-contact")
    lContact!: LContact;

    protected override render(): TemplateResult{
        return html`
            <l-menu .referencePortfolio=${this}></l-menu>
            <l-home></l-home>
            <l-about></l-about>
            <l-project></l-project>
            <l-curriculum></l-curriculum>
            <l-contact></l-contact>
        `;
    }
}

declare global{
   interface HTMLElementTagNameMap{
        'l-portfolio': LPortfolio
   }
}