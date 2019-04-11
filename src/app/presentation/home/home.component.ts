import { Component, OnInit } from '@angular/core';
import { GetAllElephantsUsecase } from '../../data/repository/elephant-web-repository/usecases/get-all-elephants.usecase';
import { ElephantModel } from '../../core/domain/elephant.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elephants: any[];

  constructor(private getAllElephants: GetAllElephantsUsecase) {
  }

  ngOnInit() {
    this.elephants = [];
    this.getAllElephants.execute(null).subscribe((value: ElephantModel) => {
      this.elephants.push(value);
    });
  }

}
