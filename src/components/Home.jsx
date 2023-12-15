import { useEffect,useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {MdOutlineAddBox} from 'react-icons/md';
import Spinner from "./Spinner";
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';


const Home = () => {
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:4000/todo').then((res)=>{
            setData(res.data.data);
            console.log(res.data.data)
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[])
  return( 
  <div className="p-4">
    <h1 className="text-3xl my-8 mb-2">Progress tracker web based </h1>
    <Link to="/todo/create" className="flex items-center text-center">
    <MdOutlineAddBox className="text-sky-800 text-4xl mb-2 "/>
    <h1>Click the icon to create data</h1>
    </Link>
    {
        loading ? (<Spinner/>) :(
            <table className="w-full border-separate border-spacing">
             <thead>
               <tr>
                <th className="border border-slate-600 rounded-md">
                    id no
                </th>
                <th className="border border-slate-600 rounded-md">
                    title
                </th>
                <th className="border border-slate-600 rounded-md" >
                    description
                </th>
                <th  className="border border-slate-600 rounded-md">
                    status
                </th>
                <th  className="border border-slate-600 rounded-md">
                    settings
                </th>
               </tr>
             </thead>
             <tbody>
              {
                data.map((item,index)=>(
                    <tr key={item._id} className="h-8">
                        <td className="rounded-md text-center">
                            {index + 1}
                        </td>
                        <td className="rounded-md text-center">
                            {item.title}  
                        </td>
                        <td className="rounded-md text-center">
                            {item.description}
                        </td>
                        <td className="rounded-md text-center">
                            {item.status}
                        </td>
                        <td >
                            <div className="flex justify-center gap-2" >
                                <Link to={`/todo/details/${item._id}`}>
                                <MdSearch/>
                                </Link>
                                <Link to={`/todo/edit/${item._id}`}>
                                <MdModeEdit/>
                                </Link>
                                <Link to={`/todo/delete/${item._id}`}>
                                  <MdDelete/>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))
              }
             </tbody>

            </table>
        ) 
    }
  </div>

  )
};

export default Home;
