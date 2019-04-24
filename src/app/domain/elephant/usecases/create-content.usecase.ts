import { Injectable } from '@angular/core';

import { UseCase } from '../../../core/base/use-case';
import { ElephantWebRepository } from '../repository/elephant-web.repository';
import { ContentVO } from '../model/content.vo';
import { ContentModel } from '../model/content.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateContentUsecase implements UseCase<ContentModel, Promise<any>> {

  constructor(private elephantRepository: ElephantWebRepository) {
  }

  execute(params: any): Observable<any> {
    return new Observable((observer) => {
      ContentVO.create(params).then((resolve) => {
        this.elephantRepository.getAllElephants().subscribe((obs) => {
          observer.next(obs);
        }, (error: any) => {
          observer.error(error);
        });
      }, (voReject) => {
        observer.error(voReject);
      });
    });
  }
}
