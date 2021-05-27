import CONFIG from '../../../globals/config';
import './ReviewItem';
import './BadgeItem';
import './MenuItem';
import './ReviewForm';

class Detail extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>${this._data.name} - ${this._data.city}</h2>    
      <div class="detail">
        <div class="poster">
          <img src="${CONFIG.BASE_IMAGE_URL}/medium/${this._data.pictureId}" alt="restaurant picture">
        </div>
        <div class="information">
          <h3>Information</h3>
          <h4>Address</h4>
          <p>${this._data.address}</p>
          <h4>Categories</h4>
          <div id="categories" class="categories"></div>
          <h4>Rating</h4>
          <p>${this._data.rating}</p>
          <div class="menus">
            <div class="foods">
              <h4>Foods</h4>
              <div id="foods"></div>
            </div>
            <div class="drinks">
              <h4>Drinks</h4>
              <div id="drinks"></div>
            </div>
          </div>
        </div>
      </div>
      <h3>Description</h3>
      <p>${this._data.description}</p>  
      <h3>Review</h3>
      <review-form id=${this._data.id}></review-form>
      <div id="reviews" class="reviews"></div> 
    `;

    const reviewsContainer = this.querySelector('#reviews');
    this._data.customerReviews.reverse().forEach((review) => {
      this.renderReview(review, reviewsContainer);
    });

    const categoriesContainer = this.querySelector('#categories');
    this._data.categories.forEach((categorie) => {
      this.renderBadge(categorie, categoriesContainer);
    });

    const foodsContainer = this.querySelector('#foods');
    this._data.menus.foods.forEach((food) => {
      this.renderMenu(food, foodsContainer);
    });

    const drinksContainer = this.querySelector('#drinks');
    this._data.menus.drinks.forEach((drink) => {
      this.renderMenu(drink, drinksContainer);
    });
  }

  renderReview(review, container) {
    const detailElement = document.createElement('review-item');
    detailElement.review = review;
    container.appendChild(detailElement);
  }

  renderBadge(data, container) {
    const detailElement = document.createElement('badge-item');
    detailElement.data = data;
    container.appendChild(detailElement);
  }

  renderMenu(data, container) {
    const detailElement = document.createElement('menu-item');
    detailElement.data = data;
    container.appendChild(detailElement);
  }
}

customElements.define('detail-restaurant', Detail);
