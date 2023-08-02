import React, { useEffect, useState } from 'react'
import { SideBar, Videos } from './'
import { FetchAllVideo } from '../utils/FetchFromApi'

function Feed() {
  const [categoryselected, setcategoryselected] = useState();
  const [Video, setVideo] = useState([]);
  var id = ""
  if (categoryselected) {
    id = `&videoCategoryId=${categoryselected}`
  }
  useEffect(() => {
    FetchAllVideo(`${id}`)
      .then((data) => { 
        setVideo(data.items);
        
      })
  }, [categoryselected])
  return (
    <div className="d-flex flex-column">
      <div className="overflow-auto sticky-top" style={{}}>
        <SideBar click={categoryselected} setClick={setcategoryselected} />
      </div>

      <div className="p-2">
        <Videos Video={Video}/>
      </div>

    </div>
  )
}

export default Feed;