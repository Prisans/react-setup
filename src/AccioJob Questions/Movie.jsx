import React,{useState,useEffect,useRef} from 'react'

const Movie = () => {
    const [movie, setMovie] = useState({});
    const [text, setText] = useState("");
    const [query, setQuery] = useState("");
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const timerRef = useRef(null)
  
    const API_URL = `https://www.omdbapi.com/?apikey=99eb9fd1&t=${text}`;
  
    function fetchMovie() {
        console.log("enteredd")
      fetch(API_URL)
        .then(res => res.json())
        .then(data =>(data.Response === "False"?setError(data.Error):(setMovie(data),setError(""))))
        .catch((err) => setError(err.Error)).finally(()=>setLoading(false))
    }

   function debounce(fn,delay){
        
        return ()=>{
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(()=>{
                fn()
            },delay)
        }
    }

    const debounceFuntion = debounce(fetchMovie,1000)
  
    useEffect(() => {
      debounceFuntion()
    // fetchMovie()
    }, [text]);
  
    function handleClick() {
      setQuery(text);
    }
  
  
    return (
      <div>
         <h1>Search Movie</h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button onClick={handleClick}>Search</button>
  
        {!loading && !error && <div>
          <ul>
            <li>
              {`${movie.Title} (${movie.Year})`}
            </li>
              <img src={movie.Poster}/>
          </ul>
  
          </div>}
        {error && <div>
          <p>{error}</p>
          </div>}
        
        
      </div>
    );
}

export default Movie