import { NavLink } from "react-router-dom";
import MenuComp from "../components/MenuComp";
import SearchBar from "../components/SearchBar";
//import bg from "../../public/cafeBG.jpg"

export default function Cafe() {
  return (
    <div className="bg-jails h-screen bg-opacity bg-center bg-no-repeat bg-cover relative ">
        <header className='text-center bg-black  font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN <span className="text-white text-4xl font-bold ">Jail</span> <span className='text-4xl font-bold text-orangeD1'>Cafe</span></header>
        <div className=" h-85% ">
          <SearchBar/>
        <MenuComp/>
        </div>
        {/* place order */}

        <NavLink to={"/cafe/confirmOrderCafe"} className ="bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center">Cart</NavLink>
    </div>
  )
}
