import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  personalDetails = {
    name: 'Daniel Ramirez',
    email: 'danielrg0322@gmail.com',
    location: 'Colombia, La Estrella',
    experience: 'None',
  };

  technologies = [
    'Typescript',
    'Flutter',
    'Angular2+',
    'Mysql',
    'MongoDB',
    'Adobe XD',
    'Google Cloud',
    'Git',
    'Go',
  ];
}
