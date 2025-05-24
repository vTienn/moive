import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Movielist from './Components/Movielist'
import Searchmovie from './Components/Searchmovie'

function App() {

  const [movie, setMovie] = useState([])
  const [topmoive,setTopmovie]=useState([])
  const [searchmovie,setSearchMovie]=useState([])
  
  const handleSearch=async(searchVal)=>{
    setSearchMovie([]);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    }
   
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;

    const respon1 =await fetch(url,options)
    const data2 =  await respon1.json();
    setSearchMovie(data2.results || [] );
    console.log(searchmovie)
  }
  useEffect(()=>{
    const fetchTopmovie = async()=>{
     const options = {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
       }
     }
     const url= 'https://api.themoviedb.org/3/movie/top_rated'
     const respon1 =await fetch(url,options)
     const data2 =  await respon1.json();
     setTopmovie(data2.results );

   
   
   
   
    }
    fetchTopmovie();
   
     },[])

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
        const url = 'https://api.themoviedb.org/3/movie/popular'

        const response = await fetch(url, options)
        const data = await response.json()
        
        setMovie(data.results)
        console.log(movie);
        
        
       
      
    }

    fetchData()
  
  }, [])




  // console.log(movie);
 


  return (
    <div className='bg-black'>
      <Header onSearch={handleSearch}/>
      <Banner />
      {searchmovie.length >0 ? (<Searchmovie data={searchmovie} title={"Kết quả tìm kiếm: "} />):(<>
      <Movielist title={"Phim Hay"}  data={movie}/>
      <Movielist title={"Phim Đề Cử"}  data={topmoive}/>
      </>)}
      

    </div>
  )
}

export default App
