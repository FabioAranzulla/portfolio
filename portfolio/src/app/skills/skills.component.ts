import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  logosFe: string [] = [
    '../../assets/img/html.png',
    '../../assets/img/css.png',
    '../../assets/img/javascript.png',
    '../../assets/img/bootstrap.png',
    '../../assets/img/angular.png',
    '../../assets/img/typescript.png',
  ]

  logosBe: string [] = [
    '../../assets/img/node.png',
    '../../assets/img/mysql.png',
    '../../assets/img/oracle.png',
  ]

  otherTec: string [] = [
    'Sass',
    'Tailwind',
    'React',
    'PHP',
  ]

  constructor(){}



}
