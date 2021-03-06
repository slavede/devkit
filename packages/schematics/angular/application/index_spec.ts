/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { SchematicTestRunner } from '@angular-devkit/schematics/test';
import { getFileContent } from '../utility/test';
import { Schema as AppSchema } from './schema';


describe('Application Schematic', () => {
  const schematicRunner = new SchematicTestRunner('@schematics/angular');
  const defaultOptions: AppSchema = {
    directory: 'foo',
    name: 'foo',
    path: 'src',
    prefix: '',
    sourceDir: 'src',
    inlineStyle: false,
    inlineTemplate: false,
    viewEncapsulation: 'None',
    changeDetection: 'Default',
    version: '1.2.3',
    routing: false,
    style: 'css',
    skipTests: false,
    minimal: false,
  };

  it('should create all files of an application', () => {
    const options = { ...defaultOptions };

    const tree = schematicRunner.runSchematic('application', options);
    const files = tree.files;
    expect(files.indexOf('/foo/.editorconfig')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/.angular-cli.json')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/.gitignore')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/karma.conf.js')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/package.json')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/protractor.conf.js')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/README.md')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/tsconfig.json')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/tslint.json')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/e2e/app.e2e-spec.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/e2e/app.po.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/favicon.ico')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/index.html')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/main.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/polyfills.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/styles.css')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/test.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/tsconfig.app.json')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/tsconfig.spec.json')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/typings.d.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/assets/.gitkeep')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/environments/environment.prod.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/environments/environment.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/app/app.module.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/app/app.component.css')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/app/app.component.html')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/app/app.component.spec.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/app/app.component.ts')).toBeGreaterThanOrEqual(0);
  });

  it('should handle the routing flag', () => {
    const options = { ...defaultOptions, routing: true };

    const tree = schematicRunner.runSchematic('application', options);
    const files = tree.files;
    expect(files.indexOf('/foo/src/app/app.module.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/foo/src/app/app-routing.module.ts')).toBeGreaterThanOrEqual(0);
    const moduleContent = getFileContent(tree, '/foo/src/app/app.module.ts');
    expect(moduleContent).toMatch(/import { AppRoutingModule } from '.\/app-routing.module'/);
    const routingModuleContent = getFileContent(tree, '/foo/src/app/app-routing.module.ts');
    expect(routingModuleContent).toMatch(/RouterModule.forRoot\(routes\)/);
  });
});
