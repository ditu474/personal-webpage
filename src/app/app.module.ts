import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { PersonalDetailComponent } from './about/personal-detail/personal-detail.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroComponent,
    AboutComponent,
    PersonalDetailComponent,
    PrimaryButtonComponent,
    SectionTitleComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
