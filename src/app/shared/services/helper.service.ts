import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class HelperService{
 
  constructor(private route: ActivatedRoute) {}

  setToLocalStorage(key:string, val:any) {
    const data = JSON.stringify(val);
    localStorage.setItem(key, data);
  }

  getFromLocalStorage(key:string) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  removeFromLocalStorage(key:string) {
    localStorage.removeItem(key);
  }

  removeDuplicates(array: { id: string | number }[]) {
    let uniqueIds: { [key: string]: boolean } = {};
    let result: { id: string | number }[] = [];

    array.forEach((item) => {
      if (!uniqueIds[item.id]) {
        uniqueIds[item.id] = true;
        result.push(item);
      }
    });
     return result;
  }



  // hasDuplicates = (arr) => {
  //   const seen = {};
  //   for (const item of arr) {
  //     if (seen[item]) {
  //       return true;
  //     }
  //     seen[item] = true;
  //   }
  //   return false;
  // };

  getFileType(fileName: any) {
    const arr = fileName.split('.');
    console.log(arr[arr.length - 1])
    return arr[arr.length - 1]
  }

}
