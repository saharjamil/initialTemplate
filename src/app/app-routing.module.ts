import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './shared/components/layout/full/full.component';
import { full } from './shared/routes/full';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/content';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: FullComponent, children: full },
  { path: '', component: ContentComponent, children: content },
  { path: "**", redirectTo: 'spec-pages/error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "top"
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
