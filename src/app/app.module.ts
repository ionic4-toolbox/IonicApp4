import { EscolhaPage } from './../pages/escolha/escolha';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { IntroPageModule } from '../pages/intro/intro.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { HttpClientModule } from '@angular/common/http';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';

import { IonicStorageModule } from '@ionic/storage';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
/**
 * TODO: SEARCH SOLUTION MERGEMAP MODULE NO FOUND
 */
import 'rxjs/add/observable/mergeMap';
import 'rxjs/add/observable/of';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    PerfilPageModule,
    ConfiguracoesPageModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'aluracar',
      storeName: 'agendamentos',
      //driverorder possui array com os bancos que quero trabalhsr
      driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    CarrosServiceProvider,
    AgendamentosServiceProvider
  ]
})
export class AppModule {}
