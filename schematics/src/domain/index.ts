import { Rule, chain } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { buildComponent } from '@angular/cdk/schematics';

export function DomainSchematic(options: Schema): Rule {
  return chain([
    buildComponent({...options}, {})
  ]);
}
