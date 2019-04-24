import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateContentUsecase } from '../../domain/elephant/usecases/create-content.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: FormGroup;
  private createContent: CreateContentUsecase;

  constructor(fb: FormBuilder, createContent: CreateContentUsecase) {
    this.createContent = createContent;
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      placeholder: '',
      select: 'option'
    });
  }

  ngOnInit() {
  }

  submit() {
    this.createContent.execute(this.options.value).subscribe((success => {
      console.log(success);
    }), (reject) => {
      console.log(reject);
    });
  }
}
