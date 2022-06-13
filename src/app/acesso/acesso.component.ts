import { IpService } from './ip.service';
import { IpAcesso } from './ip';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations:[]
})
export class AcessoComponent implements OnInit {



  public acesso: IpAcesso[];

  constructor( private ipService: IpService) { }


  ngOnInit(){
    this.ipService.obterAcesso()
    .subscribe(
      ipacesso =>{
        this. acesso = ipacesso;
        console.log(ipacesso);

      },
      error => console.log(error)
    );
    AOS.init();

   }
}
