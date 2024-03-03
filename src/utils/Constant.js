export const photoURL = "https://avatars.githubusercontent.com/u/131537713?v=4";
export const Logo_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers:{
        accept: "application/json",
        Authorization: "Bearer"+process.env.REACT_APP_TMDB_KEY,
        
    },
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const Supported_Lang = [{identifier:"en" , name:"English"},{identifier:"hindi" , name:"Hindi"},{identifier:"spanish" , name:"Spanish"}];

export const openAI_Key = "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"