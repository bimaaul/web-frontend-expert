import "./RestaurantCard";
import * as data from "../data/DATA.json";

const restaurants = data.restaurants;

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = "";
    restaurants.forEach((restaurant) => {
      const restaurantCardElement = document.createElement("restaurant-card");
      restaurantCardElement.data = restaurant;
      this.appendChild(restaurantCardElement);
    });
  }
}

customElements.define("restaurant-list", RestaurantList);
