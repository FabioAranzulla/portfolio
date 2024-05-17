import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: {
    title: string, 
    img: string, 
    url: string, 
    technologies: string[],
    info: string 
  }[] = [
    { title: 'Sasso carta forbice', img: '../../assets/img/sassoCartaForbice.png', url: 'https://fabioaranzulla.github.io/sasso-carta-forbice/', technologies: ['HTML',' CSS',' Javascript'], info: 'sassoCartaForbice' },
    { title: 'Calcolatrice Apple', img: '../../assets/img/calcolatriceApple.png', url: 'https://fabioaranzulla.github.io/Calcolatrice-Apple/', technologies: ['HTML',' CSS',' Javascript'], info: 'calcolatriceApple' },
    { title: 'App meteo', img: '../../assets/img/appMeteo.png', url: 'https://fabioaranzulla.github.io/WeatherApp/', technologies: ['React',' Tailwind '], info: 'appMeteo' },
    { title: 'Netflix', img: '../../assets/img/netflix.png', url: '#', technologies: ['Angular',' Bootstrap ', ' Typescript'], info: 'netflix' },
    ];

  constructor(){}

}
