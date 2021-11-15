import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  //RECEBE TOKEN
  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  //ATUALIZA O TOKEN
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  //RECEBE TODAS AS POSTAGENS
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>("https://blogpessoalwendellfranco.herokuapp.com/postagens/all",this.token)
  }

  //REALIZA POSTAGEM
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("https://blogpessoalwendellfranco.herokuapp.com/postagens/save",postagem,this.token)
  }

}
