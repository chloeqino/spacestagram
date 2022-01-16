

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = '5LPyHXa8dRsc9nNGIKrNgon0e6fOg7zsCNX7AxeH';


export default {
  getApod(setdate) {
    return fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${setdate}`,{cache: "force-cache"}
      ).then(res => res.json()).then((data)=>{
          console.log(data);
          return data;
      });
  },
}