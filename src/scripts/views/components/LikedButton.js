class LikedButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button aria-label="unlike this movie" id="likeButton" class="like">
          <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    `;
  }
}

customElements.define('liked-button', LikedButton);
