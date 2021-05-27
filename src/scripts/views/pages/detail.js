import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantDB-source';
import LikeButtonInitiator from '../../utils/likebutton-initiator';
import '../components/Detail/DetailRestaurant';

const Detail = {
  async render() {
    return `
      <div class="detailContainer"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { error, restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.detailContainer');

    if (!error) {
      const detailElement = document.createElement('detail-restaurant');
      detailElement.data = restaurant;
      detailContainer.prepend(detailElement);
    } else {
      detailContainer.innerHTML = 'Data gagal dimuat, silahkan refresh halaman.';
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
