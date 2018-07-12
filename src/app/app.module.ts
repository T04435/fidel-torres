import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MeComponent} from './components/me/me.component';
import {StyleGuideComponent} from './components/style-guide/style-guide.component';
import {ToolsEnvComponent} from './components/tools-env/tools-env.component';
import {FooterComponent} from './components/footer/footer.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {HttpClientModule} from '@angular/common/http';
import {MeService} from './services/me.service';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeComponent,
    StyleGuideComponent,
    ToolsEnvComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument( {
      name: 'ngrx T04435 DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [
    MeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
