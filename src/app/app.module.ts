import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {TemplateOneComponent} from './components/layouts/template-one/template-one.component';
import {AuthOneComponent} from './components/layouts/auth-one/auth-one.component';
import {FooterModule} from './components/shared/footer/footer.module';

const config: SocketIoConfig = {url: environment.webSocketUrl, options: {}};

@NgModule({
    declarations: [
        AppComponent,
        TemplateOneComponent,
        AuthOneComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        BrowserAnimationsModule,
        SocketIoModule.forRoot(config),
        FooterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
