import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor(private apiService: ApiService) { }

  onSubmit(usuarioForm: any) {
    const usuario = {
      username: usuarioForm.value.username,
      email: usuarioForm.value.email,
      telephone: usuarioForm.value.telephone,
      password: usuarioForm.value.password
    };

    this.apiService.createUsuario(usuario).subscribe(response => {
      console.log('Usuario creado:', response);
    });
  }
}
