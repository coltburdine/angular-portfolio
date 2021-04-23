import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer'

@Component({
  selector: 'app-developer-introduction',
  templateUrl: './developer-introduction.component.html',
  styleUrls: ['./developer-introduction.component.css']
})
export class DeveloperIntroductionComponent implements OnInit {
  developer: Developer = {
    id: 1,
    name: 'Colt Burdine'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
