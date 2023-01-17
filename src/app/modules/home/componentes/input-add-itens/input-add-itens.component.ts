import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent implements OnInit {

  @Output() public emmitItemTask = new EventEmitter();

  public addItem: string = ""; 

  public submit(){
    
    this.addItem=this.addItem.trim(); //retira os espaços antes e depois da primeira e ultima string 

    if(this.addItem){
      this.emmitItemTask.emit(this.addItem); //recebe o valor de addItem
      this.addItem= " " //reinicia o campo de adicionar o item   
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
