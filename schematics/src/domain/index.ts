import { Rule, chain, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { buildComponent } from '@angular/cdk/schematics';
import { classify } from '@angular-devkit/core/src/utils/strings';

export function DomainSchematic(options: Schema): Rule {
  return chain([
    buildComponent({...options}, {}),
    createModelInCore(options),
  ]);
}

function createModelInCore(options: Schema) {
  return (host: Tree) => {
    const filePath = `src/app/core/domain/${options.name}.model.ts`;
    const className = classify(options.name);
    host.create(filePath, `export interface ${className}Model {\n\n}\n`);
    return host;
  };
}
