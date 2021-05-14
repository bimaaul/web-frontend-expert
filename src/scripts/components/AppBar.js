class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <a href="/" class="nav__brand">Food Hunt</a>
        <a tabindex="0" aria-label="menu" class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </a>
        <ul class="nav__links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/bimaaulia/">About Us</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("app-bar", AppBar);
