import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http:HttpClient) { }

 public User={
    user_id:1,
    user_name:"Giriraj",
    email_id:"bhatiagiriraj007@gmail.com",
    password:"123456"



  }

  isloggedin=true;


  basic_url="http://localhost:54789/api/";



  getMovieByName1()
  {  
    return this.http.get(`http://localhost:54789/api/movie/1`);
  }


  getMovieByName(name)
  {let name1=name;
      if(name==undefined||name==null||name=="")
      {

        name1="123";
      }

    return this.http.get(this.basic_url+`getbyname/`+name1);
  }


  getMovieByYear(year)
  {


    return this.http.get(this.basic_url+'getmoviebyyear/'+year);
  }

  getMoviesInTheater()
  {

    return this.http.get(this.basic_url+`gettheater`);
  }


  getMovieById(id)
  {

    return this.http.get(this.basic_url+`movie/`+id);
  }

  getActorByMovie(id1)
  {

    return this.http.get(this.basic_url+`moviedirectorjoin/`+id1);



  }


  getUserRating(id)
  {


   return  this.http.get(this.basic_url+`rating/`+id);
  }


  getfavAndRatedMovie(id)
  {return this.http.get(this.basic_url+`getratedandfavmovies/`+id);


  }

  getfavMovie(id)
  {

    return this.http.get(this.basic_url+`favourite/`+id);
  }


  postrating(ob)
  {
    console.log(ob);


    return this.http.post(this.basic_url+"rating",ob);
  }

  getAvgRating(id)
  {


    return  this.http.get(this.basic_url+`calculateavg/`+id);
  }

  postFavMovie(ob)
  {

    return this.http.post(this.basic_url+`favourite`,ob);
  }


  
}
