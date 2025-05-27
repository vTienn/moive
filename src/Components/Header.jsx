import PropTypes from "prop-types";
import { useState } from "react";
import { useStore } from "react-redux";
import { Menu, X } from "lucide-react";
const Header = ({onSearch})=> {
    const [serchmovie,setsearchMovie]=useState([])
    const [menuOpen,setMenuOpen]=useState(false)

    // const onSearch=()=>{
    //     const filter=data.filter((item)=>{
            
    //             item.title.toLowerCase().includes(value.toLowerCase())
    
    //         setsearchMovie(filter)
            
    //     }
    //     )

    // }
    const [searchval,setSearchVal]=useState();
    const handleChange=async(e)=>{
        
        e.preventDefault();
        const SearchVal=e.target.value
        setSearchVal(SearchVal)
       
     
    

    }
   
        return (
            <>
           <>
        <div 
        style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}

        className="w-full p-4 bg-black flex items-center justify-between  ">
            
            <div className="flex items-center space-x-4 ">
                <h1 className="text-[40px] uppercase font-bold text-red-700">Movie</h1>
                <div className="sm:hidden ">
                <button onClick={()=>{setMenuOpen(!menuOpen)}}>
                    {menuOpen ? <X className="text-white"/> :<Menu className="text-white"/>}
                </button>
            </div>
                <nav className="hidden sm:flex items-center space-x-5">
                    <a href="#" className="text-[20px] text-amber-50">
                        Home
                    </a>
                    <a href="#" className="text-[20px] text-amber-50">
                        Contact
                    </a>
                    <a href="#" className="text-[20px] text-amber-50">
                        More Info
                    </a>
                </nav>
            </div>
            {/* menudropdown */}
           {menuOpen && (<nav className="absolute top-[72px] left-0 right-0 bg-black flex flex-col items-start p-4 space-y-3 sm:hidden">
                    <a href="#" className="text-[20px] text-amber-50">
                        Home
                    </a>
                    <a href="#" className="text-[20px] text-amber-50">
                        Contact
                    </a>
                    <a href="#" className="text-[20px] text-amber-50">
                        More Info
                    </a>
                    </nav>)}
            
          

            <div className="flex items-center justify-between ">
                <input  onChange={handleChange}
                placeholder="Search" 
                type="text"
                className="p-3 bg-amber-50 space-x-4" />
                <button onClick={()=>{onSearch(searchval)}} className="bg-red-600 space-x-4 ml-4 p-2 rounded">Search</button>
            </div>
        </div>
        </>
            
            </>
        )


}

Header.propTypes = {
    
    onSearch:PropTypes.func,
  };

export default Header;