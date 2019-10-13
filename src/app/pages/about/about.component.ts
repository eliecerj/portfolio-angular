import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { SafeHtmlPipe } from 'src/app/shared/pipes/safehtml.pipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoService: InfoPaginaService,
              public safeHtml: SafeHtmlPipe) { }

  ngOnInit() {
  }

}
