import  axios  from "axios";


const Base_Url = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: Base_Url,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '31ec441431mshe7e263c1e436f8cp17841fjsn4e03c669fcec',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromApi= async(url)=>{
    
    const {data} = await axios.get(`${Base_Url}/${url}`,options)
    console.log(`${Base_Url}/${url}`)
    return data;
  }