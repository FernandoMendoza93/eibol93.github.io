import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', // Selector del componente
  templateUrl: './app.component.html', // Ruta de la plantilla HTML asociada al componente
  styleUrls: ['./app.component.css'] // Rutas de los archivos de estilo CSS asociados al componente
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  characters: any[] = []; // Matriz para almacenar los personajes
  episodes: any[] = []; // Matriz para almacenar los episodios

  constructor(private http: HttpClient) { } // Inyección de dependencia del servicio HttpClient

  searchCharacters() {
    const charactersUrl = 'https://rickandmortyapi.com/api/character'; // URL de la API de Rick and Morty para personajes

    // Realizar solicitud HTTP GET a la API de Rick and Morty para personajes
    this.http.get(charactersUrl).subscribe((response: any) => {
      // Asignar los resultados de la API de personajes a la matriz de personajes
      this.characters = response.results;
      this.episodes = []; // Reiniciar la matriz de episodios al obtener nuevos personajes
    });
  }

  searchEpisodes() {
    const episodesUrl = 'https://rickandmortyapi.com/api/episode'; // URL de la API de Rick and Morty para episodios

    // Realizar solicitud HTTP GET a la API de Rick and Morty para episodios
    this.http.get(episodesUrl).subscribe((response: any) => {
      // Asignar los resultados de la API de episodios a la matriz de episodios
      this.episodes = response.results;
      this.characters = []; // Reiniciar la matriz de personajes al obtener nuevos episodios
    });
  }
}