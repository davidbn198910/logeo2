import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ResponseService } from '../_models/ResponseService';

@Injectable({
  providedIn: 'root'
})
export class EBillQueryServicesService {

  constructor( private htttp:HttpClient) { }
  Url='http://localhost:8085/Sesame/services/Authentication/obtenerRegistros';

  getStatusGen(){
    return this.htttp.get<ResponseService>(this.Url);
  }
}
