class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <a href="#/home" class="nav__brand">Food Hunt</a>
        <button aria-label="menu" class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </button>
        <ul class="nav__links">
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/bimaaulia/" target="_blank">About Us</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
