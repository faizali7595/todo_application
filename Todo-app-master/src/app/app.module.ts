import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
