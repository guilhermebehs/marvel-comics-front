import { IAxiosConfig } from './../dto/IAxios';
import axios, { AxiosInstance } from 'axios';
import md5 from 'md5';
import { IComic } from '../dto/IComic';
import env from 'dotenv';



export default class ComicsService {

    #connection: AxiosInstance;
    #configs: IAxiosConfig;
    #privateKey: string;
    #publicKey: string;

 
    constructor(){

        env.config();
        this.#privateKey = process.env.REACT_APP_MARVEL_SECRET || '';
        this.#publicKey = process.env.REACT_APP_MARVEL_KEY || '';
        
        this.#configs = {
            baseURL: 'https://gateway.marvel.com/v1/public',
            timeout: 20000,
        }
        this.#connection = axios.create(this.#configs);

    }

    generateAuthParams(): any{
        const ts = new Date().getTime();
        const valueToDigest = ts+ this.#privateKey+this.#publicKey;
        const hash = md5(valueToDigest)
        return {ts,hash, apikey: this.#publicKey};
    }


    async getAll(limit:number=10,offset:number=0, orderBy="title"): Promise<Array<IComic>>{
        
       
         const authParams = this.generateAuthParams();
         const params = {limit, offset,orderBy, ...authParams};
         let comics: Array<IComic>=[];
        
         try{
           const result = await this.#connection.get('/comics',{params})
           comics =  result.data.data.results as Array<IComic> || [];
         }
         catch(err){
            console.log('erro')
            console.log(err)
         }
         
         return comics;
         
    }
}