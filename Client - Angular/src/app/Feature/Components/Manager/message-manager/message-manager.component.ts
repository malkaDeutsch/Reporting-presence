import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MessagesParent } from '../../message/MessagesParent';

@Component({
  selector: 'app-message-manager',
  templateUrl: './message-manager.component.html',
  styleUrls: ['./message-manager.component.css']
})
export class MessageManagerComponent implements OnInit {
  m1:MessagesParent={userName:"שירה כהן",topic:"אוספים כסף למתנה לגננת",text:"1נא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m2:MessagesParent={userName:"אפרת לוי",topic:"לגבי שכר לימוד",text:"גם לכן הורידו יותר החודש עבור שכר הלימוד? אשמח לשמוע2 - 05485768696"}
  m3:MessagesParent={userName:"חני בלוך",topic:"אוספים כסף למתנה לגננת",text:"3נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m4:MessagesParent={userName:"חוי כהן",topic:"אוספים כסף למתנה לגננת",text:"4נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m5:MessagesParent={userName:"מלכה דייטש",topic:"אוספים כסף למתנה לגננת",text:"5נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m6:MessagesParent={userName:"מלכה דייטש",topic:"אוספים כסף למתנה לגננת",text:"6נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  messageArr:MessagesParent[]=[this.m1,this.m2,this.m3,this.m4,this.m5,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6]
  sortOptions=['שם','תאריך','הודעות שלא נקראו'];
  sortBy:string='הודעות ממורים';
sortKey:string=''
  constructor() { }
  ngOnInit(): void {
  }
  loading = [false, false, false, false]
  userNames=''
  controlChars=''
  load(index:number) {
      this.loading[index] = true;
      setTimeout(() => this.loading[index] = false, 1000);
  }
  prof:string='';
  profil(name:string){
this.prof=name.charAt(0);
  }
  text:string=''
  fromTeachers(){
    this.sortBy='הודעות ממורים';
  }
  fromParents(){
    this.sortBy='הודעות מהורים';

  }
  text2:string='';
  topic:string='';
  userName:string='';

  chooseMessage(message:MessagesParent){
this.text2=message.text;
this.topic=message.topic;
this.userName=message.userName;
  }
  deleteMessage(message:MessagesParent){
for(let i=0;i<this.messageArr.length;i++)
if(this.messageArr[i].topic==message.topic){
  alert(this.messageArr[i].text)
  this.messageArr.splice(i, 1);
break;}
}
htmlContent=''
editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => {  },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
}