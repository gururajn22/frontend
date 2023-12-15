import axios from 'axios';
import Backbuttons from './Backbuttons';
import Spinner from './Spinner';
import {  useState } from 'react';
import { useSnackbar } from 'notistack';
import {useParams,useNavigate} from 'react-router-dom'
const Delete = () => {
  const[loading,setLoading]=useState(false);
  const {id}=useParams();
  const navigate=useNavigate();
  const {enqueueSnackbar}=useSnackbar();
const handleDelete=()=>{
  setLoading(true);
  axios.delete(`http://localhost:4000/todo/${id}`).
  then(()=>{
   setLoading(false);
   enqueueSnackbar('Deleted successfully',{variant:'success'});
   navigate('/');
   
  }).catch((error)=>{
   console.log(error);
   setLoading(false);
   enqueueSnackbar('error',{variant:'error'});
  })
}
    

  return (
    <div>
      <Backbuttons/>
      <div className='flex justify-center flex-col text-center'>
      <h1>Delete page</h1>
      <p>Are you sure to delete this todo?</p>
      </div>
      {
        loading ? (<Spinner/>) :('')
      }
      <div className='text-center'>
      <button onClick={handleDelete} className='p-2 rounded-lg bg-yellow-500 mt-2'>press this to delete</button>
      </div>
    </div>
  )
}

export default Delete