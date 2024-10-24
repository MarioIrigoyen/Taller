import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetDatosComponent } from './components/get-datos/get-datos.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetDatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
