import { Component, OnInit } from '@angular/core';
import { NavbarComponent, NavBarMeta } from '../navbar/navbar.component';

@Component({
  selector: 'app-clean-navbar',
  inputs: [...NavBarMeta.inputs],
  outputs: [...NavBarMeta.outputs],
  templateUrl: './clean-navbar.component.html',
  styleUrls: ['./clean-navbar.component.scss']
})
export class CleanNavbarComponent extends NavbarComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
