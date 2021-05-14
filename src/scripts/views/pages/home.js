import '../components/HeroElement';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <h1>Explore Restaurant</h1>
    `;
  },

  async afterRender() {
    // call after render
  },
};

export default Home;
