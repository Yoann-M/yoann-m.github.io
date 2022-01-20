const topbarTemplate = document.createElement('template');
topbarTemplate.innerHTML = `
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <slot name="title"></slot>
    </div>
    <div class="uk-navbar-center">...</div>
    <div class="uk-navbar-right">...</div>
</nav>
`;

class TopBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(topbarTemplate.content.cloneNode(true));
    }
}

window.customElements.define('top-bar', TopBar);

// -----------------------------------------------------------
// OTHER EXEMPLE
// class WhatsUp extends HTMLElement {

//     constructor() {
//         super();
//         this.innerHTML = `<button>Sup?</button>`;
//         const button = this.querySelector("button");
//         button.addEventListener("click", this.handleClick);
//     }

//     handleClick(e) {
//         alert("Sup?");
//     }

// }

// window.customElements.define('whats-up', WhatsUp);