import  axios  from "axios";

  const options = {
    method: 'GET',
  };
  export const FetchAllVideo= async(url)=>{
    const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&chart=mostPopular&&maxResults=25&regionCode=IN&key=AIzaSyAaVKiY4qRZ0l5qRydflA4J7GY92afBOFk${url}`,options)
    return data;
  }
  export const FetchSearchVideo= async(url)=>{
    const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&key=AIzaSyAaVKiY4qRZ0l5qRydflA4J7GY92afBOFk&maxResults=25${url}`,options)
    return data;
  }
  export const FetchVideoDetails= async(url)=>{
    const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyAaVKiY4qRZ0l5qRydflA4J7GY92afBOFk&id=${url}`,options)
    return data;
  }
  export const FetchchannelsDetails= async(url)=>{
    const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&key=AIzaSyAaVKiY4qRZ0l5qRydflA4J7GY92afBOFk&id=${url}`,options)
    return data;
  }

  export const FetchSubDetails= async(session)=>{
    const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + session.provider_token
      }
    };
    const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=30&mine=true&key=AIzaSyAaVKiY4qRZ0l5qRydflA4J7GY92afBOFk`,options)
    return data;
  }


