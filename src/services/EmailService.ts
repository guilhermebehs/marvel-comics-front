import { IAxiosConfig } from './../dto/IAxios';
import env from 'dotenv';
import axios, { AxiosInstance } from 'axios';
import { IComic } from '../dto/IComic';




export default class EmailService{
    
    #connection: AxiosInstance;
    #configs: IAxiosConfig;

    constructor(){
        env.config();

        const url= process.env.REACT_APP_BACK_URL || '';
        const port = process.env.REACT_APP_BACK_PORT || 3000;
          
        const baseURL = url + ':'+port

        this.#configs = {
            baseURL,
            timeout: 20000,
        }
        this.#connection = axios.create(this.#configs);
    }

    createBody(comics: Array<IComic>): string{

        const list = comics.map((comic)=> {
           const link= comic.urls.length > 0 ? comic.urls[0].url : '';
           return '<li><a href="'+link+'">'+comic.title+'</a> </li>'
        })

        let body = 
              '<p>Ola, </p>' +
              '<br/>' + 
              '<p>Seguem os links das hqs solicitadas:</p>' +
              '<ul>'+
                list.join('') +
              '</ul>'+
              '<br/>' +
              '<footer>Agradecemos a preferência!</footer>'
              
        return body;
               
    }


     send(receiver: string, comics: Array<IComic>){
         
        const body= this.createBody(comics);
        const data = {body, receiver, subject: 'HQs Marvel'};
        try{
          this.#connection.post('/sendMail',data);
        }
        catch(e){
            console.log('Erro ao enviar email!');
        }
    }
}