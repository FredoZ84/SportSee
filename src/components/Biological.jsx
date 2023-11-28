import PropTypes from 'prop-types'

function quantityFormat(quantity, type) {
  let formatting
  if (type === 'kCal') {
    formatting = quantity / 1000
    return formatting.toString().replace('.', ',')
  } else {
    formatting = quantity
    return formatting
  }
}

function Biological({ name, icon, definitionIcon, quantity, type }) {
  return (
    <li>
      <div className="iconFrame">
        <img src={icon} alt={definitionIcon} />
      </div>
      <p>
        <span className="biological_data">
          {quantityFormat(quantity, type) + type}
        </span>
        <br />
        <span className="biological_name">{name}</span>
      </p>
    </li>
  )
}

export default Biological

Biological.propTypes = {
  /*name: PropTypes.oneOf(['calories', 'proteines', 'glucides', 'lipides'])
    .isRequired,*/
  quantity: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  definitionIcon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
