import { Component, OnInit } from '@angular/core';
import{Router,RouterModule} from '@angular/router';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-nar-bar-login',
  templateUrl: './nar-bar-login.component.html',
  styleUrls: ['./nar-bar-login.component.css']
})
export class NarBarLoginComponent implements OnInit {

  constructor(private service:ApiConnectionService,private router:Router) { }

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
        this.router.navigateByUrl('/details/'+name.mov_id)
  

  }
    }
  }


  getMovie(movie_search)
  {   

    this.service.getMovieByName(movie_search.value).subscribe(val=>this.callme(val)
      );
    
  }


}
