
import { faLinkedin, faInstagram, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  iconLinkedin = faLinkedin
  iconInstagram = faInstagram
  iconFigma = faFigma
  iconGithub = faGithub

  numeroVersao: any = packageJson.version
  nomeAutor: any = packageJson.actorName

  constructor() { }

  ngOnInit() {

  }

}
