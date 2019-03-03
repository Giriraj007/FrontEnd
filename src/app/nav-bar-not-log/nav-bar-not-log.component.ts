import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar-not-log',
  templateUrl: './nav-bar-not-log.component.html',
  styleUrls: ['./nav-bar-not-log.component.css']
})
export class NavBarNotLogComponent implements OnInit {

  constructor(private service:ApiConnectionService) { 


  }


  movie;
  obj;

  ngOnInit() {
   




  }


  callme(movie)
  {
    if(movie==undefined)
    {

      alert("Not found")
    }else{   
      
      if(movie.length==0)
      {

        alert("Not Found");
      }
      else{      var name=movie[0];
    alert(name.mov_name);

  }
    }
  }


  getMovie(movie_search)
  {   

    this.service.getMovieByName(movie_search.value).subscribe(val=>this.callme(val)
      );
    
  }


  

}
