
import PropTypes from 'prop-types';


const Cart = ({ totalCredit, selectCard }) => {


  return (
    <div className='w-[300px] h-[300px] border '>
      <h1 className=' border'>Credit Hour Remaining {totalCredit} hr</h1>
      <h1> Course Name</h1>
      <div>
      <ol className="list-decimal pl-4">
  {selectCard.map((list) => (
    <li key={list.id} className="mb-2 px-3  text-justify pr-2">
      {list.Title}
    </li>
  ))}
</ol>

      </div>
    </div>
  );
};

Cart.propTypes = {
  totalCredit: PropTypes.number.isRequired,
  selectCard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Title: PropTypes.string.isRequired,

    })
  ).isRequired,
};

export default Cart;
