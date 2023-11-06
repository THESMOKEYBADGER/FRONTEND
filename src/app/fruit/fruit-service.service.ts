import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FruitServiceService {
  private fruitsdisplay:{_id:string,id:string,name:string, __v:string}[] = [];
  private updatedfruitsdisplay = new Subject<{_id:string,id:string,name:string, __v:string}[]>();

  constructor(private http: HttpClient) { }

  addfruit_service(pid:string, pname:string)
  {
    this.http.post<{message:string,fruit:any}>('https://localhost:3000/api/uploads',{id:pid,name:pname})
    .subscribe((thefruit)=>
    {
      this.fruitsdisplay.push(thefruit.fruit);
      this.updatedfruitsdisplay.next([...this.fruitsdisplay]);
    })
  }

  getfruit_service() {
    this.http.get<{ message: string, uploads: {_id: string, id: string, name: string, __v: string}[] }>('https://localhost:3000/api/uploads')
      .subscribe((response) => {
        this.fruitsdisplay = response.uploads;
        this.updatedfruitsdisplay.next([...this.fruitsdisplay]);
      });
  }
  
  
  deletefruit_service(fruitid: string){
    this.http.delete('https://localhost:3000/api/uploads/' + fruitid)
    .subscribe(()=>
    {
      const updatedfruitsdeleted = this.fruitsdisplay.filter(fruit=>fruit._id!==fruitid);
      this.fruitsdisplay= updatedfruitsdeleted;
      this.updatedfruitsdisplay.next([...this.fruitsdisplay]);
  
    })
  }
  
  getUpdateListener()
  {
    return this.updatedfruitsdisplay.asObservable();
  }
}