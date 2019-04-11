import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../../core/base/use-case';
import { <%= classify(name) %>Model } from '../model/<%= name %>.model';
import { <%= classify(name) %>Repository } from '../repository/<%= name %>.repository';

@Injectable({
  providedIn: 'root'
})
export class Get<%= classify(name) %>Usecase implements UseCase<void, <%= classify(name) %>Model> {

  constructor(private repository: <%= classify(name) %>Repository) {
  }

  execute(params: void): Observable<<%= classify(name) %>Model> {
    return this.repository.get<%= classify(name) %>();
  }
}
