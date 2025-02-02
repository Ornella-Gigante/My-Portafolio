import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit {

  public title:string; 
  public subtitle: string; 
  public github:string; 


  constructor(){

    this.title = "Ornella Sofía Gigante";
    this.subtitle = "Software Developer";
    this.github ="https://github.com/Ornella-Gigante";


  }

  ngOnInit(): void {
      
  }

}
