import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailComponent } from './about/personal-detail/personal-detail.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HeroComponent, AboutComponent, PersonalDetailComponent, PrimaryButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
