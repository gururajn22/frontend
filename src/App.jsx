import "./App.css";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import CreateData from "./components/CreateData";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Details from "./components/Details";
function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/todo/create" element={<CreateData/>}></Route>
    <Route path="/todo/edit/:id" element={<Edit/>}></Route>
    <Route path="/todo/delete/:id" element={<Delete/>}></Route>
    <Route path="/todo/details/:id" element={<Details/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
