import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  constructor(private service:ApiConnectionService,private route:ActivatedRoute) { }

  value;
  id;

  movie;
  ratemovies;
  favmovies;
actors;
user_id;
isfav=false;
rate=false;;
israted;
israted1;
avgrating;
tooltipfav;
tooltiprate;
openModal=false;



  ngOnInit() {


    this.id=+this.route.snapshot.params.id;
    console.log(this.id);
    this.user_id=this.service.User.user_id;
    this.getMovieId(this.id)
    this.getActor(this.id)
   

    
    setTimeout(()=>{},4000)

   
    if(this.service.isloggedin==false)
    {

      this.tooltipfav="Login to add this movie to your favorite list"
      this.tooltiprate="Login to rate this movie"
    }else{

      


      
    }


    


   

   




   

    
  }


  openModalfun()
{
  if(this.rate==false&&this.service.isloggedin)
  {

    this.openModal=true;
  }


  }
  print(val)
  {

    if(this.rate==false&&this.service.isloggedin)
    {
      let obj={
        User_id:this.user_id,
        Mov_id:this.id,
        rating:val.value*2
       

      }

      this.service.postrating(obj).subscribe(val=>{console.log(val)});
      
      return;
    }
    else{
      console.log("Hello");


    }
  }


  checkFav()
  { var f=0;
    for(var i=0;i<this.favmovies.length;i++)
    {
      if(this.id==this.favmovies[i].mov_id)
      {

        this.value.isfav=true;
        this.isfav=true;
        f=1;
      }



    }
    if(f==0)
    {

      this.value.isfav=false;
      this.tooltipfav="Mark as favourite";
      this.isfav=false;
    }
    console.log("favdwdhedgeud",this.value)



  }



  checkrated()
  {  
    
    var f=0;

    for(var i=0;i<this.ratemovies.length;i++)
    {


      if(this.id==this.ratemovies[i].mov_id)
      {
        this.value.rating=this.ratemovies[i].rating;
        this.rate=true;
        this.openModal=false;
        f=1;

      }
     
    }

    if(f==0)
    {

      this.value.rating="Not Rated"
      this.rate=false;
      this.openModal=true;
      this.tooltiprate="Rate it";
    }

    console.log("Ratedwdhedgeud",this.value)


  }




  getFavMovies(user_id)
  {this.service.getfavMovie(user_id).subscribe(val=>{
    this.setFavMovies(val);

    
  })



  }

  setFavMovies(val)
  {
    this.favmovies=val;
    this.checkFav()
    console.log("fav",this.favmovies);


  }


  getRatedMovies(user_id)
  {

    this.service.getUserRating(user_id).subscribe(val=>{this.setRatedMovies(val)})



  }

  setRatedMovies(val)
  {
    this.ratemovies=val;
    this.checkrated()
    console.log("rated",this.ratemovies)


  }



  getMovieId(id)
{


  this.service.getMovieById(id).subscribe(val=>
    { 
      

    this.value=val;
    if(this.service.isloggedin)
    {
      this.getFavMovies(this.user_id)
  
      setTimeout(()=>{this.getRatedMovies(this.user_id)},2000)

    }
    else{
      this.isfav=false;
      this.rate=false;;
    }
    if(this.value.isintheator==true)
    { 
      

      this.avgrating=(this.value.avg_rating*100)/10;
    }
    else{
    this.service.getAvgRating(this.id).subscribe(val=>{
      this.avgrating=val;


      if(this.avgrating==null)
      {this.avgrating=(this.value.avg_rating*100)/10;


      }else{
      this.avgrating=(this.avgrating*100)/10
    }
    })
  }
    

      
    })



   
}


getActor(id)
{
  console.log(id);

  this.service.getActorByMovie(id).subscribe(val=>
    {
      this.actors=val;


    })
}


markfav()
{
  if(this.service.isloggedin==false)
  {

    return;
  }


  if(this.isfav==true)
  {

    return;
  }


 let obj ={
    mov_id:this.id,
    user_id:this.user_id


  }
  this.service.postFavMovie(obj).subscribe(val=>{console.log(val)})
  this.isfav=true;



  

}

 

}
