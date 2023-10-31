import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {

  private fruitsdisplay: { _id: string, id: string, name: string, __v: string }[] = [];
  private updatefruitsdisplay = new Subject<{ _id: string, id: string, name: string, __v: string }[]>();

  constructor(private http: HttpClient) { }

  addfruit_service(pid: string, pname: string) {
    this.http.post<{ message: string, fruit: any }>('https://localhost:3000/api/fruits', { id: pid, name: pname })
      .subscribe((thefruit) => {
        this.fruitsdisplay.push(thefruit.fruit);
        this.updatefruitsdisplay.next([...this.fruitsdisplay]);
      })
  }

  getfruit_service() {
    this.http.get<{ message: String, fruits: any }>('https://localhost:3000/api/fruits')
      .subscribe((thefruit) => {
        this.fruitsdisplay = thefruit.fruits
        this.updatefruitsdisplay.next([...this.fruitsdisplay]);
      })
  }

  deletefruit_service(fruitid: string)
  {
    this.http.delete('https://localhost:3000/api/fruits/' + fruitid)
    .subscribe(()=>
    {
      const updatefruitsdeleted = this.fruitsdisplay.filter(fruit=>fruit._id!==fruitid);
      this.fruitsdisplay = updatefruitsdeleted;
      this.updatefruitsdisplay.next([...this.fruitsdisplay]);
    })
  }

  getUpdateListener()
  {
    return this.updatefruitsdisplay.asObservable();
  }

}
