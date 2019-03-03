import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
arrays=[1,2,3,4,5];
  constructor(private service:ApiConnectionService) { }


  User;
  movies=[];//data of movies which is rated
  fav_movies_details=[];
  mov_fav;
  ratings //contains rated movies of user
  ratingandfav;
  rateforfav;

  

  

  ngOnInit() {

   this.User= this.service.User;
   
//Rated Movies

    this.service.getUserRating(this.User.user_id).subscribe(val=>this.value(val) )

    this.service.getfavMovie(this.User.user_id).subscribe(val=>this.set(val))

    setTimeout(()=>{ this.check(this.movies,this.ratingandfav)},2000)


    this.service.getfavMovie(this.User.user_id).subscribe(val=>this.valset1(val))
    this.service.getUserRating(this.User.user_id).subscribe(val=>this.valset(val) )        
     setTimeout(()=>{this.checkRate(this.mov_fav,this.rateforfav)},2000)
     
    
   
  
  }


  valset(val)
  {

    this.rateforfav=val;
  }

  valset1(val)
  { this.mov_fav=val;

    for(var i=0;i<this.mov_fav.length;i++)
    {



      var movie=this.mov_fav[i];
      this.service.getMovieById(movie.mov_id).subscribe(val=>this.setDetails(i,val))
    }


  }

  checkRate(favMov,rated)
  {
    for(var i=0;i<favMov.length;i++)
    {


      for(var j=0;j<rated.length;j++)
      {  if(favMov[i].mov_id==rated[j].mov_id)
        {  
            this.fav_movies_details[i].isfav=rated[j].rating;
            break;


        }else{
          this.fav_movies_details[i].isfav="Not Rated";
        }



      }
    }
    console.log("Hi",this.fav_movies_details);
    



  }
  

  



 



  setDetails(i,value)
  { this.fav_movies_details.push(value)
    console.log("Movie1",this.fav_movies_details);



  }

  set(val)
  {

    this.ratingandfav=val;
    
  }


    value(val)
    {

      this.ratings=val
      console.log("jj",this.ratings);
      
    
      
       
       for(var i=0;i<this.ratings.length;i++)
      {



        var get=this.ratings[i];

        this.service.getMovieById(get.mov_id).subscribe(val1=>this.value1(i,val1));
      }
    }

   


    value1(i,get)
    {


      this.movies.push(get)
      console.log("kk",this.movies);
      this.combine();
    }
    


    combine()
    {
        

    for(var i=0;i<this.movies.length;i++)
    {
      for(var j=0;j<this.ratings.length;j++)

      if(this.movies[i].mov_id==this.ratings[j].mov_id)
      {
        var userrating=this.ratings[j].rating;
        this.movies[i].user=userrating;
      }
        


    }
  }



  check(mov,fav)
  {
    for(var i=0;i<mov.length;i++)
    {

      for(var j=0;j<fav.length;j++)
      {


        if(mov[i].mov_id==fav[j].mov_id)
        {

          this.movies[i].isfav=true;
          break;
        }
        else{
          this.movies[i].isfav=false;
        }
      }
    }
    console.log("final",this.movies);
  }



  

}
