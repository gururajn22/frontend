import  { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbuttons from "./Backbuttons";
import Spinner from "./Spinner";

const Details = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/todo/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <Backbuttons />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center flex-col h-screen items-center gap-6">
          
          <h1 key={data._id}>Data id:{data._id}</h1>
          <div>Title:{data.title}</div>
          <div>Description:{data.description}</div>
          <div>status:{data.status}</div>
        </div>
      )}
    </div>
  );
};

export default Details;
