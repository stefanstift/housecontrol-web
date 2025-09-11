import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import {enableProdMode} from "@angular/core";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      provideHttpClient()
    ]
  })
  .catch(err => console.error(err));
