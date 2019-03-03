import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  arrays:any

  constructor(private service:ApiConnectionService,private route:Router) { }

  ngOnInit() {
    
    this.setPopular(2017)
  }
  




  setPopular(year)
  {

    this.service.getMovieByYear(year).subscribe(val=>
      this.arrays=val
      )






  }

}
