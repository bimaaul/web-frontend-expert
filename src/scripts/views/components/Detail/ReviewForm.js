import RestaurantDbSource from '../../../data/restaurantDB-source';

class ReviewForm extends HTMLElement {
  connectedCallback() {
    const id = this.attributes.id.value;
    this.render();
  }

  render() {
    this.innerHTML = `
        <form class="form">
            <div class="form__control">
                <input type="text" name="name" id="name" placeholder="Input name">
                <textarea name="name" id="review" cols="30" rows="10" placeholder="Type something"></textarea>
            </div>
            <div class="form__action">
                <button type="submit" id="submit">Submit</button>
            </div>
        </form>
    `;

    const submitBtn = this.querySelector('#submit');
    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');

    submitBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      if (nameInput.value === '' || reviewInput === '') return;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading';

      const data = {
        id: this.id,
        name: nameInput.value,
        review: reviewInput.value,
      };

      const { error, customerReviews } = await RestaurantDbSource.addReview(data);
      if (!error) {
        const reviewContainer = document.querySelector('#reviews');
        const detailElement = document.createElement('review-item');
        detailElement.review = customerReviews[customerReviews.length - 1];
        reviewContainer.prepend(detailElement);

        nameInput.value = '';
        reviewInput.value = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
      } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
        // eslint-disable-next-line no-alert
        alert('Review gagal ditambahkan');
      }
    });
  }
}

customElements.define('review-form', ReviewForm);
