import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElephantRepository } from '../repository/elephant-web-entity';
import { UseCase } from '../../../core/base/use-case';
import { ElephantModel } from '../model/elephant.model';

@Injectable()
export class GetElephantByIdUsecase implements UseCase<number, ElephantModel> {

  constructor(private elephantRepository: ElephantRepository) {
  }

  execute(params: number): Observable<ElephantModel> {
    return this.elephantRepository.getElephantById(params);
  }
}
