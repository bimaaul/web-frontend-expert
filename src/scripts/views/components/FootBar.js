class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p>Copyright © 2020 - Food Hunt</p>`;
  }
}

customElements.define("foot-bar", FootBar);
