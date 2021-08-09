import './index.js';

class LoginPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div id="login_page">
                <h1>${name}</h1>
                <form id="login_form">
                  <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter your password..." class="input" required />
                  <button class="main-btn">Login</button>
                </form>
            </div>
        `;
  }
}

customElements.define('login-page', LoginPage);
