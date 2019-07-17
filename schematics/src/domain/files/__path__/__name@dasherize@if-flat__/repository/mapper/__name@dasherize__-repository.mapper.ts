import { <%= classify(name) %>Entity  } from './<%= classify(name) %>-entity';
import { <%= classify(name) %>Model } from '../model/<%= name %>.model';
import { Mapper } from '../../../core/base/mapper';

export class <%= classify(name) %>RepositoryMapper extends Mapper <<%= classify(name) %>Entity, <%= classify(name) %>Model> {
  mapFrom(param: <%= classify(name) %>Entity): <%= classify(name) %>Model {
    return {

    };
  }

  mapTo(param: <%= classify(name) %>Model): <%= classify(name) %>Entity {
    return {

    };
  }
}
