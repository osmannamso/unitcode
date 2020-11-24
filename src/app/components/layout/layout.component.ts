import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  now: string;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1000);
  }

}
