import { ModuleWithProviders  } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { EmpComponent } from './components/emp.component';
import { MainpageComponent } from './components/mainpage.component';

const appRoutes: Routes = [
    {
        path: 'mainpage',
        component:  MainpageComponent
    },
      {
        path: 'emp',
        component:  EmpComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);