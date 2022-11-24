require("dotenv").config();
const request = require("request-promise-native");

const getMyLocation = () => {
  // Get My IP
  request("https://api.ipify.org/?format=json")
    .then((response) => JSON.parse(response).ip)
    .then((ip) => {
      return request(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
      );
    })
    .then((body) => JSON.parse(body))
    .then((object) => {
      return `I live in ${object.city}, ${object.country_name}. Latitude ${object.latitude}, longitude: ${object.longitude}.`;
    })
    .then((string) => console.log(string));
};

// getMyLocation();

// Cleaner way

const getMyLocationNew = () => {
  getMyIP()
    .then((response) => JSON.parse(response).ip)
    .then((ip) => getMyInfo(ip))
    .then((json) => JSON.parse(json))
    .then((object) => formatOutput(object))
    .then((string) => console.log(string))
    .catch((error) => console.log(error))
    .finally();
};

const getMyIP = () => {
  return request("https://api.ipify.org/?format=json");
};

const getMyInfo = (ip) => {
  return request(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
  );
};

const formatOutput = (object) => {
  return `I live in ${object.city}, ${object.country_name}. Latitude ${object.latitude}, longitude: ${object.longitude}.`;
};

getMyLocationNew();

// Async / await
const getMyLocationAsync = async () => {
  try {
    const ip = await getMyIP();

    const body = await getMyInfo(ip);
    // format output..
  } catch (error) {
    console.log(error);
  } finally {
    // do something
  }
};
