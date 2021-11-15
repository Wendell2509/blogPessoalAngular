import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

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

  //RECEBE TODOS OS TEMAS
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("https://blogpessoalwendellfranco.herokuapp.com/temas/all",this.token)
  }

  getByIdTema(id: number):Observable<Tema>{
    return this.http.get<Tema>(`https://blogpessoalwendellfranco.herokuapp.com/temas/${id}`,this.token)
  }

  //CRIA UM NOVO TEMA
  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>("https://blogpessoalwendellfranco.herokuapp.com/temas/save",tema,this.token)
  }

  //ATUALIZA O NOME DE UM TEMA
  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>("https://blogpessoalwendellfranco.herokuapp.com/temas/update",tema,this.token)
  }

  //DELETA UM TEMA E TODOS AS POSTAGENS DEPENDENTES DESSE TEMA
  deleteTema(id: number){
    return this.http.delete(`https://blogpessoalwendellfranco.herokuapp.com/temas/delete/${id}`,this.token)
  }

}
