import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.fromTo(".photo", 
      {
        opacity: 0,
        x: -100,
      }, 
      {
        opacity: 1,
        duration: 3,
        x: 0
      }
    );

    gsap.fromTo(".button-hero", 
      {
        x: 100,
        opacity: 0,
      }, 
      {
        x: 0,
        opacity: 1,
        duration: 3,
      }
    );
  }
  
  

}
