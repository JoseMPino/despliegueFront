import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuraio } from '../models/usuraio';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  selectedUser: Usuraio;
  usuarios:Usuraio[];
  readonly URL_API='https://despliegue-back.vercel.app/api/usuarios/';

  constructor(private http: HttpClient) {
    this.selectedUser = new Usuraio();
    this.usuarios=[];
  }
  getUsuarios(){
    return this.http.get(this.URL_API);
  }
  PostUsuario(Usuario:Usuraio){
    return this.http.post(this.URL_API, Usuario);
  }

  putUsuario(Usuario:Usuraio){
    return this.http.put(this.URL_API +  `/${Usuario._id}`,Usuario);//
  }

  deleteUsuario(_id: string) { // Solo se necesita el id, no todo lo del empleado
    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete
  }


}
