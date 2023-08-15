import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

export const FetchAllVideo = async (url) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&chart=mostPopular&&maxResults=25&regionCode=IN&key=${API_KEY}${url}`
    
  );
  
  return data;
};
export const FetchSearchVideo = async (url) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&key=${API_KEY}&maxResults=25${url}`

  );

  return data;
};
export const FetchVideoDetails = async (url) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&key=${API_KEY}&id=${url}`  );

  return data;
};
export const FetchchannelsDetails = async (url) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&key=${API_KEY}&id=${url}`  );

  return data;
};

export const FetchSubDetails = async (session,channelId) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer " + session.provider_token,
    },
  };
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=30&forChannelId=${channelId}&mine=true&key=${API_KEY}`,
    options
  );

  return data;
};

export const AddSubscriber = async (session, channelId) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer " + session.provider_token
    }
  };
  const { data } = await axios.post(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&key=${API_KEY}`,
    {
      snippet: {
        resourceId: {
          kind: "youtube#channel",
          channelId: `${channelId}`,
        },
      },
    },
    options
  );

  return data;
};

export const RemoveSubscriber = async (session,Id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer " + session.provider_token,
    },
  };
  const { data } = await axios.delete(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?id=${Id}&key=${API_KEY}`,
    options
  );

  return data;
};

export const GetAllsubscriptions = async (session) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer " + session.provider_token,
    },
  };
  const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=30&mine=true&key=${API_KEY}`,options)

  return data;
};


export const GetLikesubscriptions = async (session) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer " + session.provider_token,
    },
  };
  const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&myRating=like&maxResults=25&key=${API_KEY}`,options)

  return data;
};






