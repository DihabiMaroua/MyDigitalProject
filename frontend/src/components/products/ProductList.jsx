import PropTypes from 'prop-types'
import ProductsListItem from './ProductListItem'

/**
 * @param {Array} products
 * @returns {React.Component} ProductList
 */

function ProductsList ({ products }) {
  if (!products || products.length < 1)  {
    return 'No data'
  }
  return (
    <div className="list-container">
      <h2>Sélection pour la fête des pères</h2>
      <div className="list">
        {
          products.map(product => (
            <ProductsListItem key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductsList
