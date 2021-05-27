import FavoriteRestaurantIdb from '../../data/favorite-idb';
import '../components/RestaurantCard';

const Favorite = {
  async render() {
    return `
      <h1 class="title">Your Favorite Restaurant</h1>
      <div id="restaurant" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      const restaurantCardElement = document.createElement('restaurant-card');
      restaurantCardElement.data = restaurant;
      restaurantContainer.appendChild(restaurantCardElement);
    });
  },
};

export default Favorite;
