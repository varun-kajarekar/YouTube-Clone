import  axios  from "axios";


const api_key = process.env.RAPID_API_KEY;
const Base_Url = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: Base_Url,
    params: {
      regionCode: 'IN',
      maxResults: '20',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '31ec441431mshe7e263c1e436f8cp17841fjsn4e03c669fcec',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromApi= async(url)=>{
    console.log(api_key)
    const {data} = await axios.get(`${Base_Url}/${url}`,options)
    return data;
  }