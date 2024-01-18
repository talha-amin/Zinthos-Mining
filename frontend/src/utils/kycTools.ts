import axios from "axios";
const apiURL = "https://fennec-backend.vercel.app";
// const apiURL = "http://localhost:8000";

export const getApplicantId = async (account:string) => {
    try {
      const _data = await axios.get(`${apiURL}/api/getApplicant/`, {
        params: {
          externalUserId: account,
        },
      });

      return _data.data.applicantId;
    } catch (error) {
      console.log("🚀", error);
    }
  };

  export const applicantStatus = async (id:string) => {
    try {
      const _data = await axios.get(`${apiURL}/api/getapplicantstatus/`, {
        params: {
          applicantId: id,
        },
      });
      return _data.data.reviewStatus;
    } catch (error) {
      console.log("🚀", error);
      return ""
    }
  };
  export const kycVerification = async (userAddress:string,setAccessToken:React.Dispatch<React.SetStateAction<string>>) => {
    let obj = {
      externalUserId: userAddress,
    };
    let accessToken = ""
    try {
      console.log("STatring.........");
      const _data:any = await axios.post(`${apiURL}/api/kycverification/`, obj);
      if (_data.status === 200) {
        // console.log("CHECKK", _data.response.token);
        accessToken = _data.response.token as string;
        setAccessToken(accessToken);
        console.log("ENDED.........");
        
      }
      return accessToken;
    } catch (err) {
      
      console.log(err);
      return accessToken;
    }
  };

  export const generateAccessToken = async (account:string) => {
    let obj = {
      externalUserId: account,
    };
    try {
      const _data:any = await axios.post(`${apiURL}/api/generateAccessToken/`, obj);
      console.log("CHECKK generateAccessToken",_data);

      return _data.data.token;
    } catch (err) {
      console.log(err);
    }
  };