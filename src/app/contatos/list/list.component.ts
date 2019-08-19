import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';
import { Contato } from '../shared/contato';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contatos: Observable<any>;

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.contatos = this.contatoService.getAll();
  }

  delete(key: string){
    this.contatoService.delete(key);
  }

  edit(contato: Contato, key: string){
    this.contatoDataService.changeContato(contato, key);
  }
}
