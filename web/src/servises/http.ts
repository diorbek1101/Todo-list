const baseURL = 'http://localhost:4000/api';

export const http = (suffixURL: string) => fetch(baseURL + suffixURL);{
 
};