class InstallPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <form id="install_form">
                <input type="text" id="username" name="username" placeholder="Enter your username..." class="input" required />
                <input type="password" id="userpassword" name="userpassword" placeholder="Enter your password..." class="input" required />
                <button class="main-btn">Install</button>
            </form>
        `;
  }
}

customElements.define('install-page', InstallPage);
