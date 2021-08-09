class LoginPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h1>Login Page</h1>
        `;
  }
}

customElements.define('login-page', LoginPage);
