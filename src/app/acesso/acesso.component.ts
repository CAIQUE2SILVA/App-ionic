import { IpService } from './ip.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
})
export class AcessoComponent implements OnInit {




  constructor(private ipService: IpService ) { }



  ngOnInit() {
    this.ipService.
  }



}
