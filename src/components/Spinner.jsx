import { IoIosRefresh } from 'react-icons/io';
const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <IoIosRefresh className="text-blue-500 animate-spin" size={60} />
    </div>
  )
}

export default Spinner