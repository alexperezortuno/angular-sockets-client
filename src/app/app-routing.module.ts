import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateOneComponent} from './components/layouts/template-one/template-one.component';
import {AuthOneComponent} from './components/layouts/auth-one/auth-one.component';

const routes: Routes = [
    {
        path: 'dash',
        component: TemplateOneComponent,
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'auth',
        component: AuthOneComponent,
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
    },
    {path: '**', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
