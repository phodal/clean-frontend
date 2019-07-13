import { Component, EventEmitter, Input, Output } from '@angular/core';

export const NavBarMeta = {
  inputs: ['type'],
  outputs: ['click'],
  templateUrl: './navbar.component.html',
};

@Component({
  selector: 'app-navbar',
  inputs: NavBarMeta.inputs,
  outputs: NavBarMeta.outputs,
  templateUrl: NavBarMeta.templateUrl,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() type: string;
  @Output() click = new EventEmitter();

  constructor() {

  }

  clickEvent() {
    console.log('click');
    this.click.emit('click');
  }
}
