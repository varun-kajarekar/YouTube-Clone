import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState('')
    const navigate = useNavigate();

    const Handlesubmit=(e)=>{
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setsearchTerm('')
        }
    }
    return (
        <div class="search-container">
            <form onSubmit={Handlesubmit}>
                <input class="search expandright" id="searchright" type="search" placeholder="Search" onChange={(e)=>{setsearchTerm(e.target.value)}} />
                <label class="button searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
            </form>
        </div>
    )
}

export default SearchBar