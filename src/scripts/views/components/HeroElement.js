class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h1>
          Bikin perut bahagia, <br />
          dirumah aja
        </h1>
        <p>#PastiAdaJalan</p>
      </div>
    </div>
      `;
  }
}

customElements.define("hero-element", HeroElement);
