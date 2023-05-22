import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (

    <div className='flex items-center justify-between p-2 md:p-5 border-b-2 border-slate-500 my-2 md:mx-5'>
      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
        <div className='w-[30%]'>
          <img src={item.image} alt="ItemImage" className='object-cover' />
        </div>

        <div className='md:ml-10 space-y-5 w-[100%] md:-[75%]'>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>

          <h1 className='text-slate-700 font-medium text-base'>{item.description.split(" ").splice(0, 15).join(" ") + "..."}</h1>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg text-green-600'>${item.price}</p>

            <button className='bg-red-200 hover:bg-red-400 transition duration-300 cursor-pointer rounded-full p-2 mr-3 group' onClick={removeFromCart}>
              <AiFillDelete className='text-red-800 group-hover:text-white' fontSize={22} />
            </button>

          </div>

        </div>
      </div>
    </div>
  );

};

export default CartItem;
