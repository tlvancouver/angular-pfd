import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PreviewComponent } from './preview/preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { DashboardEditorComponent } from './dashboard-editor/dashboard-editor.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { DashboardService } from './dashboard.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
        RouterModule.forRoot([
      { path: '', component: PreviewComponent },      
    ])
  ],
  declarations: [ AppComponent, TopbarComponent, PreviewComponent, DashboardComponent, CategoryComponent, DashboardEditorComponent, CategoryEditorComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DashboardService, MessageService]

})
export class AppModule { }
