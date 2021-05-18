import CONFIG from '../../globals/config';

class RestaurantCard extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
      <div class="city">Kota ${this._data.city}</div>
      <img src="${CONFIG.BASE_IMAGE_URL}/medium/${this._data.pictureId}" alt="Restaurant ${this._data.name}">
      <div class="container">
        <p class="rating">Rating: ${this._data.rating}</p>
        <h3 class="card__title">
          <a href="/#/detail/${this._data.id}">
            ${this._data.name}
          </a>
        </h3> 
        <p class="card__description">${this._data.description}</p> 
        <p class="text-right">
          <a href="/#/detail/${this._data.id}">Read More →</a>
        </p>
      </div>
    </div>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
