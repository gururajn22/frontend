import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Backbuttons from "./Backbuttons";
import {useSnackbar} from 'notistack'
const CreateData = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const {enqueueSnackbar}=useSnackbar();

  const handleData = () => {
    const data = {
      title,
      description,
      status,
    };
    setLoading(true);
    axios.post("http://localhost:4000/todo", data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        enqueueSnackbar('created successfully',{variant:'success'})
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar('error',{variant:"error"})
      });
  };

  return (
    <div>
      <Backbuttons />
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex justify-center items-center  h-screen flex-col gap-6'>
          <div >
            <label className="gap-3">Title:</label>
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
              className="border border-blue-950  ml-2"
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
              className="border border-blue-950  ml-2"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <button onClick={handleData} className="px-2 bg-yellow-300 rounded-lg mt-2">Save</button>
        </div>
      )}
    </div>
  );
};

export default CreateData;
