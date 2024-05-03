import PropTypes from 'prop-types'

function ProductsListItem ({ product }) {
  const { name, prix } = product.attributes
  return (
    <div className='card'>
      {
        <img src={imgUrl} />
      }
      <div className='card-body'>
        <h3>{name}</h3>
        <p>{prix}</p>
      </div>
    </div>
  )
}

ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductsListItem
