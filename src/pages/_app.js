import { CartContext, useCartState } from '../hooks/use-cart.js';

import '../styles/globals.scss'

function MyApp({ Component, pageProps, games }) {
  const cart = useCartState({ games });
  return (
    <CartContext.Provider value={cart}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

MyApp.getInitialProps = async function () {
  const response = await fetch(`https://www.giantbomb.com/api/games/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&sort=original_release_date:desc&filter=original_release_date:2016-01-01|2021-05-17&platforms=145,146&field_list=id,name,image`);
  const { results } = await response.json();

  return {
    games: results.map(game => {
      return {
        ...game,
        price: 60
      }
    })
  };
};

export default MyApp
