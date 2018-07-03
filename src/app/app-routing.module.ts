import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeComponent} from './components/me/me.component';
import {StyleGuideComponent} from './components/style-guide/style-guide.component';
import {ToolsEnvComponent} from './components/tools-env/tools-env.component';

const routes: Routes = [
  {
    path: '',
    component: MeComponent
  },
  {
    path: 'guide',
    component: StyleGuideComponent
  },
  {
    path: 'environment',
    component: ToolsEnvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
