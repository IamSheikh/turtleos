class InstallPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <form id="install_form" data-netlify="true" method="POST">
                <input type="text" id="name" name="name" placeholder="Enter your name..." class="input" required />
                <input type="text" id="username" name="username" placeholder="Enter your username..." class="input" required />
                <input type="password" id="userpassword" name="userpassword" placeholder="Enter your password..." class="input" required />
                <button class="main-btn">Install</button>
            </form>
        `;
  }
}

customElements.define('install-page', InstallPage);
