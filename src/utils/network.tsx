import axios from "axios";

const baseURL =
  "https://dasara23.captain.archik.in/nc/mysuru_dasara_23_t46r/api/v1/";
const Bearer =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNyaXNoZXNoQGFyY2hpay5pbiIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoxLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE2OTU1MTIxOTJ9.XcRuT8hP9TOyNUUGmHTcNzWaSkb6_6wdqcGHemngdwc";

export default async function getApiData(subUrl: string) {
  console.log(subUrl);
  try {
    const response = await axios.get(baseURL + subUrl, {
        headers: {
            'xc-auth': Bearer, 
            'Content-Type': 'application/json', 
          }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  }
   catch (error) {
   
  }
}


export async function getExternalData(subUrl: string) {
  console.log(subUrl);
  try {
    const response = await axios.get(subUrl, {
       
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  }
   catch (error) {
   
  }
}
