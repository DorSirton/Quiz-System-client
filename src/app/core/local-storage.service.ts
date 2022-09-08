import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    get(key: string) {
        let str: string | null = localStorage.getItem(key) || null;
    
        if (str === null) return null;
        return JSON.parse(str);
      }
    
      set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
      }
}
