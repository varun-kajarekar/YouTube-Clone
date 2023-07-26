import React, { useEffect, useState } from 'react'
import { SideBar, Videos } from './'
import { FetchFromApi } from '../utils/FetchFromApi'

function Feed() {

  const [categoryselected, setcategoryselected] = useState('All');
  const [Video, setVideo] = useState([])

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${categoryselected}`)
      .then((data) => { setVideo(data.items) })
  }, [categoryselected])



  console.log(Video)

  return (
    <div className="d-flex flex-column">
      <div className="overflow-auto sticky-top" style={{}}>
        <SideBar click={categoryselected} setClick={setcategoryselected} />
      </div>

      <div className="p-2">
        <Videos Video={Video} />
      </div>
    </div>
  )
}

export default Feed;