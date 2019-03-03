import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-crousel-theater',
  templateUrl: './crousel-theater.component.html',
  styleUrls: ['./crousel-theater.component.css']
})
export class CrouselTheaterComponent implements OnInit {
 

 arrays:any;

  constructor(private service:ApiConnectionService) { }

  ngOnInit() {
    this.service.getMoviesInTheater().subscribe(
      val=>this.arrays=val
    );

  }

}
