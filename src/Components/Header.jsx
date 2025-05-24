import PropTypes from "prop-types";
import { useState } from "react";
import { useStore } from "react-redux";
const Header = ({onSearch})=> {
    const [serchmovie,setsearchMovie]=useState([])

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
        className="w-full p-4 bg-black flex items-center justify-between ">
            <div className="flex items-center space-x-4 ">
                <h1 className="text-[40px] uppercase font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-5">
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