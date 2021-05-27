class Badge extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `${this._data.name}`;
  }
}

customElements.define('badge-item', Badge);
