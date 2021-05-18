import '../components/HeroElement';
import RestaurantDbSource from '../../data/restaurantDB-source';
import '../components/RestaurantCard';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <h1>Explore Restaurant</h1>
      <div id="restaurant" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const { error, restaurants } = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    if (!error) {
      restaurants.forEach((restaurant) => {
        const restaurantCardElement = document.createElement('restaurant-card');
        restaurantCardElement.data = restaurant;
        restaurantContainer.appendChild(restaurantCardElement);
      });
    }
  },
};

export default Home;
