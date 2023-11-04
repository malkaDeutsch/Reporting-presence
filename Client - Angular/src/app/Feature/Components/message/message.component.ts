import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { parents } from '@syncfusion/ej2-angular-grids';
import { LazyLoadEvent, SelectItem, SelectItemGroup } from 'primeng/api';
import { MessageDTO } from 'src/app/Models/Message';
import { ParentMessageDTO } from 'src/app/Models/ParentMessage';
import { MessagesParent } from './MessagesParent';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  m1:MessagesParent={userName:"שירה כהן",topic:"אוספים כסף למתנה לגננת",text:"1נא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m2:MessagesParent={userName:"אפרת לוי",topic:"לגבי שכר לימוד",text:"גם לכן הורידו יותר החודש עבור שכר הלימוד? אשמח לשמוע2 - 05485768696"}
  m3:MessagesParent={userName:"חני בלוך",topic:"אוספים כסף למתנה לגננת",text:"3נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m4:MessagesParent={userName:"חוי כהן",topic:"אוספים כסף למתנה לגננת",text:"4נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m5:MessagesParent={userName:"מלכה דייטש",topic:"אוספים כסף למתנה לגננת",text:"5נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  m6:MessagesParent={userName:"מלכה דייטש",topic:"אוספים כסף למתנה לגננת",text:"6נא להעביר לביתי עשרה שקלים למתנה תודה רבה"}
  messageArr:MessagesParent[]=[this.m1,this.m2,this.m3,this.m4,this.m5,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6,this.m6]
  sortOptions=['שם','תאריך','הודעות שלא נקראו'];
  sortBy:string='דואר נכנס';
  sortKey:string=''
  loading = [false, false, false, false]
  userNames=''
  controlChars=''
  isSendToGroup=false
children:number[]=[]
kinderGardenID:number=0

parentMessage:ParentMessageDTO=new ParentMessageDTO()
  parentsMessage:ParentMessageDTO[]=[]
  
  load(index:number): void {
      this.loading[index] = true;
      setTimeout(() => this.loading[index] = false, 1000);
  }
  prof:string='';
  profil(name:string){
this.prof=name.charAt(0);
  }
  text:string=''
  sendMessage(){
    this.sortBy='דואר יוצא';
  }
  allMesage(){
    this.sortBy='דואר נכנס';

  }
 
  text2:string='';
  topic:string='';
  userName:string='';


  deleteMessage(message:MessagesParent){
for(let i=0;i<this.messageArr.length;i++)
if(this.messageArr[i].topic==message.topic){
  alert(this.messageArr[i].text)
  this.messageArr.splice(i, 1);
break;}
}
openEditor:boolean=false;
openMessage:boolean=false;
sendBtn:boolean=false;
twoBtn:boolean=true;
selectedPartner: string='';

items: SelectItem[];



// selectedItem: string='';

loadLazyTimeout: any;

constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }


}
  ngOnInit(): void {
  }
  chooseMessage(message:MessagesParent){
    this.openMessage=true;
    this.twoBtn=true;
    this.sendBtn=false;
    this.openEditor=false;
    this.text2=message.text;
    this.topic=message.topic;
    this.userName=message.userName;
    
      }
closeCard(){
this.openEditor==false;
this.sendBtn=false;
this.twoBtn=true; 
this.openMessage=false;
  }

   

answer(){
this.openEditor==true;
this.sendBtn=true;
this.twoBtn=false;
}

reply(){
  this.openEditor==true;
  this.sendBtn=true;
  this.twoBtn=false;

}
htmlContent=''
// editorConfig: AngularEditorConfig = {
//     editable: true,
//       spellcheck: true,
//       height: '',
//       minHeight: '0',
//       maxHeight: 'auto',
//       width: 'auto',
//       minWidth: '0',
//       translate: 'yes',
//       enableToolbar: true,
//       showToolbar: true,
//       placeholder: 'ההודעה שלך כאן...',
//       defaultParagraphSeparator: '',
//       defaultFontName: '',
//       defaultFontSize: '',
//       fonts: [
//         {class: 'arial', name: 'Arial'},
//         {class: 'times-new-roman', name: 'Times New Roman'},
//         {class: 'calibri', name: 'Calibri'},
//         {class: 'comic-sans-ms', name: 'Comic Sans MS'}
//       ],
//       customClasses: [
//       {
//         name: 'quote',
//         class: 'quote',
//       },
//       {
//         name: 'redText',
//         class: 'redText'
//       },
//       {
//         name: 'titleText',
//         class: 'titleText',
//         tag: 'h1',
//       },
//     ],
//     uploadUrl: 'v1/image',
//     // upload: (file: File) => {  },
//     uploadWithCredentials: false,
//     sanitize: true,
//     toolbarPosition: 'top',
//     toolbarHiddenButtons: [
//       ['bold', 'italic'],
//       ['fontSize']
//     ]
// };
message:MessageDTO=null!

kinderGardenGeneral:number=-1!// באיזה גן נשלחת ההודעה לאתחל לפי המשתמש'
childID:number=-1

SendMessage(){
  this.message=new MessageDTO()
  this.message.kindergardenId=this.kinderGardenGeneral;
  this.message.text=this.htmlContent;
  //to do titel
  this.message.date=new Date()
  //אם זה גננת זה NULL
  this.message.childId=this.childID

  //פנייה לשרת לC#
//מפה ואילך בתוך SUBSCRIBE לתשובה MESSAGEID
//messageService.SaveMessage(this.message).subscribe(messageID=>
if(this.isSendToGroup){
this.parentMessage.kinderGardenId=this.kinderGardenID
//this.parentMessage.messageId=messageID
//פניה לשרת לC# לפונקציה השניה
//messageService.SaveMessageParent(this.parentMessage).subscribe(result=> result?alert("נשלח בהצלחה"):alert("נכשל"))
}
else{
    this.children.forEach(c=>{
      this.parentMessage=new ParentMessageDTO()
      this.parentMessage.parentId=c
//this.parentMessage.messageId=result from subscribe
//פניה לשרת לC# לפונקציה השניה
//await messageService.SaveMessageParent(this.parentMessage).subscribe(result=> result?alert("נשלח בהצלחה"):alert("נכשל"))
  })
}


}
}
