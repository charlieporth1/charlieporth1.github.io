function createHTML() {
    return `
<link rel="stylesheet" href="../css/navbar.css">
<div id="navbar" class="sticky">
  <div class="root-div-for-nav-bar">
    <a href="../index.html">Home</a>
    <a href="../pages/contact.html">Contact</a>
  </div>
</div>`
}

customElements.define('nav-bar', class extends HTMLElement {
    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
    }

    constructor() {
        super(); // always call super() first in the constructor.
        // Attach a shadow root to the element.
        this.create();
    }
    // connectedCallback() {
    //     this.create();
    // }
    create() {
        let navbar = window.document.createElement('nav-bar-inner');
        navbar.innerHTML = createHTML();
        navbar.nodeValue = createHTML();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(navbar.cloneNode());
    }
});
customElements.whenDefined('nav-bar').then(() => {
    console.log('nav-bar defined');
});
