import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonDeleteAllComponent } from './componentes/button-delete-all/button-delete-all.component';
import { InputAddItensComponent } from './componentes/input-add-itens/input-add-itens.component';
import { TodoListComponent } from './componentes/todo-list/todo-list.component';

//Pages home
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
