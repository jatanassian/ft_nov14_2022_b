require("dotenv").config();
const request = require("request");

const getMyLocation = () => {
  // Get my IP
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    // console.log(JSON.parse(body).ip);
    const ip = JSON.parse(body).ip;

    // Get my location info
    request(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`,
      (error, response, body) => {
        // console.log(JSON.parse(body));
        const json = JSON.parse(body);

        // Format the output
        console.log(
          `I live in ${json.city}, ${json.country_name}. Latitude ${json.latitude}, longitude: ${json.longitude}.`
        );
      }
    );
  });
};

// getMyLocation();

// Cleaner way
const getMyLocationNew = () => {
  getMyIP((ip) => {
    getMyLocationInfo(ip, (body) => {
      formatOutput(body, (string) => {
        console.log(string);
      });
    });
  });
};

const getMyIP = (callback) => {
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      // do something
    }
    callback(JSON.parse(body).ip);
  });
};

const getMyLocationInfo = (ip, callback) => {
  request(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`,
    (error, repsonse, body) => {
      if (error) {
        // ...
      }
      callback(JSON.parse(body));
    }
  );
};

const formatOutput = (body, callback) => {
  const string = `I live in ${body.city}, ${body.country_name}. Latitude ${body.latitude}, longitude: ${body.longitude}.`;

  callback(string);
};

getMyLocationNew();
