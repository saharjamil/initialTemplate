import { Routes } from "@angular/router";

export const full: Routes = [
  { path: 'spec-pages', loadChildren: () => import('../../modules/spec-pages/spec-pages.module').then(m => m.SpecPagesModule) },
  { path: 'sample', loadChildren: () => import('../../modules/sample/sample.module').then(m => m.SampleModule) },
]