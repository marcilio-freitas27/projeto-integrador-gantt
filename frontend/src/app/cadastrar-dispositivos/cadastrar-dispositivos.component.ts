import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-dispositivos',
  templateUrl: './cadastrar-dispositivos.component.html',
  styleUrls: ['./cadastrar-dispositivos.component.css']
})
export class CadastrarDispositivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    const sidebar = document.getElementById('sidebar');
    if(sidebar!.style.width > '0px'){
      sidebar!.style.width = '0px';
      sidebar!.style.transition = 'width 0.5s';
    }else {
      sidebar!.style.transition = 'width 0.5s';
      sidebar!.style.width = '250px';
    }
  }

}
