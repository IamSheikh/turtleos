import './index.js';

class LoginPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div id="login_page">
                <h1>${username}</h1>
                <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter your password..." class="input" required />
                <button class="main-btn">Login</button>
            </div>
        `;
  }
}

customElements.define('login-page', LoginPage);
