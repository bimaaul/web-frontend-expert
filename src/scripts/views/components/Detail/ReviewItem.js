class Review extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="review">
            <div class="circle"></div>
            <span>${this._review.review}</span>
        </div>
        <div class="sender">
            ${this._review.date} <br>
            by <b>${this._review.name}</b>
        </div>
    `;
  }
}

customElements.define('review-item', Review);
