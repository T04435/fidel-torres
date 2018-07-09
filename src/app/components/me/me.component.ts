import {Component, OnInit} from '@angular/core';
import {MeService} from '../../services/me.service';
import {Portfolio} from '../../model/Portfolio';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  assetsUrl: string = environment.assetsUrl;
  myWork: Portfolio[];

  constructor(private meService: MeService) {
  }

  ngOnInit() {
    this.myWork = [];

    this.meService.getPortfolio().subscribe(res => {
      this.myWork = res;
      console.log('My Work:', this.myWork);
    });
  }

}
