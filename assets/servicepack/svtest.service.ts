import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SvtestService {

  constructor() { }

  run(): void {
    console.log('Service Call test 成功');
  }
}
