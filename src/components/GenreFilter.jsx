import { useSearchParams } from "react-router-dom";

export default function GenreFilter({ genres }) {
 const[searchParams, setSearchParams] = useSearchParams()
const activeGenre = searchParams.get("genre") || ""
const handleSelect = (id) =>{
    setSearchParams(id ? {genre: id} :{}) 
  }
  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre.id || 'all'}
          type="button"
          className={'genre-btn' + (genre === activeGenre ? ' active' : '')}
          onClick={()=> handleSelect(genre.id)}
       >
          {genre.label}
        </button>
      ))}
    </div>
  );
}
