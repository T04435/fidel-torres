import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MeComponent} from './components/me/me.component';
import {StyleGuideComponent} from './components/style-guide/style-guide.component';
import {ToolsEnvComponent} from './components/tools-env/tools-env.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeComponent,
    StyleGuideComponent,
    ToolsEnvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
