import React, { useEffect, useState } from 'react'
import { Videos } from './'
import { FetchSearchVideo } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const {searchTerm}= useParams();

  const [Video, setVideo] = useState([])

  useEffect(() => {
    FetchSearchVideo(`&q=${searchTerm}`)
      .then((data) => { setVideo(data.items) })
  }, [searchTerm])
  return (
    <div>
      <div className="d-flex flex-column">
      
        <div className="p-2">
        <span>Search result</span>
          <Videos Video={Video} />
        </div>

      </div>
    </div>
  )
}
export default SearchFeed