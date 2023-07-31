import { html, css, LitElement } from 'lit';

export class PruebaInputform extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--prueba-inputform-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hola';
    this.name = '';
  }

  setName() {
    this.name = this.shadowRoot.querySelector('#name').value;
  }

  clearName() {
    this.name = '';
  }

  render() {
    return html`
      <h2>${this.title} ${this.name}</h2>
      <input type="text" name="name" id="name" placeholder="Nombre" .value="${this.name}" />
      <button @click="${this.setName}">Set Name</button>
      <button @click="${this.clearName}">Clear Name</button>
    `;
  }
}
