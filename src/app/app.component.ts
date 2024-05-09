import { Component } from '@angular/core';
 import { DiffEditorModel, MonacoEditorModule } from 'ngx-monaco-editor-v2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = {
    theme: 'vs-dark'
  };
  originalModel: DiffEditorModel  = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  onInit(editor: any) {
    // let line = editor.getPosition();
     
    // console.log(editor.getOptions());

    // console.log(editor.getValue());


    // console.log(editor.setValue("Hello World!"));

    // console.log(editor.dispose()); //to remove the editor
    // console.log();
    // this.modifiedModel.code = editor.getValue();

  }
  onChange(editor: any) { 
    // this.modifiedModel.code = editor;
    console.log(JSON.stringify(editor));
  }
  
} 