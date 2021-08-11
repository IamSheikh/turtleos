class DesktopPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="apps">
          <div id="app-1" class="apps">
            <i class="fa fa-terminal icon"></i>
            <h3 class="app-text">Terminal</h3>
          </div>
        </div>
      `;
  }
}

customElements.define('desktop-page', DesktopPage);
