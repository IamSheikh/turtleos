class Desktop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h1>Desktop</h1>
      `;
  }
}

customElements.define('desktop', Desktop);
