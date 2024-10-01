import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuraio } from '../../models/usuraio';
declare var M: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  providers:[UsuarioService]
})
export class UsuariosComponent {

constructor(public usuarioServicio:UsuarioService){}
ngOnInit():void{

}
agregarUsuario(from?:NgForm){
  this.usuarioServicio.PostUsuario(from?.value).subscribe(res=>{
    this.resetForm(from);
    M.toast({html:'Usuario Agregado Correctamente'})
  });
}
resetForm(form?:NgForm){
  if (form){
    form.reset();
    this.usuarioServicio.selectedUser = new Usuraio();
  }
}
}
