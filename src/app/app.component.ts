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

  runCode() {
    const data = fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        script: "const data=['1','2','3','4','5'];\ndata.forEach((data)=>{\n    console.log(data)\n})",
        language: 'nodejs',
        versionIndex: '0',
        clientId: '5ba65790e79d996a95c0dabd77ba55c9',
        clientSecret: '4a2a62d3395ef874b9179a659bfc3f3110ed07c7b1196fe2ab5c5e2a9fef9e98',
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    }
} 