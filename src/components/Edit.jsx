import axios from 'axios';
import Backbuttons from './Backbuttons';
import Spinner from './Spinner';
import {useEffect} from 'react';
import { useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom'
const Edit = () => {
  const[title, setTitle]=useState('');
  const[description,setDescription]=useState('');
  const[status,setStatus]=useState('');
  const[loading,setLoading]=useState(false);
  const {id}=useParams();
  const navigate=useNavigate();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:4000/todo/${id}`).
    then((res)=>{
      setTitle(res.data.title);
      setDescription(res.data.description)
      setStatus(res.data.status);
      setLoading(false)
    }).catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[])
  const handleEdit=()=>{
    const input={
      title,
      description,
      status
    }
    setLoading(true);
    axios.put(`http://localhost:4000/todo/${id}`,input)
    .then(()=>{
      setLoading(false);
  navigate("/")
      
    }).catch((error)=>{
      console.log(error);
      alert('pls check')
      setLoading(false);
    })
  }
  console.log('ID:', id);
console.log('Title:', title);
console.log('Description:', description);
console.log('Status:', status);

  return (
    <div>
    <Backbuttons />
    {loading ? (
      <Spinner />
    ) : (
      <div className='flex justify-center items-center  h-screen flex-col gap-6'>
        <div>
          <label >Title:</label>
          <input
            type="text"
            value={title}
            className="border border-blue-950 ml-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            className="border border-blue-950 ml-2 "
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            className="border border-blue-950 ml-2 "
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button onClick={handleEdit} className='px-2 bg-yellow-300 rounded-lg mt-2'>Save</button>
        
      </div>
    )}
  </div>
);
};
export default Edit;