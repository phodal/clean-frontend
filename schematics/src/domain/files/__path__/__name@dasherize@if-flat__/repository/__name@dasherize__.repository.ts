import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { <%= classify(name) %>Model } from '../model/<%= name %>.model';
import { <%= classify(name) %>RepositoryMapper } from './<%= name %>-repository-mapper';
import { <%= classify(name) %>Entity } from './<%= classify(name) %>-entity';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Repository {
  mapper = new <%= classify(name) %>RepositoryMapper();
  constructor(
    private http: HttpClient
  ) {

  }

  get<%= classify(name) %>(): Observable<<%= classify(name) %>Model> {
    return this.http
      .get<<%= classify(name) %>Entity>(<%= url %>)
      .pipe(map(this.mapper.mapFrom));
  }
}
