import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

//793c4a01
const api_url="http://www.omdbapi.com?apikey=793c4a01";
const movie1={
    "Title": "Dune",
    "Year": "2021",
    "imdbID": "tt1160419",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
};
function App(){
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    const searchMovies=async(title)=>{
        const response=await fetch(`${api_url}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovies(searchTerm)
    },[]);
    return(<div className='App'>
        <header className='header'>
            <div className='container'>
                <h1>YMovies</h1>
            </div>            
        </header>
        
        <nav id="navbar">
		    <div class="container">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Movies</a></li>
				<li><a href="#">Tv Series</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		    </div>
	    </nav>
        <div className='search'>
            <div className='container'>
            <input placeholder='Search for Movies' type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>  
            <button alt="search" className='btn' onClick={()=>searchMovies(searchTerm)}>
                Search
            </button>
            </div>
        </div>
        {
            movies?.length>0?(
            <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}                
            </div>):
            (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>
            )
        }
        <div id="socialbar">
            <li>
                <ul><a href='https://www.facebook.com/'><img src={require('./icons/fb.gif')}/></a></ul>
                <ul><a href='https://www.twitter.com/'><img src={require('./icons/twitter.gif')}/></a></ul>
                <ul><a href='https://www.instagram.com/'><img src={require('./icons/insta.gif')}/></a></ul>
                <ul><a href='https://www.gmail.com/'><img src={require('./icons/gmail.gif')}/></a></ul>
            </li>            
        </div>
        <footer id='main-footer'>
            <p>Copyright &copy; 2022 YMovies</p>
        </footer>
        
    </div>);
}
export default App;
