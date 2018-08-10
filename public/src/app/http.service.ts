import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getIndex();
    this.postCreate("Dan Engle", "Eviel developer", 35);
    this.deleteRemove("Evan Hobbs");
    this.getShow("5b6cd313ece1fb46cc8e355c");
    this.putUpdate("5b6cd531ece1fb46cc8e3571","Bill Nye the Science Guy");
    this.getPokemon(1);
  }
  getIndex(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/users', );
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  postCreate(name, desc, age){
    let tempObservable = this._http.post('/users', {name: name, desc: desc, age: age});
    tempObservable.subscribe(data => console.log("Got our index data!", data));
  }
  deleteRemove(name){
    let tempObservable = this._http.delete('/users/'+name);
    tempObservable.subscribe(data => console.log("Deleted our queried data!", data));
  }
  getShow(id){
    let tempObservable = this._http.get('/users/'+id);
    tempObservable.subscribe(data => console.log("Retrieved our queried data!", data));
  }
  putUpdate(id, name){
    let tempObservable = this._http.put('/users/'+id, {name: name});  
    tempObservable.subscribe(data => console.log("Updated our queried data!", data));
  }
  getPokemon(id){
    let pokemon
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    tempObservable.subscribe(data =>   console.log(pokemon = data) )
  }
}

