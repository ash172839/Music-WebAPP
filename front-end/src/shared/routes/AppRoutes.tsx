import { Route, Routes } from "react-router-dom";
import Login from "../../modules/user/pages/Login";
import Register from "../../modules/user/pages/Register";
import { Home } from "../../modules/music/pages/Home";
import { AddSong } from "@/modules/music/pages/AddSong";
import { Library } from "@/modules/music/pages/Library";

const AppRoutes = ()=>{
    return (<>
        <Routes>
            <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path = "/add-songs" element ={<AddSong/>} />
               <Route path = "/lib" element ={<Library/>} />
        </Routes>
    </>)

}

export default AppRoutes;