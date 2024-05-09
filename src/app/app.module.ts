import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonacoEditorModule ,NgxMonacoEditorConfig} from 'ngx-monaco-editor-v2';

const config: NgxMonacoEditorConfig = {
 baseUrl: 'https://unpkg.com/monaco-editor@0.33.0/min/',
 defaultOptions:{
  selectOnLineNumbers: true,
 }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}